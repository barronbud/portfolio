import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";
import { Post } from "@/app/mdx-utils";

export interface PostMetadataOptions {
    post: Post;
    type: "articles" | "projects";
}

export interface JsonLdSchema {
    "@context": string;
    "@type": string;
    headline: string;
    datePublished: string;
    dateModified: string;
    description: string;
    image: string;
    url: string;
    author: {
        "@type": string;
        name: string;
    };
}

export function generatePostMetadata({
    post,
    type,
}: PostMetadataOptions): Metadata {
    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;

    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/${type}/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export function generateJsonLdSchema({
    post,
    type,
}: PostMetadataOptions): JsonLdSchema {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.metadata.title,
        datePublished: post.metadata.publishedAt,
        dateModified: post.metadata.publishedAt,
        description: post.metadata.summary,
        image: post.metadata.image
            ? `${baseUrl}${post.metadata.image}`
            : `/og?title=${encodeURIComponent(post.metadata.title)}`,
        url: `${baseUrl}/${type}/${post.slug}`,
        author: {
            "@type": "Person",
            name: "My Portfolio",
        },
    };
}

// Helper function to generate JSON-LD script content
export function getJsonLdScriptContent({
    post,
    type,
}: PostMetadataOptions): string {
    const schema = generateJsonLdSchema({ post, type });
    return JSON.stringify(schema);
}
