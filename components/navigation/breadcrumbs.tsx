"use client";

import Link from "next/link";
import { categories } from "@/app/categories";

interface BreadcrumbsProps {
    currentCategory: string;
}

export function Breadcrumbs({ currentCategory }: BreadcrumbsProps) {
    const category = categories.find((cat) => cat.slug === currentCategory);

    if (!category) return null;

    return (
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link
                href="/articles"
                className="hover:text-gray-900 dark:hover:text-gray-200"
            >
                Articles
            </Link>
            <span>/</span>
            <Link
                href={`/articles/category/${category.slug}`}
                className="hover:text-gray-900 dark:hover:text-gray-200"
            >
                {category.name}
            </Link>
        </div>
    );
}
