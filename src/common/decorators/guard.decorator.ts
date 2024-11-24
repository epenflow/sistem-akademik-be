import { SetMetadata } from '@nestjs/common';
import { AbilityActions, UserRole } from 'src/common/enums';
import { AbilitySubjects } from 'src/common/factories';

export function SetAbilities(
	...abilities: [AbilityActions, AbilitySubjects][]
) {
	return SetMetadata('abilities', abilities);
}

export const ROLES_KEY = 'roles';
export function Roles(...roles: UserRole[]) {
	return SetMetadata(ROLES_KEY, roles);
}
export function AdminRole() {
	return SetMetadata(ROLES_KEY, [UserRole.ADMIN]);
}
export function SiswaRole() {
	return SetMetadata(ROLES_KEY, [UserRole.SISWA]);
}
export function GuruRole() {
	return SetMetadata(ROLES_KEY, [UserRole.GURU]);
}
