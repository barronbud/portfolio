import Link from "next/link";
import { Post } from "@/app/mdx-utils";
import Image from "next/image";
import InternalButton from "./buttons";

export function PostPreview({
    post,
    type,
    useLabel = false,
    useImage = false,
}: {
    post: Post;
    type: string;
    useLabel?: boolean;
    useImage?: boolean;
}) {
    return (
        <div className="mb-4 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/${type}/${post.slug}`}>
                <h3 className="text-3xl text-gray-500 capitalize">
                    {useLabel && `${type}`}
                </h3>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.metadata.title}
                </h5>
            </Link>
            <div className="flex flex-row">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.preview}
                </p>
                {post.metadata.image && useImage && (
                    <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        width={250}
                        height={150}
                        className="rounded-lg h-1/4 max-w-1/4"
                    />
                )}
            </div>

            <InternalButton href={`/${type}/${post.slug}`}>
                Read more
            </InternalButton>
        </div>
    );
}
