import { Users, Code, TrendingUp } from "lucide-react";
import { getColorClasses, type ColorVariant } from "@/lib/utils";

export default function CoreCompetencies() {
    const competencies = [
        {
            icon: TrendingUp,
            title: "Getting Stalled Teams Moving",
            description:
                "I took over a platform rewrite that had stalled twice before. By switching from Scrum to Kanban, implementing non-blocking processes, and rebuilding team confidence, we achieved 50% velocity increase in 6 months.",
            color: "green" as ColorVariant,
        },
        {
            icon: Users,
            title: "Building Teams That Stay & Grow",
            description:
                "Over 3+ years leading remote teams, I've maintained 95% retention while helping engineers grow from junior to senior roles. People don't just stay—they thrive and become mentors themselves.",
            color: "blue" as ColorVariant,
        },
        {
            icon: Code,
            title: "Shipping Quality Software",
            description:
                "I've delivered 9 mission-critical projects with sub-5% defect rates, from PCI-compliant payment systems to AI/ML integrations. I stay hands-on with architecture decisions while empowering my team to own the implementation.",
            color: "purple" as ColorVariant,
        },
    ];

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    How I Help Engineering Teams Succeed
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Three areas where I&apos;ve consistently delivered results by focusing on people, process, and
                    practical solutions
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {competencies.map((competency, index) => {
                    const colors = getColorClasses(competency.color);
                    const Icon = competency.icon;

                    return (
                        <div
                            key={index}
                            className={`group relative ${colors.bg} ${colors.border} border-2 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <Icon className={`w-8 h-8 ${colors.icon}`} />
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                    {competency.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {competency.description}
                                </p>
                            </div>

                            {/* Decorative Element */}
                            <div
                                className={`absolute top-6 right-6 w-3 h-3 ${colors.dot} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                            ></div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Working on Similar Challenges?
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        If your team is facing stalled projects, retention issues, or delivery challenges, I&apos;d love
                        to chat about how these approaches might help.
                    </p>
                    <a
                        href="mailto:me@jeffreybarron.dev"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Let&apos;s Chat
                        <TrendingUp className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
