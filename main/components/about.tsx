import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function About() {
    return (
        <div className="flex">
            <div className="w-64 z-10">
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
                <ul className="list-disc list-inside pl-6">
                    <li className="my-4">
                        10+ years in software development across fin-tech,
                        edu-tech, and e-commerce
                    </li>
                    <li className="my-4">
                        3+ years as engineering leader working with 1 or more
                        remote full-stack teams
                    </li>
                    <li className="my-4">
                        Develop and lead teams utilizing Node, React, Python,
                        and Typescript
                    </li>
                    <li className="my-4">
                        Lead Agile transformations by applying Scrum, Kanban,
                        and other methodologies
                    </li>
                    <li className="my-4">
                        Hire and grow empowered cross-functional teams with a
                        high bias towards action
                    </li>
                </ul>
            </div>
        </div>
    );
}
