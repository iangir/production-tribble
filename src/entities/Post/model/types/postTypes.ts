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
	src: { src: string; title: string }[];
}

export type PostBlock = PostTextBlock | PostImageBlock | PostCodeBlock;

export interface PostType {
	id: string;
	author: string;
	createdAt: string;
	title: string;
	upvotes: string;
	downvotes: string;
	rating: string;
	views: string;
	commentsCount: string;
	tags: string[];
	body: PostBlock[];
}
