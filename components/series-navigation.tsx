import Link from "next/link";
import { Post } from "@/app/mdx-utils";

interface SeriesNavigationProps {
    currentPost: Post;
    allPosts: Post[];
}

export function SeriesNavigation({
    currentPost,
    allPosts,
}: SeriesNavigationProps) {
    const seriesPosts = allPosts
        .filter((post) => post.metadata.category === "how-i-hire")
        .sort((a, b) => {
            const orderA = parseInt(a.metadata.seriesOrder || "0");
            const orderB = parseInt(b.metadata.seriesOrder || "0");
            return orderA - orderB;
        });

    const currentIndex = seriesPosts.findIndex(
        (post) => post.slug === currentPost.slug
    );
    const prevPost = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
    const nextPost =
        currentIndex < seriesPosts.length - 1
            ? seriesPosts[currentIndex + 1]
            : null;

    if (!prevPost && !nextPost) return null;

    return (
        <nav className="flex flex-col space-y-4 my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold">How I Hire Series</h2>
            <div className="flex flex-col space-y-2">
                {seriesPosts.map((post, index) => (
                    <Link
                        key={post.slug}
                        href={`/articles/${post.slug}`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            post.slug === currentPost.slug
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {index + 1}.
                            </span>
                            <span className="font-medium">
                                {post.metadata.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                {prevPost && (
                    <Link
                        href={`/articles/${prevPost.slug}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    >
                        ← {prevPost.metadata.title}
                    </Link>
                )}
                {nextPost && (
                    <Link
                        href={`/articles/${nextPost.slug}`}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    >
                        {nextPost.metadata.title} →
                    </Link>
                )}
            </div>
        </nav>
    );
}
