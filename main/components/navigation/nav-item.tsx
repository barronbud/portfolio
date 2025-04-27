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
                className={`transition-all duration-300 flex align-middle relative py-2 px-4 m-1 capitalize rounded-lg ${
                    isActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
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
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                    <div className="py-2">
                        {Object.entries(item.subItems).map(
                            ([subPath, { name }]) => (
                                <Link
                                    key={subPath}
                                    href={subPath}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                        pathname === subPath
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
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
