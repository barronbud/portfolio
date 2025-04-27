"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/app/categories";

export function ArticleCategories({}) {
    const pathname = usePathname();
    const currentCategory = pathname.split("/").pop();

    return (
        <nav className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/articles/category/${category.slug}`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            currentCategory === category.slug
                                ? "bg-gray-100 dark:bg-gray-800"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                    >
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {category.description}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
