import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import {
	UNIQUE_EMAIL_MESSAGE,
	UNIQUE_USERNAME_MESSAGE,
} from 'src/common/constant';
import { Users } from 'src/common/entity';
import { Repository } from 'typeorm';

/**
 *
 * ----------------------------------------------------------
 * Validation for unique username
 * ----------------------------------------------------------
 *
 */
@ValidatorConstraint({
	async: true,
})
@Injectable()
export class UniqueUsernameValidation implements ValidatorConstraintInterface {
	constructor(
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
	) {}
	async validate(username: string): Promise<boolean> {
		const users = await this.users.findOne({
			where: {
				username,
			},
		});
		return !users;
	}
	defaultMessage?(): string {
		return UNIQUE_USERNAME_MESSAGE;
	}
}

/**
 *
 * ----------------------------------------------------------
 * Validation for unique emails
 * ----------------------------------------------------------
 *
 */
@ValidatorConstraint({
	async: true,
})
@Injectable()
export class UniqueEmailValidation implements ValidatorConstraintInterface {
	constructor(
		@InjectRepository(Users)
		private readonly users: Repository<Users>,
	) {}
	async validate(email: string): Promise<boolean> {
		const users = await this.users.findOne({
			where: {
				email,
			},
		});
		return !users;
	}
	defaultMessage?(): string {
		return UNIQUE_EMAIL_MESSAGE;
	}
}
