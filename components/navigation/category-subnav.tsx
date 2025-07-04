import Link from "next/link";
import { categories } from "@/app/categories";

interface CategorySubnavProps {
    currentCategory?: string;
}

export function CategorySubnav({ currentCategory }: CategorySubnavProps) {
    return (
        <nav className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Categories
            </h2>
            <div className="flex flex-col space-y-3">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/articles/category/${cat.slug}`}
                        className={`group relative overflow-hidden rounded-lg p-4 transition-all duration-300 ${
                            cat.slug === currentCategory
                                ? "bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                                : "hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:shadow-md"
                        }`}
                    >
                        <div className="relative z-10">
                            <div className="font-semibold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {cat.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                {cat.description}
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500" />
                    </Link>
                ))}
            </div>
        </nav>
    );
}
