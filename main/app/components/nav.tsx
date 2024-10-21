import Link from "next/link";
import { showDemos } from "flags";

const navItems = {
    "/": {
        name: "portfolio home",
    },
    "/articles": {
        name: "articles",
    },
    "/demos": { name: "demos" },
};

export async function Navbar() {
    const shouldShowDemos = await showDemos();

    return (
        <aside className="-ml-[8px] mb-16 tracking-tight z-10">
            <div className="lg:sticky lg:top-20">
                <nav className="" id="nav">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p4">
                        <ul className="flex flex-row space-x-0 pr-10">
                            {Object.entries(navItems).map(
                                ([path, { name }]) => {
                                    if (name === "demos" && !shouldShowDemos) {
                                        return;
                                    }

                                    return (
                                        <li key={path}>
                                            <Link
                                                href={path}
                                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                                            >
                                                {name}
                                            </Link>
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
