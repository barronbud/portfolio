import About from "@/components/about";
import TechnicalSkills from "@/components/technical-skills";
import LeadershipImpact from "@/components/leadership-impact";
import Recommendations from "@/components/recommendations";
import ContactCTA from "@/components/contact-cta";
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
            <About />

            <TechnicalSkills />

            <LeadershipImpact />

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

            <Recommendations />

            <ContactCTA />
        </section>
    );
}
