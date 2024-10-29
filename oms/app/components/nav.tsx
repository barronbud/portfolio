import Link from "next/link";

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight z-10">
            <div className="lg:sticky lg:top-20">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <a
                                href="/demos"
                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                            >
                                Demos
                            </a>
                        </li>
                        <li>
                            <Link
                                href="/demos/order-management-system"
                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 capitalize"
                            >
                                Orders
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </aside>
    );
}
