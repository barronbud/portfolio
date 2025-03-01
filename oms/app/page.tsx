export default async function Overview() {
    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <header>
                <h1 className="text-3xl font-bold mb-4">
                    Order Management System
                </h1>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    A comprehensive full-stack web application built with
                    Next.js 15, showcasing modern React development practices
                    and cloud deployment strategies. This demo project serves as
                    a practical exploration of contemporary web development
                    technologies and methodologies.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-3">
                    Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The Order Management System demonstrates the integration of
                    frontend and backend technologies, featuring a PostgreSQL
                    database managed through Prisma ORM, styled with Tailwind
                    CSS, and deployed on Vercel&apos;s cloud platform.
                    Currently, users can view orders and interact with
                    pre-seeded data, with planned expansions to include customer
                    management, product catalogs, and advanced search
                    functionality.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">
                    Learning Outcomes
                </h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Modern Next.js development practices</li>
                    <li>React component architecture and state management</li>
                    <li>Database integration using ORM technologies</li>
                    <li>Server-side operations and API design</li>
                    <li>Cloud deployment and infrastructure management</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">
                    Technical Implementation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The application leverages Next.js 15&apos;s server
                    components and server actions to handle data operations
                    efficiently, while maintaining a responsive and intuitive
                    user interface. The integration of Prisma ORM with
                    PostgreSQL provides a type-safe database layer, ensuring
                    reliable data management and scalability.
                </p>
            </section>
        </div>
    );
}
