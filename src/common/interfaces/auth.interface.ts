import { UserRole } from 'src/common/enums';

export interface JWTPayload {
	id: string;
	email: string;
	role: UserRole;
}
export interface JWTPayloadResponse extends JWTPayload {
	iat: number;
	exp: number;
}

export interface AuthResponse {
	token: string;
	payload: JWTPayloadResponse;
}
