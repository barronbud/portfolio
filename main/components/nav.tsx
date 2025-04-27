"use client";

import { NavList } from "./navigation/nav-list";

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight z-10">
            <div className="lg:sticky lg:top-20">
                <nav className="" id="nav">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p4">
                        <NavList />
                    </div>
                </nav>
            </div>
        </aside>
    );
}
