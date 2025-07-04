"use client";

import { useState } from "react";
import { NavList } from "./navigation/nav-list";
import { Menu, X, Download } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <aside className="sticky top-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 -mx-4 px-4 mb-8">
            <div className="max-w-7xl mx-auto">
                <nav className="flex items-center justify-evenly py-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavList />

                        {/* Resume Download Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
                        <div className="flex flex-col space-y-2">
                            <NavList />

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
