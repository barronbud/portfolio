"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    MapPin,
    Calendar,
    Users,
    TrendingUp,
} from "lucide-react";

export default function InteractiveTimeline() {
    const [expandedItems, setExpandedItems] = useState<number[]>([0]); // First item expanded by default

    const timelineData = [
        {
            period: "05/2023 - Present",
            company: "Freelance",
            role: "Software Engineer & Technical Consultant",
            location: "Remote",
            type: "current",
            highlights: [
                "Built TypeScript AI/ML powered study path solution increasing user engagement by 40%",
                "Developed automated build scripts with Python and Docker-based API using Bottle framework",
                "Coded multi-location inventory and wallet payment systems for SaaS e-commerce platform",
                "Delivered content build system with <1 minute rebuild times",
            ],
            technologies: ["TypeScript", "Python", "Docker", "AI/ML"],
            achievements: [
                { metric: "40%", description: "User engagement increase" },
                { metric: "<1 min", description: "Build time optimization" },
                { metric: "3", description: "Major projects delivered" },
            ],
        },
        {
            period: "03/2022 - 05/2023",
            company: "Routable (YC '17)",
            role: "Engineering Manager",
            location: "Remote",
            type: "leadership",
            highlights: [
                "Grew team of 6-8 engineers responsible for invoice features within fintech SaaS platform",
                "Increased team velocity by 150% through non-blocking processes and code contracts",
                "Led development of OCR for invoice recording, resulting in 60% average time savings",
                "Managed complex rewrite project after 2 previous failed attempts",
            ],
            technologies: ["Node.js", "React", "TypeScript", "OCR", "Fintech"],
            achievements: [
                { metric: "150%", description: "Team velocity increase" },
                { metric: "60%", description: "Time savings with OCR" },
                { metric: "8+", description: "Engineers managed" },
            ],
        },
        {
            period: "01/2020 - 03/2022",
            company: "CourseKey",
            role: "Engineering Manager",
            location: "Remote",
            type: "leadership",
            highlights: [
                "First-ever Engineering Manager hire, established engineering management practices",
                "Led 18 engineers across 4 pods in a matrixed org structure",
                "Increased feature delivery by 20% through scalable agile processes",
            ],
            technologies: [
                "JavaScript",
                "React",
                "Node.js",
                "Agile",
                "Team Building",
            ],
            achievements: [
                { metric: "20%", description: "Feature delivery increase" },
                { metric: "18", description: "Engineers in pod structure" },
            ],
        },
        {
            period: "04/2018 - 01/2020",
            company: "vinSUITE",
            role: "Lead Software Engineer",
            location: "Remote",
            type: "technical",
            highlights: [
                "Led and monitored daily operations of 5 developer remote team",
                "Released 9 high quality projects on time with defect rate lower than 5%",
                "Executed PCI-compliant upgrades leveraging AWS KMS",
                "Established remote team collaboration practices",
            ],
            technologies: [
                "JavaScript",
                "AWS",
                "Angular",
                "Coldfusion",
                "PCI Compliance",
            ],
            achievements: [
                { metric: "9", description: "Projects delivered" },
                { metric: "<5%", description: "Defect rate" },
                { metric: "5", description: "Developers led" },
            ],
        },
        {
            period: "06/2016 - 12/2017",
            company: "RealTruck",
            role: "Software Engineering Manager",
            location: "North Dakota",
            type: "leadership",
            highlights: [
                "Led 5 developers to 50% decrease in completion time by clearing roadblocks",
                "Managed cross-functional development on 20 high-priority initiatives",
                "Established first formal engineering management practices integrating Jira processes",
            ],
            technologies: ["PHP", "Javascript", "Jira", "Process Optimization"],
            achievements: [
                { metric: "50%", description: "Completion time reduction" },
                { metric: "20", description: "High-priority initiatives" },
            ],
        },
    ];

    const toggleExpanded = (index: number) => {
        setExpandedItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const getTypeColor = (type: string) => {
        const colors = {
            current: "bg-blue-500 border-blue-200 dark:border-blue-800",
            leadership:
                "bg-purple-500 border-purple-200 dark:border-purple-800",
            technical: "bg-green-500 border-green-200 dark:border-green-800",
        };
        return colors[type as keyof typeof colors] || colors.technical;
    };

    const getTypeLabel = (type: string) => {
        const labels = {
            current: "Current Role",
            leadership: "Leadership Role",
            technical: "Technical Role",
        };
        return labels[type as keyof typeof labels] || "Role";
    };

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Career Journey
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    A progression from technical contributor to engineering
                    leader, with consistent focus on team building and delivery
                    excellence
                </p>
            </div>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

                <div className="space-y-8">
                    {timelineData.map((item, index) => {
                        const isExpanded = expandedItems.includes(index);
                        const typeColor = getTypeColor(item.type);

                        return (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-6 w-4 h-4 ${typeColor} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}
                                ></div>

                                {/* Content Card */}
                                <div className="ml-20">
                                    <div
                                        className={`group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer ${
                                            isExpanded
                                                ? "shadow-xl"
                                                : "shadow-sm hover:shadow-lg"
                                        }`}
                                        onClick={() => toggleExpanded(index)}
                                    >
                                        {/* Header */}
                                        <div className="p-6 pb-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span
                                                            className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                                                                typeColor.split(
                                                                    " "
                                                                )[0]
                                                            }`}
                                                        >
                                                            {getTypeLabel(
                                                                item.type
                                                            )}
                                                        </span>
                                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                            <Calendar className="w-4 h-4" />
                                                            {item.period}
                                                        </div>
                                                    </div>

                                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                        {item.role}
                                                    </h4>
                                                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                                        <span className="font-semibold">
                                                            {item.company}
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            {item.location}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    {/* Key Metrics Preview */}
                                                    <div className="hidden md:flex items-center gap-3">
                                                        {item.achievements
                                                            .slice(0, 2)
                                                            .map(
                                                                (
                                                                    achievement,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="text-center"
                                                                    >
                                                                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                                            {
                                                                                achievement.metric
                                                                            }
                                                                        </div>
                                                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                                                            {
                                                                                achievement.description
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>

                                                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                        {isExpanded ? (
                                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                                        ) : (
                                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        {isExpanded && (
                                            <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-4">
                                                {/* Highlights */}
                                                <div className="mb-6">
                                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                                        Key Achievements
                                                    </h5>
                                                    <div className="space-y-2">
                                                        {item.highlights.map(
                                                            (
                                                                highlight,
                                                                idx
                                                            ) => (
                                                                <div
                                                                    key={idx}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                                        {
                                                                            highlight
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                                        Technologies & Skills
                                                    </h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map(
                                                            (tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* All Achievements */}
                                                <div>
                                                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                                        Impact Metrics
                                                    </h5>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        {item.achievements.map(
                                                            (
                                                                achievement,
                                                                idx
                                                            ) => (
                                                                <div
                                                                    key={idx}
                                                                    className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                                                                >
                                                                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                                                        {
                                                                            achievement.metric
                                                                        }
                                                                    </div>
                                                                    <div className="text-xs text-gray-600 dark:text-gray-400">
                                                                        {
                                                                            achievement.description
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Summary */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Consistent Growth & Impact
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                        From technical contributor to engineering leader, each
                        role has built upon the last to create a comprehensive
                        skill set in both technology and team leadership.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <TrendingUp className="w-5 h-5" />
                            View Complete Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
