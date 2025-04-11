export enum PostBlockType {
	TEXT = 'text',
	IMAGE = 'image',
	CODE = 'code',
}

export interface PostBaseBlock {
	id: string;
	type: PostBlockType;
}

export interface PostTextBlock extends PostBaseBlock {
	type: PostBlockType.TEXT;
	body: string[];
}

export interface PostCodeBlock extends PostBaseBlock {
	type: PostBlockType.CODE;
	body: string;
}

export interface PostImageBlock extends PostBaseBlock {
	type: PostBlockType.IMAGE;
	images: { src: string; caption: string }[];
}

export type PostBlock = PostTextBlock | PostImageBlock | PostCodeBlock;

export interface PostType {
	id: string;
	authorUsername: string;
	createdAt: string;
	title: string;
	upvotes: number;
	downvotes: number;
	rating: number;
	views: number;
	commentsCount: number;
	commentsId: string[];
	tags: string[];
	body: PostBlock[];
}
