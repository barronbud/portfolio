import { Metadata } from "next";
import { getBlogPosts } from "@/app/mdx-utils";
import { CategorySubnav } from "@/components/navigation/category-subnav";
import { categories, getCategoryPosts } from "@/app/categories";
import { PostPreview } from "@/components/post-preview";

export const metadata: Metadata = {
    title: "Articles",
    description: "Read my articles.",
};

export default function Page() {
    const posts = getBlogPosts();

    return (
        <section>
            <h1
                data-testid="heading"
                className="font-semibold text-2xl mb-8 tracking-tighter"
            >
                Articles
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <CategorySubnav />
                </div>
                <div className="md:col-span-3">
                    {categories.map((category) => {
                        const categoryPosts = getCategoryPosts(posts, category);
                        if (categoryPosts.length === 0) return null;

                        return (
                            <div key={category.slug} className="mb-12">
                                <h2 className="text-2xl font-semibold mb-6">
                                    {category.name}
                                </h2>
                                <div className="grid grid-cols-1 gap-8">
                                    {categoryPosts.map((post) => (
                                        <PostPreview
                                            key={post.slug}
                                            post={post}
                                            type="articles"
                                            useLabel={false}
                                            useImage={
                                                post.metadata.useImage ===
                                                "true"
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
