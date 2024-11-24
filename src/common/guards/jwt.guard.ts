import {
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class JWTGuard extends AuthGuard('jwt') {
	/**
	 *
	 * ----------------------------------------------------------
	 * If necessary implements blacklisted token
	 * ----------------------------------------------------------
	 *
	 */
	constructor() {
		super();
	}

	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request: Request = this.getRequest(context);
		const token = request.headers['authorization']?.split(' ')[1];

		if (!token) {
			throw new UnauthorizedException();
		}
		return super.canActivate(context);
	}
}
