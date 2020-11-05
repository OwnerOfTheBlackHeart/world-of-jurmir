export interface TemplateFolderInfo {
	name: string;
	path: string;
	fileType: string;
}

export interface TemplateFolderGroup {
	name: string;
	basePath: string;
	folders: TemplateFolderInfo[];
}
