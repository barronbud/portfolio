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
        name: "Home",
    },
    "/articles": {
        name: "Leadership Insights",
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
        name: "Portfolio",
    },
};
