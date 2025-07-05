import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getProjectPosts } from "@/app/mdx-utils";
import { generatePostMetadata } from "@/lib/metadata-utils";
import { JsonLdScript } from "@/components/json-ld-script";

export async function generateStaticParams() {
    const posts = getProjectPosts();

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
    const post = getProjectPosts().find((post) => post.slug === slug);

    if (!post) {
        return;
    }

    return generatePostMetadata({ post, type: "projects" });
}

export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getProjectPosts().find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <JsonLdScript post={post} type="projects" />
            <h1 className="title font-semibold text-3xl tracking-tighter">
                {post.metadata.title}
            </h1>
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    );
}
