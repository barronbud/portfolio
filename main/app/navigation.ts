export interface NavItem {
    name: string;
    subItems?: {
        [key: string]: {
            name: string;
        };
    };
}

export const navItems: { [key: string]: NavItem } = {
    "/": {
        name: "portfolio home",
    },
    "/articles": {
        name: "articles",
        subItems: {
            "/articles/category/general": {
                name: "General",
            },
            "/articles/category/how-i-hire": {
                name: "How I Hire",
            },
        },
    },
    "/projects": {
        name: "past projects",
    },
};
