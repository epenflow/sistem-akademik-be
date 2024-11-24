import { UserRole } from 'src/common/enums';

export interface JWTPayload {
	id: string;
	email: string;
	role: UserRole;
}
