import { ArticleCategories } from "@/components/article-categories";
import { PostPreview } from "@/components/post-preview";
import { getBlogPosts, Post } from "@/app/mdx-utils";

export async function generateStaticParams() {
    return [{ slug: "how-i-hire" }, { slug: "general" }];
}

export default async function CategoryPage({
    params,
}: {
    params: { slug: string };
}) {
    const posts = await getBlogPosts();
    const categoryPosts = posts
        .filter((post: Post) => {
            if (params.slug === "general") {
                return (
                    !post.metadata.category ||
                    post.metadata.category === "general"
                );
            }
            return post.metadata.category === params.slug;
        })
        .sort((a, b) => {
            // For how-i-hire category, sort by seriesOrder first
            if (params.slug === "how-i-hire") {
                const orderA = parseInt(a.metadata.seriesOrder || "0");
                const orderB = parseInt(b.metadata.seriesOrder || "0");
                if (orderA !== orderB) {
                    return orderA - orderB;
                }
            }
            // Then sort by publishedAt date
            return (
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            );
        });

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <ArticleCategories posts={posts} />
                </div>
                <div className="md:col-span-3">
                    <h1 className="text-3xl font-bold mb-8">
                        {params.slug === "how-i-hire"
                            ? "How I Hire"
                            : "General"}{" "}
                        Articles
                    </h1>
                    <div className="grid grid-cols-1 gap-8">
                        {categoryPosts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                post={post}
                                type="articles"
                                useLabel={false}
                                useImage={post.metadata.useImage === "true"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
