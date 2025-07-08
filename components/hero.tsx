import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 lg:p-12 mb-16 overflow-hidden relative">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform rotate-12 scale-150"></div>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-30"></div>
                            <Image
                                src="/images/profile-pic.png"
                                width={240}
                                height={240}
                                alt="Jeffrey Barron profile picture"
                                className="relative rounded-3xl shadow-2xl ring-4 ring-white/50 dark:ring-gray-800/50"
                                priority
                            />
                            {/* Status Indicator */}
                            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
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
                                Engineering Leader
                            </h2>
                        </div>

                        {/* Value Proposition */}
                        <div className="mb-8">
                            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                I build high-performing full-stack engineering
                                teams that deliver exceptional results through
                                collaboration, ownership, and shipping fast.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        3+ Years
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Leading Remote Teams
                                    </div>
                                </div>
                                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        20+ Engineers
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Successfully Mentored
                                    </div>
                                </div>
                                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                        150% Faster
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Team Delivery Speed
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Primary CTA */}
                        <div className="flex justify-center lg:justify-start mb-8">
                            <a
                                href="mailto:me@jeffreybarron.dev"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                            >
                                Let&apos;s Chat
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            <SocialIcon
                                url="https://www.linkedin.com/in/jeffreyabarron/"
                                style={{ height: 48, width: 48 }}
                                className="hover:opacity-80 transition-opacity duration-200"
                            />
                            <SocialIcon
                                url="https://github.com/barronbud"
                                style={{ height: 48, width: 48 }}
                                className="hover:opacity-80 transition-opacity duration-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
