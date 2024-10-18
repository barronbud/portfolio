import { BlogPostsSneakPeek } from "app/components/posts";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { ArrowIcon } from "./components/footer";
import Recommendation from "./components/recommendation";
import { title } from "process";
import { showNewApp } from "flags";

const recommendations = [
    {
        name: "Anthony Bull",
        title: "Director of Engineering @ Rad AI",
        link: "https://www.linkedin.com/in/anthony-bull",
        content: [
            "I had the pleasure of working with Jeffrey when I hired him as CourseKey's first (ever) Engineering Manager.",
            "He played a crucial role in our successful transition from a flat structure to a pod-based model. His ability to inspire and guide during that ambiguous, somewhat-chaotic time, as well as his keen understanding of the technical aspects of the work, made him an invaluable asset during that period of change.",
        ],
    },
    {
        name: "Brian Sweatt",
        title: "CTO @ BitCoin Depot",
        link: "https://www.linkedin.com/in/bsweatt",
        content: [
            "Given the opportunity I would jump at the chance to work with Jeff again, in any capacity. He is an engineering leader I trust completely to be empathetic, build a great team, culture, and product, as well as get the most out of the people he works with, myself included.",
        ],
    },
    {
        name: "Tiffany Lottering",
        title: "Principal Product Designer @ Routable (YC '17)",
        link: "https://www.linkedin.com/in/tiffany-lottering-06750a1a",
        content: [
            "Jeffrey has this unique combo of tech expertise and strategic thinking that made our collaboration between engineering and design seamless. He created an inclusive work environment where we freely shared ideas and worked together to deliver innovative, user-centered solutions.",
        ],
    },
];

export default async function Page() {
    const newApp = await showNewApp();
    console.log(newApp);
    return (
        <section>
            <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
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
                        priority
                    />
                    <div className="my-4">
                        <SocialIcon url="https://www.linkedin.com/in/jeffreyabarron/" />
                        <SocialIcon url="https://github.com/barronbud" />
                    </div>
                </div>
                <div className="mx-4">
                    <h2 className="text-2xl font-bold py-4">Jeffrey Barron</h2>
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
                            Develop and lead teams utilizing Node, React,
                            Python, and Typescript
                        </li>
                        <li>
                            Lead Agile transformations by applying Scrum,
                            Kanban, and other methodologies
                        </li>
                        <li>
                            Hire and grow empowered cross-functional teams with
                            a high bias towards action
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {recommendations.map((recommendation) => (
                    <div className="mb-4 md:mr-4 p-2" key={recommendation.name}>
                        <Recommendation
                            name={recommendation.name}
                            title={recommendation.title}
                            link={recommendation.link}
                            content={recommendation.content}
                        />
                    </div>
                ))}
            </div>
            <h2 className="my-8 text-3xl font-semibold tracking-tighter">
                Recent Articles
            </h2>
            <div className="my-8 card-preview">
                <BlogPostsSneakPeek />
            </div>
            {newApp ? <div>New App</div> : null}
        </section>
    );
}
