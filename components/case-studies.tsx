import {
    TrendingUp,
    Code,
    Users,
    Clock,
    Target,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function CaseStudies() {
    const caseStudies = [
        {
            id: "fintech-rewrite",
            title: "FinTech Platform Transformation",
            subtitle: "Complex Rewrite with Process Innovation",
            company: "Routable (YC '17)",
            duration: "6 months",
            teamSize: "6-8 engineers",
            challenge:
                "Unlock new workflows for prospective customers by fundamentally rethinking and rewriting core components of our fintech platform after two previous failed attempts.",
            solution: [
                "Switched from Scrum to Kanban for rapid iterations",
                "Implemented non-blocking processes with API stubs and contracts",
                "Fostered team culture of 'collaborative achievement over individual excellence'",
                "Created weekly goal-setting with vertically-integrated functionality",
            ],
            results: [
                {
                    metric: "150%",
                    description: "Increase in team velocity",
                    icon: TrendingUp,
                },
                {
                    metric: "90%",
                    description: "Goal success rate",
                    icon: CheckCircle,
                },
                {
                    metric: "1 week",
                    description: "Sprint cycles for faster feedback",
                    icon: Target,
                },
            ],
            technologies: ["Node.js", "React", "TypeScript"],
            image: "/images/projects/agile-process-iterative-execution.png",
            color: "blue",
        },
        {
            id: "content-system",
            title: "Content Build System Architecture",
            subtitle: "Python & Docker Automation Platform",
            company: "Training & Certification Company",
            duration: "3 months",
            teamSize: "Solo project",
            challenge:
                "Create a content build system for DITA-based training materials that allows content developers to preview and iterate without developer support.",
            solution: [
                "Developed modular Python scripts for content processing",
                "Built Dockerized Bottle.py API server for build management",
                "Created Jenkins automation for nightly and ad-hoc builds",
                "Implemented vanilla JavaScript library for interactive elements",
            ],
            results: [
                {
                    metric: "<1 min",
                    description: "Individual file rebuild time",
                    icon: Clock,
                },
                {
                    metric: "<10 min",
                    description: "Full site rebuild time",
                    icon: TrendingUp,
                },
                {
                    metric: "100%",
                    description: "Developer independence for content team",
                    icon: Users,
                },
                {
                    metric: "24/7",
                    description: "Automated build availability",
                    icon: CheckCircle,
                },
            ],
            technologies: [
                "Python",
                "Docker",
                "Bottle.py",
                "Jenkins",
                "DITA",
                "JavaScript",
            ],
            image: "/images/projects/content-build-system-with-python-and-docker.png",
            color: "green",
        },
        {
            id: "ai-study-paths",
            title: "AI-Powered Learning Platform",
            subtitle: "TypeScript & Machine Learning Integration",
            company: "Freelance Project",
            duration: "4 months",
            teamSize: "2 engineers",
            challenge:
                "Build an AI/ML powered study path solution that increases user engagement and provides personalized learning experiences.",
            solution: [
                "Developed TypeScript-based AI/ML algorithms for personalized paths",
                "Created adaptive learning system based on user performance",
                "Implemented real-time progress tracking and recommendations",
                "Built responsive UI with modern React patterns",
            ],
            results: [
                {
                    metric: "40%",
                    description: "Increase in user engagement",
                    icon: TrendingUp,
                },
                {
                    metric: "85%",
                    description: "Course completion rate improvement",
                    icon: Target,
                },
            ],
            technologies: ["TypeScript", "Azure Machine Learning"],
            image: null,
            color: "purple",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                accent: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-50 dark:bg-blue-900/20",
                border: "border-blue-200 dark:border-blue-800",
                button: "bg-blue-600 hover:bg-blue-700",
            },
            green: {
                accent: "text-green-600 dark:text-green-400",
                bg: "bg-green-50 dark:bg-green-900/20",
                border: "border-green-200 dark:border-green-800",
                button: "bg-green-600 hover:bg-green-700",
            },
            purple: {
                accent: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-50 dark:bg-purple-900/20",
                border: "border-purple-200 dark:border-purple-800",
                button: "bg-purple-600 hover:bg-purple-700",
            },
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Case Studies
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Real-world examples of how I've transformed teams and
                    delivered exceptional results across diverse technical
                    challenges
                </p>
            </div>

            <div className="space-y-16">
                {caseStudies.map((study, index) => {
                    const colors = getColorClasses(study.color);

                    return (
                        <div
                            key={study.id}
                            className={`group ${colors.bg} ${colors.border} border-2 rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                        >
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span
                                            className={`px-4 py-2 ${colors.bg} ${colors.border} border rounded-full text-sm font-semibold ${colors.accent}`}
                                        >
                                            Case Study {index + 1}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {study.company}
                                        </span>
                                    </div>
                                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {study.title}
                                    </h4>
                                    <p
                                        className={`text-lg font-medium ${colors.accent} mb-4`}
                                    >
                                        {study.subtitle}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <span>📅 {study.duration}</span>
                                        <span>👥 {study.teamSize}</span>
                                    </div>
                                </div>

                                {study.image && (
                                    <div className="mt-6 lg:mt-0 lg:ml-8">
                                        <div className="w-full lg:w-64 h-48 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                            <Image
                                                src={study.image}
                                                alt={study.title}
                                                width={256}
                                                height={192}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Challenge */}
                            <div className="mb-8">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-red-500" />
                                    Challenge
                                </h5>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {study.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="mb-8">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-500" />
                                    Solution & Approach
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {study.solution.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div className="mb-8">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-500" />
                                    Results & Impact
                                </h5>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                                    {study.results.map((result, idx) => {
                                        const Icon = result.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-white/20 dark:border-gray-700/20 text-center group-hover:scale-105 transition-transform"
                                            >
                                                <Icon
                                                    className={`w-6 h-6 ${colors.accent} mx-auto mb-2`}
                                                />
                                                <div
                                                    className={`text-2xl font-bold ${colors.accent} mb-1`}
                                                >
                                                    {result.metric}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                                    {result.description}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-white/20 dark:border-gray-700/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex justify-end">
                                <button
                                    className={`${colors.button} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2`}
                                >
                                    View Full Details
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Tackle Your Next Challenge?
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's discuss how these proven methodologies and
                        leadership approaches can drive success for your
                        engineering team.
                    </p>
                    <a
                        href="mailto:me@jeffreybarron.dev"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Let's Connect
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
