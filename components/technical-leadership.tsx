import { Users, Lightbulb, TrendingUp, Shield, Code, Zap, Target, CheckCircle } from "lucide-react";
import { getColorClasses, type ColorVariant } from "@/lib/utils";

export default function TechnicalLeadership() {
    const principles = [
        {
            icon: Users,
            title: "Customer-First Technology Decisions",
            description: "Your customers don't care about your tech stack—they care about results",
            insights: [
                "Choose proven technologies over bleeding-edge for reliability",
                "Prioritize user experience and business value over technical novelty",
                "Make pragmatic decisions based on team expertise and constraints",
                "Focus on shipping value, not showcasing technical prowess",
            ],
            quote: "Every day, companies run profitable businesses on tech stacks that are far more trailing edge than bleeding edge.",
            color: "blue" as ColorVariant,
        },
        {
            icon: Shield,
            title: "Technical Debt Management",
            description: "Balancing innovation with maintainability for long-term success",
            insights: [
                "Treat technical debt as a business decision, not just a technical one",
                "Communicate debt impact in terms of velocity and risk",
                "Create dedicated time for refactoring and improvements",
                "Document architectural decisions and their trade-offs",
            ],
            quote: "There's a point past which you can't duct tape, sweet talk, or bribe a tech stack to do one thing more.",
            color: "green" as ColorVariant,
        },
        {
            icon: TrendingUp,
            title: "Platform Migration Leadership",
            description: "Successfully leading complex rewrites and system migrations",
            insights: [
                "Break large migrations into incremental, deliverable phases",
                "Maintain business continuity throughout the transition",
                "Involve the entire team in planning and decision-making",
                "Establish clear success metrics and rollback plans",
            ],
            quote: "Successfully tackling complex rewrites requires careful planning, team alignment, and incremental delivery.",
            color: "purple" as ColorVariant,
        },
        {
            icon: Code,
            title: "Engineering Excellence",
            description: "Building scalable systems with quality and maintainability in mind",
            insights: [
                "Implement code contracts and API stubs for parallel development",
                "Establish clear coding standards and review processes",
                "Automate testing and deployment for consistent quality",
                "Create documentation that enables team autonomy",
            ],
            quote: "Pick a poison you can live with. Make it work; make it clean; make it useful.",
            color: "orange" as ColorVariant,
        },
    ];

    const technicalAchievements = [
        {
            metric: "30%",
            description: "Tech debt reduction",
            detail: "Migrated 15 applications to Docker at Holmes Corp",
        },
        {
            metric: "50%",
            description: "Team velocity increase",
            detail: "Through non-blocking processes and code contracts",
        },
        {
            metric: "60%",
            description: "Time savings",
            detail: "Led OCR automation development at Routable",
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
                    Technical Leadership Philosophy
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Pragmatic technology decisions focused on business value, team productivity, and long-term
                    maintainability over technical novelty
                </p>
            </div>

            {/* Core Principles */}
            <div className="space-y-8 mb-16">
                {principles.map((principle, index) => {
                    const colors = getColorClasses(principle.color);
                    const Icon = principle.icon;

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
                                        <Icon className={`w-8 h-8 ${colors.icon}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {principle.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">{principle.description}</p>
                                        <blockquote
                                            className={`text-sm italic ${colors.icon} border-l-4 ${colors.border} pl-4`}
                                        >
                                            &ldquo;{principle.quote}&rdquo;
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
                                        Key Insights
                                    </h5>
                                    <div className="space-y-3">
                                        {principle.insights.map((insight, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle
                                                    className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`}
                                                />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    {insight}
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

            {/* Technical Achievements */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Leadership Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        Measurable impact through pragmatic technical decisions and team empowerment
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {technicalAchievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {achievement.metric}
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                {achievement.description}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.detail}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Approach */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Technology Decision Framework
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Business Value First
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Every technical decision evaluated through the lens of customer impact and business outcomes
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Pragmatic Innovation
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Adopting new technologies when they solve real problems, not for novelty&apos;s sake
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Empowerment</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Choosing tools and processes that enable team autonomy and reduce friction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
