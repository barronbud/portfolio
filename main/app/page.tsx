import About from "@/components/about";
import Recommendations from "@/components/recommendations";
import { getBlogPosts, getProjectPosts } from "@/app/mdx-utils";
import { PostPreview } from "@/components/post-preview";
import Demo from "@/components/demos";
import { demoApps } from "./demos/data";

export default async function Page() {
    const articles = getBlogPosts().filter((post) => post.metadata.promoted);
    const cases = getProjectPosts().filter((post) => post.metadata.promoted);
    const posts = [...cases, ...articles].sort(() => Math.random() - 0.5);
    const demos = demoApps.map((demo) => <Demo key={demo.href} {...demo} />);

    const postPreviews = posts.map((post) => (
        <PostPreview
            key={post.slug}
            post={post}
            type={post.metadata.type}
            useLabel={true}
            useImage={true}
        />
    ));

    return (
        <section>
            <div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-2 z-10 relative"></div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </div>

            <About />

            <div className="grid gap-4">
                <div className="z-50">
                    {demos.map((demo) => (
                        <div key={demo.key}>{demo}</div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {postPreviews.slice(0, 4).map((preview) => (
                        <div key={preview.key}>{preview}</div>
                    ))}
                </div>
            </div>

            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Recommendations
            </h2>
            <Recommendations />
        </section>
    );
}
