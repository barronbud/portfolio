import { Users, Zap, Target } from "lucide-react";

export default function LeadershipPhilosophyBrief() {
    return (
        <div className="mb-16">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl p-8 border border-slate-200 dark:border-gray-700">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        My Leadership Philosophy
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        I believe in servant leadership—creating psychologically
                        safe environments where teams feel empowered to take
                        calculated risks, grow meaningfully, and ship value
                        fast.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Ownership & Autonomy
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Empowering engineers to own their work and make
                            decisions while providing support and mentorship
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Pragmatic Solutions
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Choosing proven technologies and approaches that
                            deliver business value over bleeding-edge complexity
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Continuous Growth
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Supporting both technical and non-technical growth
                            through mentorship and learning opportunities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
