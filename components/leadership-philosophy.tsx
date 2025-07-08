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
        title: "Servant Leadership in Practice",
        description:
            "I believe in creating psychologically safe environments where teams feel empowered to take calculated risks, grow meaningfully, and deliver exceptional results through collaboration and ownership.",
        principles: [
            {
                icon: TrendingUp,
                title: "Process Innovation",
                description:
                    "When teams get stuck, I focus on removing roadblocks and optimizing workflows—like switching from Scrum to Kanban to unlock 150% velocity gains.",
                color: "green" as ColorVariant,
            },
            {
                icon: Users,
                title: "People-First Leadership",
                description:
                    "I prioritize psychological safety, mentorship, and growth opportunities. Engineers don't just deliver—they thrive and become force multipliers.",
                color: "blue" as ColorVariant,
            },
            {
                icon: Shield,
                title: "Pragmatic Excellence",
                description:
                    "Choose proven technologies over bleeding-edge complexity. Maintain quality through clear standards while empowering team autonomy.",
                color: "purple" as ColorVariant,
            },
        ],
    };

    const technicalPrinciples = [
        {
            icon: Users,
            title: "Business Value Over Complexity",
            description:
                "I choose proven technologies that solve real problems rather than chasing the latest trends. Reliability and team productivity matter more than being cutting-edge.",
            color: "blue" as ColorVariant,
        },
        {
            icon: Shield,
            title: "Technical Debt as Investment",
            description:
                "Technical debt isn't inherently bad—it's a tool. I help teams make conscious trade-offs between speed and maintainability based on business priorities.",
            color: "green" as ColorVariant,
        },
        {
            icon: Code,
            title: "Quality Through Ownership",
            description:
                "The best quality comes from engineers who own their work. I establish clear standards then trust my team to execute with autonomy and pride.",
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
                    How I Lead Engineering Teams
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    My approach to building teams that deliver great software
                    while growing as engineers and people
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
                        My Technical Leadership Principles
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        How I make technology decisions that support both
                        business goals and team happiness
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
