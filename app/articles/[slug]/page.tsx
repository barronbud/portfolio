import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/app/mdx-utils";
import { SeriesNavigation } from "@/components/series-navigation";
import { CategorySubnav } from "@/components/navigation/category-subnav";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { generatePostMetadata } from "@/lib/metadata-utils";
import { JsonLdScript } from "@/components/json-ld-script";

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

    return generatePostMetadata({ post, type: "articles" });
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
            <JsonLdScript post={post} type="articles" />
            {post.metadata.category && (
                <Breadcrumbs currentCategory={post.metadata.category} />
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    {post.metadata.category && (
                        <CategorySubnav
                            currentCategory={post.metadata.category}
                        />
                    )}
                </div>
                <div className="md:col-span-3">
                    <h1 className="title font-semibold text-3xl tracking-tighter">
                        {post.metadata.title}
                    </h1>
                    <article className="prose">
                        <CustomMDX source={post.content} />
                    </article>
                    {post.metadata.seriesOrder && (
                        <SeriesNavigation currentPost={post} allPosts={posts} />
                    )}
                </div>
            </div>
        </section>
    );
}
