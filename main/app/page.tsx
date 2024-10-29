import { PostsSneakPeek } from "app/components/posts";
import About from "./components/about";
import Recommendations from "./components/recommendations";
import { getBlogPosts, getProjectPosts } from "app/mdx-utils";
import Carousel from "./components/carousel";
import { PostPreview } from "./components/post-preview";
import Demo from "./components/demos";
import { demoApps } from "./demos/data";

export default async function Page() {
    const articles = getBlogPosts();
    const cases = getProjectPosts();
    const posts = [...cases, ...articles];
    const demos = demoApps.map((demo) => <Demo key={demo.href} {...demo} />);

    const postPreviews = posts.map((post) => (
        <PostPreview
            key={post.slug}
            post={post}
            type={post.metadata.type}
            useLabel={true}
        />
    ));

    const previews = [...demos, ...postPreviews];

    return (
        <section>
            <div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 z-10 relative">
                    <h1
                        data-testid="heading"
                        className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
                    >
                        Jeffrey Barron
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        Tech Leader • Software Engineer • Empowering teams to
                        solve hard problems
                    </p>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </div>
            <Carousel>{previews}</Carousel>
            <About />
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Recommendations
            </h2>
            <Recommendations />
            <h2 className="my-8 text-3xl font-semibold tracking-tighter">
                Recent Articles
            </h2>
            <div className="my-8 card-preview">
                <PostsSneakPeek type="articles" posts={getBlogPosts()} />
            </div>
        </section>
    );
}
