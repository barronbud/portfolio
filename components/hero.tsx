import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 lg:p-12 mb-16 overflow-hidden relative group">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform rotate-12 scale-150 group-hover:rotate-6 transition-transform duration-1000"></div>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative group/image">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover/image:opacity-50 transition-opacity duration-500"></div>
                            <Image
                                src="/images/profile-pic.png"
                                width={240}
                                height={240}
                                alt="Jeffrey Barron profile picture"
                                className="relative rounded-3xl shadow-2xl ring-4 ring-white/50 dark:ring-gray-800/50 group-hover/image:scale-105 transition-transform duration-500"
                                priority
                            />
                            {/* Status Indicator */}
                            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse-glow">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                Available
                            </div>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="mb-6">
                            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-shadow">
                                Jeffrey Barron
                            </h1>
                            <h2 className="text-2xl lg:text-3xl gradient-text font-semibold mb-6">
                                Engineering Leader & Technical Executive
                            </h2>
                        </div>

                        {/* Elevator Pitch */}
                        <div className="mb-8">
                            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                I transform engineering teams into
                                high-velocity, collaborative powerhouses that
                                deliver exceptional results.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                With{" "}
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                    10+ years
                                </span>{" "}
                                in software development and{" "}
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                    3+ years
                                </span>{" "}
                                leading remote teams, I've consistently
                                increased team velocity by{" "}
                                <span className="font-semibold text-green-600 dark:text-green-400">
                                    150%
                                </span>{" "}
                                while building scalable solutions across
                                fintech, edutech, and e-commerce.
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="group text-center p-4 glass-effect rounded-xl shadow-sm hover-lift hover-glow">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 group-hover:scale-110 transition-transform">
                                    10+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    Years Development
                                </div>
                            </div>
                            <div className="group text-center p-4 glass-effect rounded-xl shadow-sm hover-lift hover-glow">
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1 group-hover:scale-110 transition-transform">
                                    20+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    Engineers Led
                                </div>
                            </div>
                            <div className="group text-center p-4 glass-effect rounded-xl shadow-sm hover-lift hover-glow">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 group-hover:scale-110 transition-transform">
                                    150%
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    Velocity Increase
                                </div>
                            </div>
                            <div className="group text-center p-4 glass-effect rounded-xl shadow-sm hover-lift hover-glow">
                                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1 group-hover:scale-110 transition-transform">
                                    60%
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    Time Savings
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <a
                                href="mailto:me@jeffreybarron.dev"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Let's Connect
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            <SocialIcon
                                url="https://www.linkedin.com/in/jeffreyabarron/"
                                style={{ height: 48, width: 48 }}
                                className="hover:scale-110 transition-transform duration-200"
                            />
                            <SocialIcon
                                url="https://github.com/barronbud"
                                style={{ height: 48, width: 48 }}
                                className="hover:scale-110 transition-transform duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
