export interface Category {
    name: string;
    slug: string;
    description: string;
    sortBy?: "seriesOrder" | "date";
}

export const categories: Category[] = [
    {
        name: "General",
        slug: "general",
        description:
            "Engineering leadership insights and team management strategies",
        sortBy: "date",
    },
    {
        name: "How I Hire",
        slug: "how-i-hire",
        description:
            "Proven hiring strategies for building high-velocity engineering teams",
        sortBy: "seriesOrder",
    },
];

export function getCategory(slug: string): Category | undefined {
    return categories.find((category) => category.slug === slug);
}

export function getCategoryPosts(posts: any[], category: Category) {
    return posts
        .filter((post) => post.metadata.category === category.slug)
        .sort((a, b) => {
            if (category.sortBy === "seriesOrder") {
                const orderA = parseInt(a.metadata.seriesOrder || "0");
                const orderB = parseInt(b.metadata.seriesOrder || "0");
                if (orderA !== orderB) {
                    return orderA - orderB;
                }
            }
            return (
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            );
        });
}
