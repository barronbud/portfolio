export default function LeadershipImpact() {
    const achievements = [
        {
            metric: "1.5x",
            description: "Team velocity increase",
            detail: "Through non-blocking processes and code contracts at Routable",
        },
        {
            metric: "60%",
            description: "Time savings with OCR",
            detail: "Led development of invoice recording automation",
        },
        {
            metric: "20%",
            description: "Feature delivery increase",
            detail: "Through scalable agile processes at CourseKey",
        },
        {
            metric: "50%",
            description: "Completion time reduction",
            detail: "By proactively clearing roadblocks at RealTruck",
        },
        {
            metric: "30%",
            description: "Tech debt reduction",
            detail: "Migrated 15 applications to Docker at Holmes Corp",
        },
        {
            metric: "<5%",
            description: "Defect rate achieved",
            detail: "Released 9 high-quality projects on time at vinSUITE",
        },
    ];

    const experiences = [
        {
            company: "Freelance",
            role: "Software Engineer",
            period: "05/2023 - Present",
            highlights: [
                "Built TypeScript AI/ML powered study path solution increasing user engagement",
                "Developed automated build scripts with Python and Docker-based API using Bottle framework",
                "Coded multi-location inventory and wallet payment systems for SaaS e-commerce platform",
            ],
        },
        {
            company: "Routable (YC '17)",
            role: "Engineering Manager",
            period: "03/2022 - 05/2023",
            highlights: [
                "Grew team of 6-8 engineers responsible for invoice features within fintech SaaS platform",
                "Increased team velocity by 150% through non-blocking processes and code contracts",
                "Led development of OCR for invoice recording, resulting in 60% average time savings",
            ],
        },
        {
            company: "CourseKey",
            role: "Engineering Manager",
            period: "07/2021 - 03/2022",
            highlights: [
                "Built and nurtured four cross-functional teams comprising 13 engineers total",
                "Increased feature delivery by 20% through scalable agile processes",
                "Shipped Risk Score and Student Retention Dashboard reducing loss of at-risk students",
            ],
        },
        {
            company: "Holmes Corp",
            role: "Full-Stack Developer",
            period: "01/2020 - 07/2021",
            highlights: [
                "Designed and developed projects in Python and TypeScript for education SaaS platform",
                "Reduced tech debt by 30% by migrating 15 applications to Docker",
                "Created proof of concept for remote test proctoring during Covid",
            ],
        },
        {
            company: "vinSUITE",
            role: "Lead Software Engineer",
            period: "04/2018 - 01/2020",
            highlights: [
                "Led and monitored daily operations of 5 developer remote team",
                "Released 9 high quality projects on time with defect rate lower than 5%",
                "Executed PCI-compliant upgrades leveraging AWS KMS",
            ],
        },
        {
            company: "RealTruck",
            role: "Software Engineering Manager",
            period: "06/2016 - 12/2017",
            highlights: [
                "Led 5 developers to 50% decrease in completion time by clearing roadblocks",
                "Created Jira-based agile processes that reduced shipment time by 50%",
                "Managed cross-functional development on 20 high-priority initiatives",
            ],
        },
    ];

    return (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Leadership Impact & Results
            </h3>

            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    Quantifiable Leadership Achievements
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {achievement.metric}
                            </div>
                            <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                {achievement.description}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {achievement.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Leadership Journey
                </h4>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <div>
                                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {exp.role}
                                </h5>
                                <p className="text-blue-600 dark:text-blue-400 font-medium">
                                    {exp.company}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                                {exp.period}
                            </div>
                        </div>
                        <ul className="space-y-2">
                            {exp.highlights.map((highlight, highlightIndex) => (
                                <li
                                    key={highlightIndex}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {highlight}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
