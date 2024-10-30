import { PostsSneakPeek } from "@/components/posts";
import { Metadata } from "next";
import { getBlogPosts } from "@/app/mdx-utils";

export const metadata: Metadata = {
    title: "Articles",
    description: "Read my articles.",
};

export default function Page() {
    return (
        <section>
            <h1
                data-testid="heading"
                className="font-semibold text-2xl mb-8 tracking-tighter"
            >
                Articles
            </h1>
            <div>
                <PostsSneakPeek posts={getBlogPosts()} type="articles" />
            </div>
        </section>
    );
}
