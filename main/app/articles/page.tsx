import { PostsSneakPeek } from "@/components/posts";
import { Metadata } from "next";
import { getBlogPosts } from "@/app/mdx-utils";
import { CategorySubnav } from "@/components/navigation/category-subnav";

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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <CategorySubnav />
                </div>
                <div className="md:col-span-3">
                    <PostsSneakPeek posts={getBlogPosts()} type="articles" />
                </div>
            </div>
        </section>
    );
}
