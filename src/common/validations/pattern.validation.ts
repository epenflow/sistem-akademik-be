import { Injectable } from '@nestjs/common';
import {
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import {
	PASSWORD_MESSAGE,
	PASSWORD_PATTERN,
	USERNAME_MESSAGE,
	USERNAME_PATTERN,
} from 'src/common/constant';

@ValidatorConstraint({
	async: true,
})
@Injectable()
export class PasswordPatternValidation implements ValidatorConstraintInterface {
	private readonly pattern = PASSWORD_PATTERN;
	validate(value: string): Promise<boolean> | boolean {
		return this.pattern.test(value);
	}
	defaultMessage?(): string {
		return PASSWORD_MESSAGE;
	}
}

@ValidatorConstraint({
	async: true,
})
@Injectable()
export class UsernamePatternValidation implements ValidatorConstraintInterface {
	private readonly pattern = USERNAME_PATTERN;
	validate(value: string): Promise<boolean> | boolean {
		return this.pattern.test(value);
	}
	defaultMessage?(): string {
		return USERNAME_MESSAGE;
	}
}
