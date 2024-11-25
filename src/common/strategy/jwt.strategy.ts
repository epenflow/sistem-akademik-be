import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Users } from 'src/common/entity';
import { JWTPayloadResponse } from 'src/common/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.SECRET,
		});
	}
	async validate(payload: JWTPayloadResponse) {
		const users = await this.users.findOne({
			where: {
				id: payload.id,
			},
		});
		if (!users || !payload) {
			throw new UnauthorizedException();
		}
		return users;
	}
}
