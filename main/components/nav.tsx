"use client";

import { NavList } from "./navigation/nav-list";

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-8 tracking-tight z-20">
            <div className="lg:sticky lg:top-20">
                <nav id="nav">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p4">
                        <NavList />
                    </div>
                </nav>
            </div>
        </aside>
    );
}
