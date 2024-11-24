import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDTO } from 'src/common/dto';
import { Users } from 'src/common/entity';
import { JWTPayload } from 'src/common/interfaces';
import { BcryptService } from 'src/common/services';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
		@Inject(BcryptService)
		private readonly bcryptService: BcryptService,
		@Inject(JwtService)
		private readonly jwtService: JwtService,
	) {}

	async signIn(inputs: SignInDTO) {
		const user = await this.users.findOne({
			where: {
				email: inputs.email,
			},
		});
		if (!user) {
			throw new HttpException(`Not found!`, HttpStatus.NOT_FOUND);
		}
		if (
			!(await this.bcryptService.compare(inputs.password, user.password))
		) {
			throw new HttpException(
				`Invalid credentials!`,
				HttpStatus.UNAUTHORIZED,
			);
		}
		const payload: JWTPayload = {
			id: user.id,
			email: user.email,
			role: user.role,
		};
		const token = await this.jwtService.signAsync(payload);
		return token;
	}
}
