import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Color theme system for consistent styling across components
export type ColorVariant =
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "red"
    | "yellow";

export interface ColorClasses {
    icon: string;
    bg: string;
    border: string;
    dot: string;
    button: string;
}

// Simplified color definitions using template literals to ensure Tailwind detection
// All classes are explicitly listed here so Tailwind's purge scanner can find them
export const COLOR_VARIANTS = {
    blue: {
        icon: `text-blue-600 dark:text-blue-400`,
        bg: `bg-blue-50 dark:bg-blue-900/20`,
        border: `border-blue-200 dark:border-blue-800`,
        dot: `bg-blue-600`,
        button: `bg-blue-600 hover:bg-blue-700`,
    },
    green: {
        icon: `text-green-600 dark:text-green-400`,
        bg: `bg-green-50 dark:bg-green-900/20`,
        border: `border-green-200 dark:border-green-800`,
        dot: `bg-green-600`,
        button: `bg-green-600 hover:bg-green-700`,
    },
    purple: {
        icon: `text-purple-600 dark:text-purple-400`,
        bg: `bg-purple-50 dark:bg-purple-900/20`,
        border: `border-purple-200 dark:border-purple-800`,
        dot: `bg-purple-600`,
        button: `bg-purple-600 hover:bg-purple-700`,
    },
    orange: {
        icon: `text-orange-600 dark:text-orange-400`,
        bg: `bg-orange-50 dark:bg-orange-900/20`,
        border: `border-orange-200 dark:border-orange-800`,
        dot: `bg-orange-600`,
        button: `bg-orange-600 hover:bg-orange-700`,
    },
    red: {
        icon: `text-red-600 dark:text-red-400`,
        bg: `bg-red-50 dark:bg-red-900/20`,
        border: `border-red-200 dark:border-red-800`,
        dot: `bg-red-600`,
        button: `bg-red-600 hover:bg-red-700`,
    },
    yellow: {
        icon: `text-yellow-600 dark:text-yellow-400`,
        bg: `bg-yellow-50 dark:bg-yellow-900/20`,
        border: `border-yellow-200 dark:border-yellow-800`,
        dot: `bg-yellow-600`,
        button: `bg-yellow-600 hover:bg-yellow-700`,
    },
};

export function getColorClasses(color: ColorVariant): ColorClasses {
    return COLOR_VARIANTS[color] || COLOR_VARIANTS.blue;
}
