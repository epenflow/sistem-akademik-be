export const PASSWORD_PATTERN: RegExp =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
export const PASSWORD_MESSAGE =
	'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
export const USERNAME_PATTERN: RegExp = /^[a-z][a-z0-9._]*$/;
export const USERNAME_MESSAGE =
	'Username should start with a lowercase letter and contain only letter, digits, underscore, and periods';

export const UNIQUE_USERNAME_MESSAGE =
	'Username already in use. Please choose another username';
export const UNIQUE_EMAIL_MESSAGE =
	'Email already in use. Please choose another email.';
