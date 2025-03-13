export enum ValidateProfileError {
	USERNAME_LENGTH = 'USERNAME_LENGTH',
	USERNAME_SYMBOLS = 'USERNAME_SYMBOLS',
	USERNAME_REQUIRED = 'USERNAME_REQUIRED',
	USERNAME_EXISTS = 'USERNAME_EXISTS',
	INCORRECT_EMAIL = 'INCORRECT_EMAIL',
	EMAIL_REQUIRED = 'EMAIL_REQUIRED',
	EMAIL_EXISTS = 'EMAIL_EXISTS',
	SERVER_ERROR = 'SERVER_ERROR',
	NO_DATA = 'NO_DATA',
}

export interface Profile {
	email?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileSchema {
	isEditing: boolean;
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	validateErrors?: ValidateProfileError[];
}
