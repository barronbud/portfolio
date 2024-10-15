import { BlogPosts, BlogPostsSneakPeek } from "app/components/posts";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                About Me
            </h1>
            <div className="flex">
                <div className="w-64">
                    <Image
                        src="/images/profile-pic.png"
                        width={896}
                        height={1015}
                        alt="Jeffrey Barron profile picture"
                        className="rounded-3xl"
                    />
                    <div className="my-4">
                        <SocialIcon url="https://www.linkedin.com/in/jeffreyabarron/" />
                        <SocialIcon url="https://github.com/barronbud" />
                    </div>
                </div>
                <div className="mx-4">
                    <h2 className="text-4xl font-bold py-4">Jeffrey Barron</h2>
                    <ul>
                        <li>
                            10+ years in software development across fin-tech,
                            edu-tech, and e-commerce
                        </li>
                        <li>
                            3+ years as engineering leader working with 1 or
                            more remote full-stack teams
                        </li>
                        <li>
                            Developed and led teams using Node, React, Python,
                            and Typescript
                        </li>
                        <li>
                            Led Agile transformations by applying Scrum, Kanban,
                            and other methodologies
                        </li>
                        <li>
                            Hired and grew empowered cross-functional teams with
                            a high bias towards action
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="my-8 text-xl font-semibold tracking-tighter">
                Recent Articles
            </h2>
            <div className="my-8 card-preview">
                <BlogPostsSneakPeek />
            </div>
        </section>
    );
}
