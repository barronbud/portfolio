import { SocialIcon } from "react-social-icons";
import { MessageSquareQuote } from "lucide-react";

interface Recommended {
    content: string[];
    name: string;
    title: string;
    link: string;
}

export default function Recommendation({ content, name, title, link }: Recommended) {
    return (
        <div className="flex flex-col w-full p-4">
            <div className="mb-4">
                <MessageSquareQuote className="w-6 h-6 text-gray-400 dark:text-gray-500" />
            </div>
            {content.map((para, i) => (
                <p className="font-normal py-2.5 text-gray-900 dark:text-white leading-relaxed" key={`paragraph${i}`}>
                    {para}
                </p>
            ))}

            <div className="flex flex-col mt-4">
                <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    {name}
                    <SocialIcon
                        url={link}
                        target="_blank"
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </span>

                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{title}</span>
            </div>
        </div>
    );
}
