import {
	IsDate,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	Validate,
} from 'class-validator';
import { Gender, UserRole } from 'src/common/enums';
/**
 *
 * ----------------------------------------------------------
 * Custom Validations
 * ----------------------------------------------------------
 *
 */
import {
	PasswordPatternValidation,
	UniqueEmailValidation,
	UniqueUsernameValidation,
	UsernamePatternValidation,
} from 'src/common/validations';

export class UsersDTO {
	@IsNotEmpty()
	@IsString()
	@Validate(UsernamePatternValidation)
	@Validate(UniqueUsernameValidation)
	@MaxLength(50)
	username: string;

	@IsNotEmpty()
	@IsEmail()
	@Validate(UniqueEmailValidation)
	@MaxLength(100)
	email: string;

	@IsNotEmpty()
	@IsString()
	@Validate(PasswordPatternValidation)
	password: string;

	@IsEnum(UserRole)
	role: UserRole;
}

export class UserDetailsDTO extends UsersDTO {
	@IsString()
	@IsNotEmpty()
	nama: string;

	@IsDate()
	@IsOptional()
	tanggal_lahir: Date;

	@IsEnum(Gender)
	jenis_kelamin: Gender;

	@IsString()
	@IsOptional()
	alamat: string;

	@IsString()
	@IsOptional()
	no_telepon: string;
}
