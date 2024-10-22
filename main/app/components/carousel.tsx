"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Carousel({ items, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            goToNext();
        }, 10000);
    }, [currentIndex]);

    return (
        <div className="flex items-center justify-center mb-8 z-10 relative">
            <button
                className="p-4 mr-6 bg-blue-500 text-white rounded-lg"
                onClick={goToPrevious}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="text-center w-full">{items[currentIndex]}</div>
            <button
                className="p-4 ml-6 bg-blue-500 text-white rounded-lg"
                onClick={goToNext}
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
}
