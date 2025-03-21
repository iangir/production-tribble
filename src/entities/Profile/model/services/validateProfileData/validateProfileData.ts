import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (
	profile?: Profile,
): ValidateProfileError[] => {
	if (!profile) return [ValidateProfileError.NO_DATA];
	const { username, email } = profile;
	const errors: ValidateProfileError[] = [];
	if (!username || !email) errors.push(ValidateProfileError.REQUIRED);
	if (username && (username.length < 5 || username.length > 20)) {
		errors.push(ValidateProfileError.USERNAME_LENGTH);
	}
	if (
		username
		&& !/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username)
	) {
		errors.push(ValidateProfileError.USERNAME_SYMBOLS);
	}
	if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		errors.push(ValidateProfileError.INCORRECT_EMAIL);
	}
	return errors;
};
