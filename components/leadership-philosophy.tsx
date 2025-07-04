import { Users, Target, MessageSquare, FileText, Clock, Shield, Lightbulb, Heart } from "lucide-react";

export default function LeadershipPhilosophy() {
    const corePhilosophy = {
        title: "Servant Leadership Through Psychological Safety",
        description: "I believe in creating environments where innovation thrives, teams feel empowered to take calculated risks, and every team member has opportunities to grow and contribute meaningfully.",
        principles: [
            {
                icon: Heart,
                title: "Servant Leadership",
                description: "Leading by serving the team, removing obstacles, and empowering others to achieve their highest potential.",
                color: "red"
            },
            {
                icon: Shield,
                title: "Psychological Safety",
                description: "Creating safe spaces where team members can voice ideas, admit mistakes, and take calculated risks without fear.",
                color: "green"
            },
            {
                icon: Users,
                title: "Collaborative Excellence",
                description: "Fostering 'collaborative achievement over individual excellence' to build stronger, more cohesive teams.",
                color: "blue"
            },
            {
                icon: Lightbulb,
                title: "Informed Action",
                description: "Prioritizing 'informed action over detailed documentation' to maintain agility while ensuring quality decisions.",
                color: "yellow"
            }
        ]
    };

    const remoteLeadershipPrinciples = {
        do: [
            {
                icon: Target,
                title: "Be Proactive",
                description: "Communication and connection require proactive cultivation in remote environments. I actively search for opportunities for team connection and signs of struggle.",
                example: "Regular check-ins, team building activities, and monitoring for early warning signs"
            },
            {
                icon: Clock,
                title: "Prioritize Async Methods",
                description: "Lean heavily on asynchronous communication to maximize focus time while accommodating time zone differences.",
                example: "Status updates through tools, monitoring Slack channels, independent feature testing"
            },
            {
                icon: MessageSquare,
                title: "Set Clear Expectations",
                description: "Create a foundation of cultural norms within the team to eliminate ambiguity and uncertainty.",
                example: "Defined collaboration levels, communication protocols, and work mechanics"
            },
            {
                icon: FileText,
                title: "Document Everything",
                description: "Instill a culture of recording key information to ensure free flow of information regardless of availability.",
                example: "Decision logs, progress tracking, and knowledge sharing systems"
            }
        ],
        avoid: [
            {
                title: "Avoiding All Sync Interactions",
                description: "Some things require real-time collaboration - brainstorming, 1:1s, and complex problem-solving sessions."
            },
            {
                title: "One-Size-Fits-All Communication",
                description: "Each team member needs different communication styles and methods to achieve transparency and effectiveness."
            },
            {
                title: "Ignoring Work-Life Boundaries",
                description: "Remote work requires intentional boundary setting to prevent burnout and maintain sustainable productivity."
            }
        ]
    };

    const teamStructureApproach = {
        title: "Team Structure Through Analogy",
        description: "I use analogies to create clear mental models for team roles and responsibilities, making complex organizational structures more understandable and actionable.",
        roles: [
            {
                title: "Coach",
                description: "Creating conditions for team success through thoughtful team selection, culture building, and strategic direction.",
                responsibilities: ["Team composition", "Culture development", "Strategic planning", "Success metrics"]
            },
            {
                title: "Coordinator", 
                description: "Translating strategy into tactical actions, focusing the team on specific goals and removing blockers.",
                responsibilities: ["Goal alignment", "Roadblock removal", "Tactical execution", "Cross-team coordination"]
            },
            {
                title: "Captain",
                description: "Acting as the implicit leader the team turns to for guidance, motivation, and day-to-day execution oversight.",
                responsibilities: ["Daily leadership", "Team motivation", "Decision guidance", "Progress tracking"]
            }
        ]
    };

    const getColorClasses = (color: string) => {
        const colorMap = {
            red: {
                icon: "text-red-600 dark:text-red-400",
                bg: "bg-red-50 dark:bg-red-900/20",
                border: "border-red-200 dark:border-red-800"
            },
            green: {
                icon: "text-green-600 dark:text-green-400", 
                bg: "bg-green-50 dark:bg-green-900/20",
                border: "border-green-200 dark:border-green-800"
            },
            blue: {
                icon: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-50 dark:bg-blue-900/20", 
                border: "border-blue-200 dark:border-blue-800"
            },
            yellow: {
                icon: "text-yellow-600 dark:text-yellow-400",
                bg: "bg-yellow-50 dark:bg-yellow-900/20",
                border: "border-yellow-200 dark:border-yellow-800"
            }
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Leadership Philosophy
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    My approach to building high-performing engineering teams through servant leadership and proven methodologies
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
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
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

            {/* Remote Leadership Principles */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Remote Leadership Principles
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Hard-earned lessons from leading distributed teams across multiple time zones and cultures
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Do Section */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h5 className="text-xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center gap-2">
                            <Shield className="w-6 h-6" />
                            Essential Practices
                        </h5>
                        <div className="space-y-6">
                            {remoteLeadershipPrinciples.do.map((principle, index) => {
                                const Icon = principle.icon;
                                return (
                                    <div key={index} className="group">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                                            </div>
                                            <div>
                                                <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    {principle.title}
                                                </h6>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                                    {principle.description}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                    Example: {principle.example}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Avoid Section */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h5 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
                            <Target className="w-6 h-6" />
                            Common Pitfalls to Avoid
                        </h5>
                        <div className="space-y-6">
                            {remoteLeadershipPrinciples.avoid.map((pitfall, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                            <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                {pitfall.title}
                                            </h6>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {pitfall.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Structure Approach */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {teamStructureApproach.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {teamStructureApproach.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamStructureApproach.roles.map((role, index) => (
                        <div
                            key={index}
                            className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <h5 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                {role.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                {role.description}
                            </p>
                            <div className="space-y-1">
                                {role.responsibilities.map((responsibility, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        <span className="text-xs text-gray-500 dark:text-gray-500">
                                            {responsibility}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
