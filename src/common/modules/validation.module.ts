import { Module } from '@nestjs/common';
import {
	PasswordPatternValidation,
	UniqueEmailValidation,
	UniqueUsernameValidation,
	UsernamePatternValidation,
} from 'src/common/validations';

@Module({
	providers: [
		PasswordPatternValidation,
		UsernamePatternValidation,
		UniqueUsernameValidation,
		UniqueEmailValidation,
	],
	exports: [
		PasswordPatternValidation,
		UsernamePatternValidation,
		UniqueUsernameValidation,
		UniqueEmailValidation,
	],
})
export class ValidationModule {}
