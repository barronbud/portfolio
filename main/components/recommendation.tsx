import { SocialIcon } from "react-social-icons";

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
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 28 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.66 20C20.64 20 19.7 19.42 19.26 18.52L16.42 12.84C16.14 12.28 16 11.68 16 11.06V2C16 0.9 16.9 0 18 0H26C27.1 0 28 0.9 28 2V10C28 11.1 27.1 12 26 12H22L24.06 16.12C24.96 17.9 23.66 20 21.66 20ZM5.66 20C4.64 20 3.7 19.42 3.26 18.52L0.42 12.84C0.139999 12.28 0 11.68 0 11.06V2C0 0.9 0.9 0 2 0H10C11.1 0 12 0.9 12 2V10C12 11.1 11.1 12 10 12H6L8.06 16.12C8.96 17.9 7.66 20 5.66 20Z"
                            fill="currentColor"
                        ></path>
                    </svg>
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
