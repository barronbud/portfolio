import Link from "next/link";
import { Post } from "app/mdx-utils";
import { PostPreview } from "./post-preview";

export function Posts({ posts, type }: { posts: Post[]; type: string }) {
    return (
        <div>
            {posts
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={`/${type}/${post.slug}`}
                    >
                        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {post.metadata.title}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    );
}

export function PostsSneakPeek({
    posts,
    type,
}: {
    posts: Post[];
    type: string;
}) {
    return (
        <div>
            {posts
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .slice(0, 3)
                .map((post) => (
                    <PostPreview post={post} key={post.slug} type={type} />
                ))}
        </div>
    );
}
