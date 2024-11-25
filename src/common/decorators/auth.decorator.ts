import {
	createParamDecorator,
	ExecutionContext,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JWTPayloadResponse } from 'src/common/interfaces';

export const Auth = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		const jwtService = new JwtService();
		const request: Request = context.switchToHttp().getRequest();
		const token = request.headers['authorization'].split(' ')[1];
		if (!token) {
			throw new UnauthorizedException();
		}

		const payload: JWTPayloadResponse = jwtService.decode(token);
		return { token, payload };
	},
);
