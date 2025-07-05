import Link from "next/link";
import { ArrowRight, ExternalLink, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

// Base button component with consistent styling
interface BaseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    children: React.ReactNode;
}

const getButtonClasses = (
    variant: string = "default",
    size: string = "default"
) => {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    const variants = {
        default:
            "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
        outline:
            "border-2 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg hover:shadow-xl",
        secondary:
            "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400",
        link: "text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline",
    };

    const sizes = {
        default: "px-4 py-2 text-sm",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-8 py-4 text-base",
        icon: "h-9 w-9",
    };

    return cn(
        baseClasses,
        variants[variant as keyof typeof variants],
        sizes[size as keyof typeof sizes]
    );
};

export function Button({
    variant = "default",
    size = "default",
    className,
    children,
    ...props
}: BaseButtonProps) {
    return (
        <button
            className={cn(getButtonClasses(variant, size), className)}
            {...props}
        >
            {children}
        </button>
    );
}

// Internal link button
interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    showIcon?: boolean;
}

export default function InternalButton({
    href,
    children,
    variant = "default",
    size = "sm",
    className,
    showIcon = true,
}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={cn(getButtonClasses(variant, size), className)}
        >
            {children}
            {showIcon && <ArrowRight className="w-4 h-4" />}
        </Link>
    );
}

export function ExternalButton({
    href,
    children,
    variant = "default",
    size = "sm",
    className,
    showIcon = true,
}: ButtonLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(getButtonClasses(variant, size), className)}
        >
            {children}
            {showIcon && <ExternalLink className="w-4 h-4" />}
        </a>
    );
}

// Specialized button for resume downloads
export function ResumeButton({
    variant = "default",
    size = "default",
    className,
    children = "Resume",
}: {
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(getButtonClasses(variant, size), className)}
        >
            <Download className="w-4 h-4" />
            {children}
        </a>
    );
}
