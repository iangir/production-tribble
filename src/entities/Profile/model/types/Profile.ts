export interface Profile {
	firstName?: string;
	lastName?: string;
	age?: number;
	country?: string;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
}
