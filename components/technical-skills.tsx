export default function TechnicalSkills() {
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
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Expertise
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skillCategories.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {category.title}
                        </h4>

                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {skill.name}
                                            </span>
                                            <span
                                                className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                                                    skill.level
                                                )}`}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-3">
                                        {skill.years}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Architecture Experience */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Architecture & System Design Experience
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            FinTech SaaS
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Payment & Invoice Systems
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            E-commerce
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Multi-location Inventory
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            AI/ML Integration
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            OCR & Learning Paths
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
