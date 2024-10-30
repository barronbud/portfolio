import { getBlogPosts, getProjectPosts } from "@/app/mdx-utils";

export const baseUrl = "https://jeffreybarron.dev";

export default async function sitemap() {
    const blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/articles/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    const projects = getProjectPosts().map((post) => ({
        url: `${baseUrl}/projects/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    const routes = ["", "/articles", "/projects"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...blogs, ...projects];
}
