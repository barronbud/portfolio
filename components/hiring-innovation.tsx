import {
    Target,
    CheckCircle,
    FileText,
    MessageSquare,
    Heart,
} from "lucide-react";

export default function HiringInnovation() {
    const hiringPrinciples = [
        {
            icon: FileText,
            title: "Take-Home Assessments Over Live Coding",
            description:
                "Real-world evaluation that mirrors actual work conditions",
            benefits: [
                "Candidates can use their preferred tools and environment",
                "No pressure of being watched while coding",
                "Demonstrates practical problem-solving skills",
                "Shows code quality and documentation habits",
                "Allows for thoughtful, well-structured solutions",
            ],
            insight:
                "Traditional technical interviews like leetcode-style challenges feel disconnected from real-world software development.",
            color: "blue",
        },
        {
            icon: MessageSquare,
            title: "Transparent Communication",
            description:
                "Clear expectations and honest feedback throughout the process",
            benefits: [
                "Candidates know exactly what to expect at each stage",
                "Detailed feedback helps candidates improve",
                "Builds trust and respect regardless of outcome",
                "Reduces anxiety and improves candidate experience",
                "Creates positive brand impression even for rejections",
            ],
            insight:
                "Keeping shadow requirements hidden just wastes everyone's time. Be clear, be transparent, be honest.",
            color: "green",
        },
        {
            icon: Target,
            title: "Role-Specific Evaluation",
            description:
                "Tailored assessments that match actual job responsibilities",
            benefits: [
                "Tests skills that will actually be used on the job",
                "Provides realistic preview of work expectations",
                "Eliminates bias toward algorithm memorization",
                "Focuses on collaborative and practical skills",
                "Better predicts actual job performance",
            ],
            insight:
                "Focus on the practical, collaborative skills engineers use every day, not memorization of algorithms.",
            color: "purple",
        },
        {
            icon: Heart,
            title: "Human-Centered Approach",
            description: "Treating candidates as people, not just resources",
            benefits: [
                "Recognizes the stress and effort of job searching",
                "Provides support and encouragement throughout process",
                "Values candidate time and preparation",
                "Creates inclusive environment for all backgrounds",
                "Builds long-term relationships beyond hiring decisions",
            ],
            insight:
                "Job searching is hard enough without adding unnecessary stress and uncertainty to the process.",
            color: "orange",
        },
    ];

    const hiringStats = [
        {
            metric: "95%",
            description: "Team Retention Rate",
            detail: "Through careful hiring and onboarding",
        },
        {
            metric: "12+",
            description: "Engineers Successfully Hired",
            detail: "Across multiple organizations and roles",
        },
        {
            metric: "30%",
            description: "Reduced Interview Time",
            detail: "By eliminating redundant steps",
        },
    ];

    const hiringProcess = [
        {
            step: "1",
            title: "Resume Deep Dive",
            description:
                "Thorough research on candidate background, portfolio, and LinkedIn",
            duration: "30 minutes prep",
        },
        {
            step: "2",
            title: "Initial Conversation",
            description:
                "Cultural fit, motivation, and role expectations discussion",
            duration: "45 minutes",
        },
        {
            step: "3",
            title: "Take-Home Project",
            description: "Real-world problem similar to actual work challenges",
            duration: "2-4 hours",
        },
        {
            step: "4",
            title: "Technical Discussion",
            description:
                "Review take-home project and discuss technical decisions",
            duration: "60 minutes",
        },
        {
            step: "5",
            title: "Team Interaction",
            description:
                "Meet potential teammates and assess collaboration fit",
            duration: "30-45 minutes",
        },
        {
            step: "6",
            title: "Final Decision",
            description: "Comprehensive evaluation with detailed feedback",
            duration: "24-48 hours",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                icon: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-100 dark:bg-blue-900/30",
                border: "border-blue-200 dark:border-blue-800",
            },
            green: {
                icon: "text-green-600 dark:text-green-400",
                bg: "bg-green-100 dark:bg-green-900/30",
                border: "border-green-200 dark:border-green-800",
            },
            purple: {
                icon: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-100 dark:bg-purple-900/30",
                border: "border-purple-200 dark:border-purple-800",
            },
            orange: {
                icon: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-100 dark:bg-orange-900/30",
                border: "border-orange-200 dark:border-orange-800",
            },
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Hiring Innovation & Philosophy
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Improving technical hiring through human-centered
                    approaches, practical assessments, and transparent
                    communication
                </p>
            </div>

            {/* Hiring Principles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {hiringPrinciples.map((principle, index) => {
                    const colors = getColorClasses(principle.color);
                    const Icon = principle.icon;

                    return (
                        <div
                            key={index}
                            className={`border-2 ${colors.border} rounded-3xl p-8 transition-shadow duration-300 hover:shadow-lg`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                                >
                                    <Icon
                                        className={`w-8 h-8 ${colors.icon}`}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {principle.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {principle.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                    Key Benefits
                                </h5>
                                {principle.benefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle
                                            className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`}
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <blockquote
                                className={`text-sm italic ${colors.icon} border-l-4 ${colors.border} pl-4`}
                            >
                                &ldquo;{principle.insight}&rdquo;
                            </blockquote>
                        </div>
                    );
                })}
            </div>

            {/* Hiring Process */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Streamlined Hiring Process
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                    Respectful process that values both candidate and company
                    time
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hiringProcess.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                                        {step.step}
                                    </span>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        {step.title}
                                    </h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        {step.description}
                                    </p>
                                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                        {step.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hiring Results */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Hiring Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        Measurable improvements in hiring quality, efficiency,
                        and candidate experience
                    </p>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-3 gap-6">
                    {hiringStats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {stat.metric}
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                {stat.description}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
