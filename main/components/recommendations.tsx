import Recommendation from "./recommendation";

export const dynamic = "force-dynamic";

export default function Recommendations() {
    const allRecommendations = [
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
        {
            name: "Adam Jaffe Back",
            title: "Enginering Manager @ Routable",
            link: "https://www.linkedin.com/in/adamjaffeback",
            content: [
                "Jeffrey is a fantastic engineering manager who was entrusted with leading some of the biggest projects at Routable. His ability to become a subject matter expert in any domain is exemplary.",
                'What I love the most about Jeffrey, personally, is his ability to ask the "big questions" to ensure that the company is meeting their strategic objectives with our engineering resources.',
            ],
        },
        {
            name: "Linda Renard",
            title: "Director Engineering @ LINQ",
            link: "https://www.linkedin.com/in/lindalinsane",
            content: [
                "Jeffrey brings really detailed, thoughtful, and insightful observations and feedback and provides really strong options for resolving issues and moving things forward. He looks beyond the surface and is very aware of underlying and systemic impacts of situations.",
                "Jeffrey is definitely an engineering leader that I value and trust.",
            ],
        },
    ];

    const recommendations = allRecommendations
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return (
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
    );
}
