"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previous = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            next();
        }, 8000);
    }, [currentIndex]);

    return (
        <div className="flex items-center justify-center mb-8 z-10 relative">
            <button
                className="p-4 mr-6 bg-blue-500 text-white rounded-lg"
                onClick={previous}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="text-center w-full">{children[currentIndex]}</div>
            <button
                className="p-4 ml-6 bg-blue-500 text-white rounded-lg"
                onClick={next}
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
}
