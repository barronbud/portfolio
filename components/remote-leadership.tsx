import {
    Users,
    Globe,
    MessageSquare,
    Clock,
    Target,
    Heart,
    Zap,
    CheckCircle,
} from "lucide-react";

export default function RemoteLeadership() {
    const remoteStrategies = [
        {
            icon: Users,
            title: "Building Remote-First Culture",
            description:
                "Creating psychological safety and belonging across distributed teams",
            strategies: [
                "Established clear communication protocols and expectations",
                "Implemented regular 1:1s and team retrospectives",
                "Created virtual coffee chats and team bonding activities",
                "Promoted asynchronous decision-making processes",
            ],
            impact: "95% team retention rate across remote teams",
            color: "blue",
        },
        {
            icon: MessageSquare,
            title: "Communication Excellence",
            description:
                "Mastering async and sync communication for maximum productivity",
            strategies: [
                "Documented everything for transparency and knowledge sharing",
                "Used threaded discussions for complex technical decisions",
                "Established 'communication windows' for different time zones",
                "Created clear escalation paths for urgent issues",
            ],
            impact: "50% reduction in meeting overhead",
            color: "green",
        },
        {
            icon: Target,
            title: "Goal Alignment & Autonomy",
            description:
                "Empowering teams with clear objectives while maintaining flexibility",
            strategies: [
                "Implemented OKRs with weekly check-ins",
                "Created individual development plans for each team member",
                "Established clear success metrics and accountability",
                "Promoted ownership through project leadership opportunities",
            ],
            impact: "150% increase in team velocity",
            color: "purple",
        },
        {
            icon: Clock,
            title: "Flexible Work Optimization",
            description:
                "Leveraging time zone differences as a competitive advantage",
            strategies: [
                "Designed handoff processes for 24/7 development cycles",
                "Optimized meeting schedules for global team participation",
                "Created flexible core hours for collaboration",
                "Implemented follow-the-sun support model",
            ],
            impact: "40% faster feature delivery",
            color: "orange",
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
                    Remote Leadership Expertise
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    3+ years leading distributed teams across multiple time
                    zones, building high-performing remote-first cultures that
                    deliver exceptional results
                </p>
            </div>

            {/* Remote Leadership Strategies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {remoteStrategies.map((strategy, index) => {
                    const colors = getColorClasses(strategy.color);
                    const Icon = strategy.icon;

                    return (
                        <div
                            key={index}
                            className={`border-2 ${colors.border} rounded-3xl p-8 transition-shadow duration-300 hover:shadow-lg`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}
                                >
                                    <Icon
                                        className={`w-8 h-8 ${colors.icon}`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {strategy.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {strategy.description}
                                    </p>
                                    <div
                                        className={`text-sm font-semibold ${colors.icon} mb-4`}
                                    >
                                        Impact: {strategy.impact}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                    Key Strategies
                                </h5>
                                {strategy.strategies.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle
                                            className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`}
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Remote Leadership Philosophy */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Remote Leadership Philosophy
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                        &quot;Remote work isn&apos;t just about working from
                        home—it&apos;s about creating a culture of trust,
                        transparency, and empowerment that enables teams to do
                        their best work regardless of location.&quot;
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Trust First
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Building psychological safety where team members
                            feel valued and empowered to take ownership
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Global Mindset
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Leveraging diverse perspectives and time zones as
                            competitive advantages, not obstacles
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Results Focused
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Measuring success by outcomes and impact, not hours
                            logged or meetings attended
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
