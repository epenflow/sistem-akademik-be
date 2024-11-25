import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UsersDTO } from 'src/common/dto/user.dto';

export class SignInDTO {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString()
	password: string;
}

export class SignUpDTO extends UsersDTO {}
