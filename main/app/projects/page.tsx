import { PostsSneakPeek } from "@/components/posts";
import { Metadata } from "next";
import { getProjectPosts } from "@/app/mdx-utils";

export const metadata: Metadata = {
    title: "Projects",
    description: "Read case studies of projects I've worked on.",
};

export default function Page() {
    return (
        <section>
            <h1
                data-testid="heading"
                className="font-semibold text-2xl mb-8 tracking-tighter"
            >
                Projects
            </h1>
            <div>
                <PostsSneakPeek posts={getProjectPosts()} type="projects" />
            </div>
        </section>
    );
}
