import { SocialIcon } from "react-social-icons";
import { MessageSquareQuote } from "lucide-react";

interface Recommended {
    content: string[];
    name: string;
    title: string;
    link: string;
}

export default function Recommendation({
    content,
    name,
    title,
    link,
}: Recommended) {
    return (
        <div className="flex items-start gap-2.5">
            <div className="flex flex-col w-full leading-1.5 p-4 border-gray-500 border rounded-e-xl rounded-es-xl">
                <div className="w-4">
                    <MessageSquareQuote className="w-6 h-6 text-gray-400" />
                </div>
                {content.map((para, i) => (
                    <p
                        className="font-normal py-2.5 text-gray-900 dark:text-white"
                        key={`paragraph${i}`}
                    >
                        {para}
                    </p>
                ))}

                <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {name}
                        <SocialIcon
                            url={link}
                            target="_blank"
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 5,
                            }}
                        />
                    </span>

                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    );
}
