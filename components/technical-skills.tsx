"use client";

import { useStaggeredScrollReveal } from "@/hooks/useScrollReveal";

export default function TechnicalSkills() {
    const skillsRef = useStaggeredScrollReveal(4, 150);
    const skillCategories = [
        {
            title: "Leadership & Management",
            skills: [
                { name: "Team Leadership", level: "Expert", years: "3+" },
                { name: "Agile/Scrum/Kanban", level: "Expert", years: "3+" },
                { name: "Technical Strategy", level: "Expert", years: "3+" },
                { name: "Remote Teams", level: "Expert", years: "3+" },
            ],
        },
        {
            title: "Backend Technologies",
            skills: [
                { name: "Node.js", level: "Intermediate", years: "1+" },
                { name: "Python", level: "Intermediate", years: "2+" },
                { name: "TypeScript", level: "Expert", years: "5+" },
                { name: "Django", level: "Intermediate", years: "1+" },
            ],
        },
        {
            title: "Frontend Technologies",
            skills: [
                { name: "React", level: "Advanced", years: "2+" },
                { name: "JavaScript", level: "Expert", years: "10+" },
                { name: "Next.js", level: "Intermediate", years: "1+" },
                { name: "Tailwind CSS", level: "Intermediate", years: "1+" },
            ],
        },
        {
            title: "DevOps & Infrastructure",
            skills: [
                { name: "Docker", level: "Advanced", years: "3+" },
                { name: "CI/CD", level: "Advanced", years: "2+" },
                { name: "PCI Compliance", level: "Advanced", years: "2+" },
            ],
        },
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "Advanced":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
        }
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Technical Expertise
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Deep technical knowledge combined with leadership experience
                    across modern technology stacks
                </p>
            </div>

            <div
                ref={skillsRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                {skillCategories.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                        className="scroll-reveal group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:-translate-y-1 hover-glow"
                    >
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {category.title}
                        </h4>

                        <div className="space-y-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="group/skill">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-gray-900 dark:text-white group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                                                {skill.name}
                                            </span>
                                            <span
                                                className={`px-3 py-1 text-xs font-bold rounded-full ${getLevelColor(
                                                    skill.level
                                                )} transition-all duration-200 group-hover/skill:scale-105`}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {skill.years}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ease-out ${
                                                skill.level === "Expert"
                                                    ? "bg-green-500 w-full"
                                                    : skill.level === "Advanced"
                                                    ? "bg-blue-500 w-4/5"
                                                    : skill.level ===
                                                      "Intermediate"
                                                    ? "bg-yellow-500 w-3/5"
                                                    : "bg-gray-400 w-2/5"
                                            } group-hover/skill:brightness-110`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Architecture Experience */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-lg">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Architecture & System Design Experience
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        Real-world experience building scalable systems across
                        diverse industries
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                            FinTech SaaS
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            Payment & Invoice Systems
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            PCI Compliance • OCR Integration
                        </div>
                    </div>
                    <div className="group text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
                            E-commerce
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            Multi-location Inventory
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            Wallet Systems • Real-time Sync
                        </div>
                    </div>
                    <div className="group text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                            AI/ML Integration
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            OCR & Learning Paths
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            TypeScript • Python APIs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
