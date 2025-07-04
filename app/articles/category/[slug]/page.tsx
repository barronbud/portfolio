import { ArticleCategories } from "@/components/article-categories";
import { PostPreview } from "@/components/post-preview";
import { getBlogPosts } from "@/app/mdx-utils";
import { categories, getCategory, getCategoryPosts } from "@/app/categories";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const posts = await getBlogPosts();
    const { slug } = await params;
    const category = getCategory(slug);

    if (!category) {
        notFound();
    }

    const categoryPosts = getCategoryPosts(posts, category);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <ArticleCategories />
                </div>
                <div className="md:col-span-3">
                    <h1 className="text-3xl font-bold mb-8">
                        {category.name} Articles
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
