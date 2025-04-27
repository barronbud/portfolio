"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
    name: string;
    subItems?: {
        [key: string]: {
            name: string;
        };
    };
};

const navItems: { [key: string]: NavItem } = {
    "/": {
        name: "portfolio home",
    },
    "/articles": {
        name: "articles",
        subItems: {
            "/articles/category/general": {
                name: "General",
            },
            "/articles/category/how-i-hire": {
                name: "How I Hire",
            },
        },
    },
    "/projects": {
        name: "past projects",
    },
};

export function Navbar() {
    const pathname = usePathname();

    return (
        <aside className="-ml-[8px] mb-16 tracking-tight z-10">
            <div className="lg:sticky lg:top-20">
                <nav className="" id="nav">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p4">
                        <ul className="flex flex-row space-x-0 pr-10">
                            {Object.entries(navItems).map(
                                ([path, { name, subItems }]) => {
                                    return (
                                        <li
                                            key={path}
                                            className="relative group"
                                        >
                                            <Link
                                                href={path}
                                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                                            >
                                                {name}
                                            </Link>
                                            {subItems && (
                                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                                    <div className="py-1">
                                                        {Object.entries(
                                                            subItems
                                                        ).map(
                                                            ([
                                                                subPath,
                                                                { name },
                                                            ]) => (
                                                                <Link
                                                                    key={
                                                                        subPath
                                                                    }
                                                                    href={
                                                                        subPath
                                                                    }
                                                                    className={`block px-4 py-2 text-sm ${
                                                                        pathname ===
                                                                        subPath
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
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
}
