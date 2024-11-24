import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/common/decorators';
import { Users } from 'src/common/entity';
import { UserRole } from 'src/common/enums';

@Injectable()
export class RolesGuard implements CanActivate {
	private readonly logger = new Logger(RolesGuard.name);
	constructor(private readonly reflector: Reflector) {}
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()],
		);
		if (!requiredRoles) {
			return true;
		}
		const request: Request = context.switchToHttp().getRequest();
		const user = request.user as Users;
		if (!user) {
			throw new UnauthorizedException();
		}
		const isIncludeRequiredRoles = requiredRoles.some((role: UserRole) =>
			user?.role?.includes(role),
		);

		if (!isIncludeRequiredRoles) {
			throw new ForbiddenException();
		}
		return true;
	}
}
