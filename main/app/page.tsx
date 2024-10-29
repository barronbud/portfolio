import { PostsSneakPeek } from "app/components/posts";
import About from "./components/about";
import Recommendations from "./components/recommendations";
import { getBlogPosts, getProjectPosts } from "app/mdx-utils";
import Carousel from "./components/carousel";
import { PostPreview } from "./components/post-preview";
import { ExternalButton } from "./components/buttons";
import Image from "next/image";

export default async function Page() {
    const articles = getBlogPosts();
    const cases = getProjectPosts();
    const posts = [...cases, ...articles];
    const demos = [
        <div
            className="mb-4 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key="demos"
        >
            <a href="/demos/order-management-system">
                <h3 className="text-3xl text-gray-500 capitalize">Demos</h3>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Order Management System
                </h5>
            </a>
            <div className="flex flex-row flex-row-reverse mb-4">
                <div className="text-left basis-1/2 mx-4">
                    <p className="mb-3 font-normal">
                        A demo web-based application designed to help businesses
                        create and manage their orders with an easy-to-use
                        interface.
                    </p>
                    <p className="font-medium text-lg mt-4">Tech Stack:</p>
                    <ul className="list-disc list-inside">
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Prisma</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className="basis-1/2">
                    <Image
                        src="/images/order-demo.png"
                        alt="Order Management System"
                        width={1308}
                        height={816}
                        className="rounded-lg"
                    />
                </div>
            </div>

            <ExternalButton href="/demos/order-management-system">
                View Demo
            </ExternalButton>
        </div>,
    ];
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
