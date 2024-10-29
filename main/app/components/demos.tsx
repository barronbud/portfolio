import Image from "next/image";
import { ExternalButton } from "./buttons";

export default function Demo({
    href,
    title,
    description,
    image,
    techStack,
    features,
}: {
    href: string;
    title: string;
    description: string;
    image?: string;
    techStack: string[];
    features: {
        current: string[];
        upcoming: string[];
    };
}) {
    return (
        <div
            className="mb-4 md:mr-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key="demos"
        >
            <a href={href}>
                <h3 className="text-3xl text-gray-500 capitalize">Demo</h3>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            <div className="flex flex-row mb-4">
                <div>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={1308}
                            height={816}
                            className="rounded-lg max-w-[400px]"
                        />
                    )}
                </div>
                <div className="text-left mx-4">
                    <p className="mb-3 font-normal">{description}</p>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="font-medium text-lg mt-4">
                                Key Features
                            </p>
                            <ul className="list-disc list-inside">
                                {features.current.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="font-medium text-lg mt-4">
                                Upcoming Features
                            </p>
                            <ul className="list-disc list-inside">
                                {features.upcoming.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-lg mt-4">Tech Stack</p>
                        <ul className="flex flex-row">
                            {techStack.map((tech) => (
                                <li key={tech} className="mx-4">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <ExternalButton href={href}>View Demo</ExternalButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
