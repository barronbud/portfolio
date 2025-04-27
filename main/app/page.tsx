import About from "@/components/about";
import Recommendations from "@/components/recommendations";
import { getBlogPosts } from "@/app/mdx-utils";
import { PostPreview } from "@/components/post-preview";
import { categories, getCategoryPosts } from "@/app/categories";

export const dynamic = "force-dynamic";

export default async function Page() {
    const posts = getBlogPosts();
    const howIHireCategory = categories.find(
        (cat) => cat.slug === "how-i-hire"
    );
    const featuredPosts = howIHireCategory
        ? getCategoryPosts(posts, howIHireCategory)
        : [];

    return (
        <section>
            <div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-2 z-10 relative"></div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </div>

            <About />

            {featuredPosts.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold tracking-tighter mb-8">
                        Featured Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                post={post}
                                type="articles"
                                useLabel={true}
                                useImage={post.metadata.useImage === "true"}
                            />
                        ))}
                    </div>
                </div>
            )}

            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Recommendations
            </h2>
            <Recommendations />
        </section>
    );
}
