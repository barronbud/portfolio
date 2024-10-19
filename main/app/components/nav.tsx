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
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            if (name === "demos" && !shouldShowDemos) {
                                return;
                            }
                            if (name === "demos" && shouldShowDemos) {
                                return (
                                    <a
                                        key={path}
                                        href={path}
                                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                                    >
                                        {name}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
