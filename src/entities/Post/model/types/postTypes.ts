export enum PostBlockTypes {
	TEXT = 'text',
	IMAGE = 'image',
	CODE = 'code',
}

export interface PostBaseBlock {
	id: string;
	type: PostBlockTypes;
}

export interface PostTextBlock extends PostBaseBlock {
	type: PostBlockTypes.TEXT;
	body: string[];
}

export interface PostCodeBlock extends PostBaseBlock {
	type: PostBlockTypes.CODE;
	body: string;
}

export interface PostImageBlock extends PostBaseBlock {
	type: PostBlockTypes.IMAGE;
	title: string | null;
	src: string;
}

export type PostBlock = PostTextBlock | PostImageBlock | PostCodeBlock;

export interface PostType {
	id: string;
	author: string;
	createdAt: string;
	tags: string[];
	title: string;
	upvotes: string;
	downvotes: string;
	body: PostBlock;
}
