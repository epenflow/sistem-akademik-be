import {
	AbilityBuilder,
	AbilityClass,
	InferSubjects,
	PureAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Users } from 'src/common/entity';
import { AbilityActions, UserRole } from 'src/common/enums';

export type AbilitySubjects = InferSubjects<typeof Users | 'all'>;
type AppAbility = PureAbility<[AbilityActions, AbilitySubjects]>;

@Injectable()
export class AbilityFactory {
	createForUser(user: Users) {
		const { can, build } = new AbilityBuilder<
			PureAbility<[AbilityActions, AbilitySubjects]>
		>(PureAbility as AbilityClass<AppAbility>);
		if (user.role === UserRole.ADMIN) {
			can(AbilityActions.MANAGE, Users);
		} else {
			can(AbilityActions.READ, Users);
		}
		return build();
	}
}
