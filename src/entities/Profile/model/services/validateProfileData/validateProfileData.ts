import { Profile } from '../../types/Profile';

export const validateProfileData = (profile: Profile) => {
	const { firstName, lastName, age } = profile;

	if (!firstName || !lastName) {
		return '';
	}

	if (!age || !Number.isInteger(age)) {
		return '';
	}
	return '';
};
