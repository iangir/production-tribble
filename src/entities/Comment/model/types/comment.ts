import { User } from 'entities/User';

export interface CommentType {
	id: string;
	parentId: string;
	user: User;
	upvotes: number;
	downvotes: number;
	rating: number;
	createdAt: string;
	body: string;
}
