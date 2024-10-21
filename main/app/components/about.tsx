import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function About() {
    return (
        <div className="flex">
            <div className="w-64 z-10">
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
            <div className="mx-4 z-10">
                <ul>
                    <li>
                        10+ years in software development across fin-tech,
                        edu-tech, and e-commerce
                    </li>
                    <li>
                        3+ years as engineering leader working with 1 or more
                        remote full-stack teams
                    </li>
                    <li>
                        Develop and lead teams utilizing Node, React, Python,
                        and Typescript
                    </li>
                    <li>
                        Lead Agile transformations by applying Scrum, Kanban,
                        and other methodologies
                    </li>
                    <li>
                        Hire and grow empowered cross-functional teams with a
                        high bias towards action
                    </li>
                </ul>
            </div>
        </div>
    );
}
