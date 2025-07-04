"use client";

import { SocialIcon } from "react-social-icons";
import { Mail, Download, MapPin, MessageCircle, Sparkles } from "lucide-react";
import ParticleBackground from "./particle-background";

export default function ContactCTA() {
    return (
        <div className="mb-12">
            {/* Main CTA Section */}
            <div className="scroll-reveal relative bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl p-8 text-white text-center overflow-hidden group">
                <ParticleBackground
                    particleCount={30}
                    colors={["#ffffff", "#bfdbfe", "#93c5fd"]}
                    speed={0.3}
                    className="opacity-20"
                />

                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 opacity-30">
                    <Sparkles className="w-6 h-6 animate-float" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-30">
                    <Sparkles
                        className="w-4 h-4 animate-float"
                        style={{ animationDelay: "1.5s" }}
                    />
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 text-shadow">
                        Ready to Build Something Great Together?
                    </h3>
                    <p className="text-xl mb-8 text-blue-100">
                        Let&apos;s discuss how I can help lead your engineering
                        team to success
                    </p>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="mailto:me@jeffreybarron.dev"
                        className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-glow"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Get in Touch
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Email
                    </h4>
                    <a
                        href="mailto:me@jeffreybarron.dev"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        me@jeffreybarron.dev
                    </a>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        Remote-First
                        <br />
                        <span className="text-sm">Sacramento, CA</span>
                        <br />
                        <span className="text-sm">Open to Relocation</span>
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Connect
                    </h4>
                    <div className="flex justify-center gap-2">
                        <SocialIcon
                            url="https://www.linkedin.com/in/jeffreyabarron/"
                            style={{ height: 32, width: 32 }}
                        />
                        <SocialIcon
                            url="https://github.com/barronbud"
                            style={{ height: 32, width: 32 }}
                        />
                    </div>
                </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-800 dark:text-green-300">
                        Currently Available for New Opportunities
                    </span>
                </div>
                <p className="text-green-700 dark:text-green-400">
                    Seeking Engineering Manager or Senior Engineering Leadership
                    roles
                </p>
            </div>
        </div>
    );
}
