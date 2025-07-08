import {
    TrendingUp,
    Clock,
    Users,
    Target,
    Zap,
    Award,
    CheckCircle,
    ArrowUpRight,
} from "lucide-react";
import { getColorClasses, type ColorVariant } from "@/lib/utils";

export default function LeadershipResults() {
    const keyImpacts = [
        {
            icon: TrendingUp,
            metric: "150%",
            title: "Faster Team Delivery",
            description:
                "A platform rewrite had stalled twice before I joined. By rebuilding team confidence and switching to non-blocking processes, we turned things around completely.",
            details: [
                "Switched from Scrum to Kanban for better flow",
                "Used API stubs so teams could work in parallel",
                "Weekly goal-setting kept everyone aligned",
            ],
            company: "Routable (YC '17)",
            timeframe: "6 months",
            color: "blue" as ColorVariant,
            bgPattern: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
        },
        {
            icon: Clock,
            metric: "60%",
            title: "Time Savings Through Automation",
            description:
                "Our customers were drowning in manual invoice processing. I led the development of an OCR automation system that gave them their time back.",
            details: [
                "Realigned the project scope to focus on high-impact features",
                "Increased team velocity by reducing architectural complexity",
            ],
            company: "Routable (YC '17)",
            timeframe: "4 months",
            color: "green" as ColorVariant,
            bgPattern: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        },
        {
            icon: Users,
            metric: "20+",
            title: "Engineers Mentored & Grown",
            description:
                "Over 3+ years, I've had the privilege of working with amazing engineers and watching them grow into senior roles and team leaders themselves.",
            details: [
                "Led teams ranging from 6 to 13 engineers",
                "Mentored engineers from junior to principal level",
                "Built strong remote-first team cultures",
            ],
            company: "Multiple Organizations",
            timeframe: "3+ years",
            color: "purple" as ColorVariant,
            bgPattern: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        },
        {
            icon: Target,
            metric: "<5%",
            title: "Quality Without Compromise",
            description:
                "At vinSUITE, I maintained exceptionally high quality standards while keeping delivery timelines. Quality and speed aren't mutually exclusive when you have the right processes.",
            details: [
                "100% on-time delivery across all projects",
                "Sub-5% defect rate through careful planning",
                "Zero critical production issues",
            ],
            company: "vinSUITE",
            timeframe: "2 years",
            color: "orange" as ColorVariant,
            bgPattern: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
        },
    ];

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Real Results from Real Projects
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Here's what happened when I applied these leadership
                    approaches to actual engineering challenges
                </p>
            </div>

            {/* Key Impact Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {keyImpacts.map((impact, index) => {
                    const colors = getColorClasses(impact.color);
                    const Icon = impact.icon;

                    return (
                        <div
                            key={index}
                            className={`relative overflow-hidden ${impact.bgPattern} border-2 ${colors.border} rounded-3xl p-8 transition-shadow duration-300 hover:shadow-lg`}
                        >
                            {/* Content */}
                            <div className="relative">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg`}
                                        >
                                            <Icon
                                                className={`w-8 h-8 ${colors.icon}`}
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className={`text-4xl lg:text-5xl font-bold ${colors.icon} mb-1`}
                                            >
                                                {impact.metric}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                {impact.timeframe}
                                            </div>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-gray-400" />
                                </div>

                                {/* Title & Description */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {impact.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                        {impact.description}
                                    </p>
                                    <div className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                                        {impact.company}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-3">
                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Key Achievements
                                    </h5>
                                    {impact.details.map((detail, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <div
                                                className={`w-2 h-2 ${colors.dot} rounded-full mt-2 flex-shrink-0`}
                                            ></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        The Bigger Picture
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        These results aren't one-offs—they represent consistent
                        patterns across different teams and challenges
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center group">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            &gt; 90%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Project Success Rate
                        </div>
                    </div>

                    <div className="text-center group">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            95%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Team Retention Rate
                        </div>
                    </div>

                    <div className="text-center group">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            3+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Years Leadership
                        </div>
                    </div>

                    <div className="text-center group">
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            4+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Industries Served
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
