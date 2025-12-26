
export interface InnerItem {
	name: string,
	href?: string,
	lang?: string,
	code?: string,
}

export interface MegaMenuContent {
	buttons: {
		name: string;
		id: string;
	}[];
	panels: {
		id: string;
		subPanels: {
			title: string;
			items: InnerItem[];
		}[];
	}[];
}

export interface HeaderItem {
	name: string,
	href?: string,
	innerItems?: InnerItem[]
	megaMenuContent?: MegaMenuContent,
}

export interface HeaderContent {
	itemsMobile: HeaderItem[],
	items: HeaderItem[],
	config: HeaderItem,
	logoName: string
	userList: HeaderItem,
}