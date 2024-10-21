import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-4">
                        <li>
                            <a
                                href="/demos"
                                className="flex items-center text-gray-400 hover:text-gray-500"
                            >
                                <ArrowLongLeftIcon className="w-4 h-4 mr-2" />
                                Demos
                            </a>
                        </li>
                        <li>
                            <Link
                                href="/demos/order-management-system"
                                className="text-gray-400 hover:text-gray-500"
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
