import { BlogPosts } from "app/components/posts";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Portfolio
            </h1>
            <p className="mb-4">{`Engineering Leader | Software Engineer | I empower engineering teams to solve hard problems`}</p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    );
}
