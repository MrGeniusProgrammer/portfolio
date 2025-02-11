export interface ContentMeta {
	filePath: string;
	fileName: string;
	directory: string;
	path: string;
	extension: string;
}

export interface Content {
	slug: string;
	title: string;
	overview: string;
	attachment: string;
	mdx: string;
	raw: string;
	meta: ContentMeta;
	tags: string[];
}
