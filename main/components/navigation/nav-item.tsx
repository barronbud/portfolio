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
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
            >
                {item.name}
            </Link>
            {item.subItems && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                        {Object.entries(item.subItems).map(
                            ([subPath, { name }]) => (
                                <Link
                                    key={subPath}
                                    href={subPath}
                                    className={`block px-4 py-2 text-sm ${
                                        isActive
                                            ? "bg-gray-100 dark:bg-gray-700"
                                            : "hover:bg-gray-50 dark:hover:bg-gray-700"
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
