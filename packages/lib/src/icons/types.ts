export type IconData = {
	body: string;
	width?: number;
	height?: number;
	left?: number;
	top?: number;
	rotate?: number;
	hFlip?: boolean;
	vFlip?: boolean;
};

export type IconMetadata = {
	name: string;
	category: string;
	sourceReferenceProject: string;
	sourceIconName: string;
	sourceUrl: string;
	license: string;
	attribution: string;
	intendedSize: number;
};
