import Link from "next/link";
import { getBlogPosts } from "app/articles/utils";

export function BlogPosts() {
    let allBlogs = getBlogPosts();

    return (
        <div>
            {allBlogs
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
                        href={`/articles/${post.slug}`}
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

export function BlogPostsSneakPeek() {
    let allBlogs = getBlogPosts();

    return (
        <div className="grid grid-flow-col auto-cols-max">
            {allBlogs
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
                    <div
                        className="max-w-sm mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        key={post.slug}
                    >
                        <Link href={`/articles/${post.slug}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {post.metadata.title}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {post.content.split(".").slice(0, 2).join(".")}
                        </p>

                        <Link
                            href={`/articles/${post.slug}`}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
        </div>
    );
}
