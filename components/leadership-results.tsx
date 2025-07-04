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

export default function LeadershipResults() {
    const keyImpacts = [
        {
            icon: TrendingUp,
            metric: "150%",
            title: "Team Velocity Increase",
            description:
                "Transformed underperforming team through non-blocking processes and code contracts",
            details: [
                "Switched from Scrum to Kanban methodology",
                "Implemented API stubs for parallel development",
                "Created weekly goal-setting framework",
            ],
            company: "Routable (YC '17)",
            timeframe: "6 months",
            color: "blue",
            bgPattern: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
        },
        {
            icon: Clock,
            metric: "60%",
            title: "Time Savings with OCR",
            description:
                "Led development of invoice recording automation that revolutionized workflow efficiency",
            details: [
                "Designed OCR integration architecture",
                "Coordinated cross-functional implementation",
            ],
            company: "Routable (YC '17)",
            timeframe: "4 months",
            color: "green",
            bgPattern: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        },
        {
            icon: Users,
            metric: "20+",
            title: "Engineers Successfully Led",
            description:
                "Built and mentored high-performing remote teams across multiple organizations",
            details: [
                "Managed teams up to 13 engineers",
                "Mentored engineers from junior to principal level",
                "Promoted remote-first culture",
            ],
            company: "Multiple Organizations",
            timeframe: "3+ years",
            color: "purple",
            bgPattern: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        },
        {
            icon: Target,
            metric: "<5%",
            title: "Defect Rate Achieved",
            description:
                "Consistently delivered projects on time with exceptional quality standards",
            details: [
                "100% on-time delivery record",
                "Sub-5% defect rate across all projects",
                "Zero critical production issues",
            ],
            company: "vinSUITE",
            timeframe: "2 years",
            color: "orange",
            bgPattern: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
        },
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                icon: "text-blue-600 dark:text-blue-400",
                metric: "text-blue-600 dark:text-blue-400",
                border: "border-blue-200 dark:border-blue-800",
                dot: "bg-blue-500",
            },
            green: {
                icon: "text-green-600 dark:text-green-400",
                metric: "text-green-600 dark:text-green-400",
                border: "border-green-200 dark:border-green-800",
                dot: "bg-green-500",
            },
            purple: {
                icon: "text-purple-600 dark:text-purple-400",
                metric: "text-purple-600 dark:text-purple-400",
                border: "border-purple-200 dark:border-purple-800",
                dot: "bg-purple-500",
            },
            orange: {
                icon: "text-orange-600 dark:text-orange-400",
                metric: "text-orange-600 dark:text-orange-400",
                border: "border-orange-200 dark:border-orange-800",
                dot: "bg-orange-500",
            },
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Leadership Results & Impact
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Proven track record of delivering measurable results that
                    drive business value and team success
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
                                                className={`text-4xl lg:text-5xl font-bold ${colors.metric} mb-1`}
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
                        Combined Impact Across Organizations
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        Consistent results across diverse technical challenges
                        and team dynamics
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
                            5+
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
