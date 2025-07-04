"use client";

import { useState, useEffect } from "react";
import { NavList } from "./navigation/nav-list";
import { Menu, X, Download } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "about",
                "impact",
                "skills",
                "philosophy",
                "case-studies",
                "timeline",
                "leadership",
                "articles",
                "recommendations",
                "contact",
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Set initial active section
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <aside className="sticky top-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 -mx-4 px-4 mb-8">
            <div className="max-w-7xl mx-auto">
                <nav className="flex items-center justify-between py-4">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Jeffrey Barron
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavList />

                        {/* Section Navigation */}
                        <div className="flex items-center space-x-1 ml-6 pl-6 border-l border-gray-300 dark:border-gray-600">
                            {[
                                { id: "about", label: "About" },
                                { id: "impact", label: "Impact" },
                                { id: "philosophy", label: "Philosophy" },
                                { id: "case-studies", label: "Cases" },
                                { id: "timeline", label: "Journey" },
                                { id: "contact", label: "Contact" },
                            ].map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                                        activeSection === section.id
                                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                                            : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>

                        {/* Resume Download Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Sections
                                </div>
                                {[
                                    { id: "about", label: "About" },
                                    { id: "impact", label: "Impact" },
                                    { id: "philosophy", label: "Philosophy" },
                                    { id: "case-studies", label: "Cases" },
                                    { id: "timeline", label: "Journey" },
                                    { id: "contact", label: "Contact" },
                                ].map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                                            activeSection === section.id
                                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                                                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                        }`}
                                    >
                                        {section.label}
                                    </button>
                                ))}
                            </div>

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
