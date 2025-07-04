import { Users, Code, TrendingUp, Lightbulb } from "lucide-react";

export default function CoreCompetencies() {
    const competencies = [
        {
            icon: Users,
            title: "Team Leadership & Agile Transformation",
            description: "Led Agile transformations by applying Scrum, Kanban, and other methodologies. Built and nurtured cross-functional teams of up to 13 engineers, increasing feature delivery by 20% through scalable agile processes.",
            color: "blue"
        },
        {
            icon: Code,
            title: "Full-Stack Development & Architecture",
            description: "Developed and led teams using Node, React, Python, and JavaScript/TypeScript. Executed strategic re-architecture of core data models and systems, coordinating efforts across multiple squads.",
            color: "green"
        },
        {
            icon: TrendingUp,
            title: "Process Optimization & Velocity",
            description: "Increased team velocity by 150% through non-blocking processes, code contracts, and reduced friction during merges. Led teams to 60% decrease in completion time by proactively clearing roadblocks.",
            color: "purple"
        },
        {
            icon: Lightbulb,
            title: "Product Innovation & Technical Leadership",
            description: "Led development of OCR for invoice recording (60% time savings), AI/ML powered study paths, and PCI-compliant payment systems. Released 9 high-quality projects with defect rate lower than 5%.",
            color: "orange"
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                icon: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-50 dark:bg-blue-900/20",
                border: "border-blue-200 dark:border-blue-800",
                dot: "bg-blue-600"
            },
            green: {
                icon: "text-green-600 dark:text-green-400",
                bg: "bg-green-50 dark:bg-green-900/20",
                border: "border-green-200 dark:border-green-800",
                dot: "bg-green-600"
            },
            purple: {
                icon: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-50 dark:bg-purple-900/20",
                border: "border-purple-200 dark:border-purple-800",
                dot: "bg-purple-600"
            },
            orange: {
                icon: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-50 dark:bg-orange-900/20",
                border: "border-orange-200 dark:border-orange-800",
                dot: "bg-orange-600"
            }
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Core Leadership Competencies
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Proven expertise in building high-performing engineering teams and delivering scalable technical solutions
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {competencies.map((competency, index) => {
                    const colors = getColorClasses(competency.color);
                    const Icon = competency.icon;
                    
                    return (
                        <div
                            key={index}
                            className={`group relative ${colors.bg} ${colors.border} border-2 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`w-8 h-8 ${colors.icon}`} />
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                    {competency.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {competency.description}
                                </p>
                            </div>

                            {/* Decorative Element */}
                            <div className={`absolute top-6 right-6 w-3 h-3 ${colors.dot} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Transform Your Engineering Team?
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's discuss how these competencies can drive your team's success and accelerate your product development.
                    </p>
                    <a
                        href="mailto:me@jeffreybarron.dev"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Start the Conversation
                        <Users className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
