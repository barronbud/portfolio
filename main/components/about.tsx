import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row">
            {/* make the left column take up 30% of the width */}
            <div className="w-1/2 z-10">
                <h1
                    data-testid="heading"
                    className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white"
                >
                    Jeffrey Barron
                </h1>
                <Image
                    src="/images/profile-pic.png"
                    width={896}
                    height={1015}
                    alt="Jeffrey Barron profile picture"
                    className="rounded-3xl"
                    priority
                />

                <div className="my-4">
                    <SocialIcon url="https://www.linkedin.com/in/jeffreyabarron/" />
                    <SocialIcon url="https://github.com/barronbud" />
                </div>
            </div>
            <div className="mx-4 my-8 z-10 text-lg">
                <p className="mb-6 text-gray-700 dark:text-gray-300 font-bold ">
                    Engineering Manager with 3+ years of experience building and
                    leading high-performing teams across fin-tech, edu-tech, and
                    e-commerce. Proven track record of delivering scalable
                    solutions while fostering inclusive, innovative engineering
                    cultures.
                </p>
                <ul className="list-disc list-inside pl-6">
                    <li className="my-4">
                        Led cross-functional engineering teams through
                        successful Agile transformations, implementing Scrum and
                        Kanban methodologies to improve delivery efficiency
                    </li>
                    <li className="my-4">
                        Architected and delivered scalable solutions using
                        Node.js, React, Python, and TypeScript, with a focus on
                        system reliability and performance
                    </li>
                    <li className="my-4">
                        Built and mentored remote engineering teams,
                        establishing best practices for code quality, testing,
                        and continuous integration
                    </li>
                    <li className="my-4">
                        Drove technical strategy and innovation while balancing
                        business objectives with technical excellence
                    </li>
                    <li className="my-4">
                        Championed data-driven decision making and continuous
                        improvement, resulting in measurable improvements in
                        team productivity and product quality
                    </li>
                </ul>
            </div>
        </div>
    );
}
