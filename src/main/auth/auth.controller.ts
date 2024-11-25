import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from 'src/common/dto';
import { AuthService } from 'src/main/auth/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('sign-in')
	async signIn(@Body() inputs: SignInDTO) {
		return await this.authService.signIn(inputs);
	}

	@Post('sign-up')
	async signUp(@Body() inputs: SignUpDTO) {
		return await this.authService.signUp(inputs);
	}
}
