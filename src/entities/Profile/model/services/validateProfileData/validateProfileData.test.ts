import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('loginByUsername', () => {
	const data = {
		username: 'username',
		email: 'email@email.com',
	};

	test('correct data', () => {
		expect(validateProfileData(data)).toEqual([]);
	});

	test('username validation', async () => {
		expect(validateProfileData({ ...data, username: '' })).toEqual([
			ValidateProfileError.REQUIRED,
		]);
		expect(validateProfileData({ ...data, username: '1234' })).toEqual([
			ValidateProfileError.USERNAME_LENGTH,
		]);
		expect(
			validateProfileData({
				...data,
				username: 'usernamemorethan20symbols',
			}),
		).toEqual([ValidateProfileError.USERNAME_LENGTH]);
	});

	test('email validation', async () => {
		expect(validateProfileData({ ...data, email: '' })).toEqual([
			ValidateProfileError.REQUIRED,
		]);
		expect(
			validateProfileData({ ...data, email: 'someemail.com' }),
		).toEqual([ValidateProfileError.INCORRECT_EMAIL]);
	});
});
