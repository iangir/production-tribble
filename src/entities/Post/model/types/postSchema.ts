import { PostType } from './postTypes';

export interface PostSchema {
	isLoading: boolean;
	error?: string;
	data?: PostType;
}
