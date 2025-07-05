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
} from "lucide-react";
import { getColorClasses, type ColorVariant } from "@/lib/utils";

export default function LeadershipPhilosophy() {
    const corePhilosophy = {
        title: "Authentic Leadership Through Transparency",
        description:
            "I believe in creating environments where innovation thrives through honest communication, psychological safety, and genuine care for team members as whole people—not just resources.",
        principles: [
            {
                icon: Heart,
                title: "Servant Leadership",
                description:
                    "Leading by serving the team, removing obstacles, and empowering others to achieve their highest potential.",
                color: "red" as ColorVariant,
            },
            {
                icon: Shield,
                title: "Psychological Safety",
                description:
                    "Creating safe spaces where team members can voice ideas, admit mistakes, and take calculated risks without fear.",
                color: "green" as ColorVariant,
            },
            {
                icon: Users,
                title: "Collaborative Excellence",
                description:
                    "Fostering collaborative achievement over individual excellence to build stronger, more cohesive teams.",
                color: "blue" as ColorVariant,
            },
            {
                icon: Lightbulb,
                title: "Informed Action",
                description:
                    "Prioritizing informed action over detailed documentation to maintain agility while ensuring quality decisions.",
                color: "yellow" as ColorVariant,
            },
            // {
            //     icon: MessageSquare,
            //     title: "Radical Transparency",
            //     description:
            //         "Creating safe spaces for difficult conversations, including when team members are looking elsewhere or facing challenges.",
            //     color: "purple",
            // },
        ],
    };

    const leadershipInsights = [
        {
            icon: UserPlus,
            title: "Hiring & Team Building Philosophy",
            description:
                "Building exceptional teams through culture-first hiring and recognizing talent in unexpected places",
            insights: [
                "Hire for culture first, tech second; great teammates can learn tech skills",
                "Hire curious people vs know-it-all's; a drive to understand leads to success",
                "Talent can be found in the oddest of places",
                "Focus on potential and growth mindset over perfect experience match",
            ],
            quote: "I was extremely lucky that my first hires turned out to be my best. One went on to become the CTO for an aerospace start-up, while the other worked at a start-up eventually acquired by Google.",
            color: "blue" as ColorVariant,
        },
        {
            icon: BookOpen,
            title: "Growth & Learning Mindset",
            description:
                "Fostering continuous learning and turning unknowns into opportunities for growth",
            insights: [
                "Not knowing something isn't a weakness, it's an opportunity to grow",
                "Openly admit what you don't know to reveal efficient learning paths",
                "Focus on what matters now, this week, this month for targeted growth",
                "Curiosity and tenacity are the keys to discovering missing pieces",
            ],
            quote: "'I don't know' is a powerful phrase. When combined with 'but let me find out' it's the skeleton key that unlocks growth.",
            color: "green" as ColorVariant,
        },
        {
            icon: TrendingUp,
            title: "Team Support & Retention",
            description:
                "Creating conditions for team success through focused support and empowerment",
            insights: [
                "Control how your team is supported and create conditions for growth",
                "Focus entirely on ensuring the success of your team members",
                "Create challenging problems and increase opportunities for ownership",
                "Build consistent practices that improve over time",
            ],
            quote: "I can control how my team is supported. I can control that the right conditions for growth exist. I can control that my full focus is on ensuring the success of my team.",
            color: "purple" as ColorVariant,
        },
        {
            icon: Shield,
            title: "Simplicity & Pragmatism",
            description:
                "Maintaining team effectiveness through simple, understandable solutions",
            insights: [
                "Keep solutions simple and easy to understand with clear boundaries",
                "Every layer and abstraction comes with costs magnified on small teams",
                "You can always add complexity, but taking it away is much harder",
                "Simple solutions make shipping and maintaining things easier",
            ],
            quote: "Keep it simple for as long as you can. You can always add more, but taking away is usually much harder.",
            color: "orange" as ColorVariant,
        },
        {
            icon: Heart,
            title: "Reputation & Collaboration",
            description:
                "Building lasting professional relationships through dependability and genuine support",
            insights: [
                "Being known as a dependable teammate is a currency that never loses value",
                "Bring skill, reliability, and collaborative spirit to every role",
                "Support your team and get things done quickly and correctly",
                "Professional reputation creates opportunities and opens doors",
            ],
            quote: "Cultivating a great reputation is a valuable asset in any job search, but especially in this market. You never know when seeds you plant will lead to good things.",
            color: "red" as ColorVariant,
        },
    ];

    const remoteLeadershipStrategies = [
        {
            icon: Users,
            title: "Building Remote-First Culture",
            description:
                "Creating psychological safety and belonging across distributed teams through intentional culture building.",
            strategies: [
                "Establish clear communication and expectations",
                "Implement regular effective 1:1s and team retrospectives",
                "Create virtual coffee chats and team bonding activities",
                "Promote asynchronous decision-making processes",
            ],
            impact: "95% team retention rate across remote teams",
            color: "blue" as ColorVariant,
        },
        {
            icon: MessageSquare,
            title: "Communication Excellence",
            description:
                "Mastering async and sync communication for maximum productivity while accommodating global teams.",
            strategies: [
                "Document everything for transparency and knowledge sharing",
                "Use threaded discussions for complex technical decisions",
                "Establish 'communication windows' for different time zones",
                "Create clear escalation paths for urgent issues",
            ],
            impact: "25% reduction in meeting overhead",
            color: "green" as ColorVariant,
        },
        {
            icon: Target,
            title: "Goal Alignment & Autonomy",
            description:
                "Empowering teams with clear objectives while maintaining flexibility and ownership.",
            strategies: [
                "Implement OKRs with weekly check-ins",
                "Create individual development plans for each team member",
                "Establish clear success metrics and accountability",
                "Promote ownership through project leadership opportunities",
            ],
            impact: "150% increase in team velocity",
            color: "purple" as ColorVariant,
        },
        {
            icon: Clock,
            title: "Flexible Work Optimization",
            description:
                "Leveraging time zone differences as a competitive advantage rather than an obstacle.",
            strategies: [
                "Design clear handoff processes for 24/7 development cycles",
                "Optimize meeting schedules for global team participation",
                "Create flexible core hours for collaboration",
            ],
            impact: "40% faster feature delivery",
            color: "orange" as ColorVariant,
        },
    ];

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Leadership Philosophy & Remote Expertise
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    My approach to building high-performing engineering teams
                    through servant leadership, proven methodologies, and
                    remote-first culture
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Leadership Insights */}
            <div className="space-y-8 mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Leadership Insights & Practices
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Practical insights from leading engineering teams,
                        hiring talent, and building high-performing cultures
                    </p>
                </div>

                {leadershipInsights.map((insight, index) => {
                    const colors = getColorClasses(insight.color);
                    const Icon = insight.icon;

                    return (
                        <div
                            key={index}
                            className={`border-2 ${colors.border} rounded-3xl p-8 transition-shadow duration-300 hover:shadow-lg`}
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex items-start gap-4 lg:w-1/2">
                                    <div
                                        className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                                    >
                                        <Icon
                                            className={`w-8 h-8 ${colors.icon}`}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {insight.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {insight.description}
                                        </p>
                                        <blockquote
                                            className={`text-sm italic ${colors.icon} border-l-4 ${colors.border} pl-4`}
                                        >
                                            &ldquo;{insight.quote}&rdquo;
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
                                        Key Insights
                                    </h5>
                                    <div className="space-y-3">
                                        {insight.insights.map((item, idx) => (
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
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Remote Leadership Strategies */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Remote Leadership Expertise
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        3+ years leading distributed teams across multiple time
                        zones, building high-performing remote-first cultures
                        that deliver exceptional results
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {remoteLeadershipStrategies.map((strategy, index) => {
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
            </div>

            {/* Remote Leadership Philosophy Quote */}
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
