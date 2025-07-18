import Link from "next/link";
import { Post } from "@/app/mdx-utils";
import Image from "next/image";
import InternalButton from "./buttons";

export function PostPreview({
    post,
    type,
    useImage = false,
}: {
    post: Post;
    type: string;
    useLabel?: boolean;
    useImage?: boolean;
}) {
    const getPostUrl = () => {
        if (post.metadata.category) {
            return `/articles/${post.slug}`;
        }
        return `/${type}/${post.slug}`;
    };

    const postUrl = getPostUrl();

    return (
        <div className="mb-4 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={postUrl}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.metadata.title}
                </h5>
            </Link>
            <div className="">
                {post.metadata.image && useImage && (
                    <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        width={250}
                        height={150}
                        className="rounded-lg p-4 md:float-right"
                    />
                )}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.preview}
                </p>
            </div>

            <InternalButton href={postUrl} size="default">
                Read more
            </InternalButton>
        </div>
    );
}
