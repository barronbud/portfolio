import Link from "next/link";
import { categories } from "@/app/categories";

interface CategorySubnavProps {
    currentCategory?: string;
}

export function CategorySubnav({ currentCategory }: CategorySubnavProps) {
    return (
        <nav className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <div className="flex flex-col space-y-2">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/articles/category/${cat.slug}`}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            cat.slug === currentCategory
                                ? "bg-gray-100 dark:bg-gray-800"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                    >
                        <div className="font-medium">{cat.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {cat.description}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
