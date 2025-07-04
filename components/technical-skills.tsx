"use client";

import { useStaggeredScrollReveal } from "@/hooks/useScrollReveal";

export default function TechnicalSkills() {
    const skillsRef = useStaggeredScrollReveal(4, 150);
    const skillCategories = [
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
                ref={skillsRef as React.RefObject<HTMLDivElement>}
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
        </div>
    );
}
