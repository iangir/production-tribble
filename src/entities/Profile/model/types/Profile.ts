export interface Profile {
	firstName: string;
	lastName: string;
	age: number;
	country: string;
	city: string;
	username: string;
	avatar: string;
}

export interface ProfileSchema {
	data?: Profile;
	isLoading: boolean;
	readonly: boolean;
	error?: string;
}
