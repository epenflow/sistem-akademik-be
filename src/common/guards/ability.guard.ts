import {
	CanActivate,
	ExecutionContext,
	Injectable,
	Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Users } from 'src/common/entity';
import { AbilityActions } from 'src/common/enums';
import { AbilityFactory, AbilitySubjects } from 'src/common/factories';

@Injectable()
export class AbilityGuard implements CanActivate {
	private readonly logger = new Logger(AbilityGuard.name);
	constructor(
		private reflector: Reflector,
		private abilityFactory: AbilityFactory,
	) {}
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const requiredAbilities = this.reflector.get<[AbilityActions, string]>(
			'abilities',
			context.getHandler(),
		);
		if (!requiredAbilities) {
			return true;
		}
		const request: Request = context.switchToHttp().getRequest();
		const user = request.user as Users;
		const ability = this.abilityFactory.createForUser(user);

		return requiredAbilities.every(([action, subject]) =>
			ability.can(action as AbilityActions, subject as AbilitySubjects),
		);
	}
}
