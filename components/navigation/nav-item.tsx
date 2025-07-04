import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem as NavItemType } from "@/app/navigation";

interface NavItemProps {
    path: string;
    item: NavItemType;
}

export function NavItem({ path, item }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <li className="relative group">
            <Link
                href={path}
                className={`transition-all duration-300 flex align-middle relative py-3 px-4 m-1 capitalize rounded-lg min-h-[44px] items-center focus-ring ${
                    isActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
            >
                <span className="relative">
                    {item.name}
                    {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left scale-x-100 transition-transform duration-300" />
                    )}
                </span>
            </Link>
            {item.subItems && (
                <div className="md:absolute md:left-0 md:mt-2 md:w-48 md:rounded-lg md:shadow-lg bg-white dark:bg-gray-800 md:ring-1 md:ring-black md:ring-opacity-5 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:transition-all md:duration-300 md:transform md:origin-top md:scale-95 md:group-hover:scale-100 mt-2 md:mt-0 rounded-lg md:rounded-lg border border-gray-200 dark:border-gray-700 md:border-0">
                    <div className="py-2">
                        {Object.entries(item.subItems).map(
                            ([subPath, { name }]) => (
                                <Link
                                    key={subPath}
                                    href={subPath}
                                    className={`block px-4 py-3 text-sm transition-colors duration-200 min-h-[44px] flex items-center focus-ring ${
                                        pathname === subPath
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                                            : "hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                                >
                                    {name}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </li>
    );
}
