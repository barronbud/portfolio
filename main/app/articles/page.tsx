import { BlogPostsSneakPeek } from "app/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles",
    description: "Read my articles.",
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Articles
            </h1>
            <div>
                <BlogPostsSneakPeek />
            </div>
        </section>
    );
}
