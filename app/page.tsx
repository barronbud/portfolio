import About from "@/components/about";
import QuickImpact from "@/components/quick-impact";
import TechnicalSkills from "@/components/technical-skills";
import LeadershipPhilosophy from "@/components/leadership-philosophy";
import CaseStudies from "@/components/case-studies";
import InteractiveTimeline from "@/components/interactive-timeline";
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
        <section className="space-y-0">
            <div id="about" className="mb-24">
                <About />
            </div>

            <div className="section-divider"></div>

            <div id="impact" className="mb-24">
                <QuickImpact />
            </div>

            <div className="section-divider"></div>

            <div id="skills" className="mb-24">
                <TechnicalSkills />
            </div>

            <div className="section-divider"></div>

            <div id="philosophy" className="mb-24">
                <LeadershipPhilosophy />
            </div>

            <div className="section-divider"></div>

            <div id="case-studies" className="mb-24">
                <CaseStudies />
            </div>

            <div className="section-divider"></div>

            <div id="timeline" className="mb-24">
                <InteractiveTimeline />
            </div>

            <div className="section-divider"></div>

            <div id="leadership" className="mb-24">
                <LeadershipImpact />
            </div>

            {featuredPosts.length > 0 && (
                <>
                    <div className="section-divider"></div>
                    <div id="articles" className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Featured Articles
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Insights on engineering leadership, team
                                building, and technical excellence
                            </p>
                        </div>
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
                </>
            )}

            <div className="section-divider"></div>

            <div id="recommendations" className="mb-24">
                <Recommendations />
            </div>

            <div className="section-divider"></div>

            <div id="contact" className="mb-24">
                <ContactCTA />
            </div>
        </section>
    );
}
