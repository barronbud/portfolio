import { getBlogPosts } from "app/articles/utils";

export const baseUrl = "https://jeffreybarron.dev";

export default async function sitemap() {
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/articles/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    let routes = ["", "/articles"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...blogs];
}
