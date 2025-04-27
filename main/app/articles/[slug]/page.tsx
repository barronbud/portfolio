import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/app/mdx-utils";
import { baseUrl } from "@/app/sitemap";
import { SeriesNavigation } from "@/components/series-navigation";

export async function generateStaticParams() {
    const posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
        return;
    }

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
            url: `${baseUrl}/articles/${post.slug}`,
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

export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const posts = getBlogPosts();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${baseUrl}${post.metadata.image}`
                            : `/og?title=${encodeURIComponent(
                                  post.metadata.title
                              )}`,
                        url: `${baseUrl}/articles/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: "My Portfolio",
                        },
                    }),
                }}
            />
            <h1 className="title font-semibold text-3xl tracking-tighter">
                {post.metadata.title}
            </h1>
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
            {post.metadata.seriesOrder && (
                <SeriesNavigation currentPost={post} allPosts={posts} />
            )}
        </section>
    );
}
