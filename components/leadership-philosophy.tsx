import {
    Users,
    Target,
    MessageSquare,
    Clock,
    Shield,
    Lightbulb,
    Heart,
    Globe,
    Zap,
    CheckCircle,
    TrendingUp,
    UserPlus,
    BookOpen,
    Code,
} from "lucide-react";
import { getColorClasses, type ColorVariant } from "@/lib/utils";

export default function LeadershipPhilosophy() {
    const corePhilosophy = {
        title: "Leadership Through Results",
        description:
            "I focus on creating conditions where teams consistently deliver exceptional results through clear processes, psychological safety, and data-driven decision making.",
        principles: [
            {
                icon: TrendingUp,
                title: "Velocity-Focused Leadership",
                description:
                    "Optimize processes and remove roadblocks to consistently increase team delivery speed by 150%+.",
                color: "green" as ColorVariant,
            },
            {
                icon: Users,
                title: "Remote-First Team Building",
                description:
                    "Build high-performing distributed teams with clear communication and strong retention rates.",
                color: "blue" as ColorVariant,
            },
            {
                icon: Shield,
                title: "Quality & Reliability",
                description:
                    "Maintain <5% defect rates while delivering complex technical projects on time.",
                color: "purple" as ColorVariant,
            },
        ],
    };

    const technicalPrinciples = [
        {
            icon: Users,
            title: "Customer-First Technology Decisions",
            description:
                "Choose proven technologies over bleeding-edge for reliability and business value",
            color: "blue" as ColorVariant,
        },
        {
            icon: Shield,
            title: "Technical Debt Management",
            description:
                "Balance innovation with maintainability, treating debt as a business decision",
            color: "green" as ColorVariant,
        },
        {
            icon: Code,
            title: "Engineering Excellence",
            description:
                "Build scalable systems with quality, clear standards, and team autonomy",
            color: "orange" as ColorVariant,
        },
    ];

    const achievements = [
        {
            metric: "150%",
            description: "Team velocity increase",
            detail: "Through process optimization and code contracts",
        },
        {
            metric: "60%",
            description: "Time savings",
            detail: "Led OCR automation development",
        },
        {
            metric: "<5%",
            description: "Defect rate",
            detail: "Across 9 high-quality project deliveries",
        },
    ];

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Leadership & Technical Philosophy
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Combining people leadership with technical excellence to
                    drive consistent results
                </p>
            </div>

            {/* Core Philosophy */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {corePhilosophy.title}
                    </h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        {corePhilosophy.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {corePhilosophy.principles.map((principle, index) => {
                        const colors = getColorClasses(principle.color);
                        const Icon = principle.icon;

                        return (
                            <div
                                key={index}
                                className={`group ${colors.bg} ${colors.border} border-2 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div
                                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon
                                        className={`w-6 h-6 ${colors.icon}`}
                                    />
                                </div>
                                <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                                    {principle.title}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Technical Leadership Principles */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Leadership Approach
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Pragmatic technology decisions focused on business value
                        and team productivity
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {technicalPrinciples.map((principle, index) => {
                        const colors = getColorClasses(principle.color);
                        const Icon = principle.icon;

                        return (
                            <div
                                key={index}
                                className={`group ${colors.bg} ${colors.border} border-2 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div
                                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <Icon
                                        className={`w-6 h-6 ${colors.icon}`}
                                    />
                                </div>
                                <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                                    {principle.title}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Key Achievements */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-6">
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Measurable Technical Impact
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400">
                            Results from combining leadership and technical
                            excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {achievement.metric}
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {achievement.description}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {achievement.detail}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
