import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function About() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 rounded-2xl p-8 mb-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/profile-pic.png"
                            width={200}
                            height={200}
                            alt="Jeffrey Barron profile picture"
                            className="rounded-2xl shadow-lg"
                            priority
                        />
                    </div>

                    {/* Executive Summary */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1
                            data-testid="heading"
                            className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
                        >
                            Jeffrey Barron
                        </h1>
                        <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                            Engineering Leader & Technical Executive
                        </h2>

                        {/* Key Value Proposition */}
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            Engineering Leader with{" "}
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                10+ years
                            </span>{" "}
                            in software development and{" "}
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                3+ years
                            </span>{" "}
                            leading remote full-stack teams across fin-tech,
                            edu-tech, and e-commerce. Proven track record of
                            increasing team velocity by 150% and delivering
                            scalable solutions using Node, React, Python, and
                            TypeScript.
                        </p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    10+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Years Development
                                </div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    20+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Engineers Led
                                </div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    150%
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Velocity Increase
                                </div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    60%
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Time Savings
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            <SocialIcon
                                url="https://www.linkedin.com/in/jeffreyabarron/"
                                style={{ height: 40, width: 40 }}
                            />
                            <SocialIcon
                                url="https://github.com/barronbud"
                                style={{ height: 40, width: 40 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Competencies */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Core Leadership Competencies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Team Leadership & Agile Transformation
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Led Agile transformations by applying Scrum,
                                    Kanban, and other methodologies. Built and
                                    nurtured cross-functional teams of up to 13
                                    engineers, increasing feature delivery by
                                    20% through scalable agile processes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Full-Stack Development & Architecture
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Developed and led teams using Node, React,
                                    Python, and JavaScript/TypeScript. Executed
                                    strategic re-architecture of core data
                                    models and systems, coordinating efforts
                                    across multiple squads.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Process Optimization & Velocity
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Increased team velocity by 150% through
                                    non-blocking processes, code contracts, and
                                    reduced friction during merges. Led teams to
                                    60% decrease in completion time by
                                    proactively clearing roadblocks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Product Innovation & Technical Leadership
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Led development of OCR for invoice recording
                                    (60% time savings), AI/ML powered study
                                    paths, and PCI-compliant payment systems.
                                    Released 9 high-quality projects with defect
                                    rate lower than 5%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
