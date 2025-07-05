import { cn } from "@/lib/utils";

interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "full" | "narrow";
    padding?: "default" | "large" | "small" | "none";
}

export function PageContainer({
    children,
    className,
    size = "default",
    padding = "default",
}: PageContainerProps) {
    const sizeClasses = {
        default: "max-w-7xl mx-auto",
        full: "w-full",
        narrow: "max-w-4xl mx-auto",
    };

    const paddingClasses = {
        default: "px-4 lg:px-6 py-8",
        large: "px-4 lg:px-6 py-12",
        small: "px-4 lg:px-6 py-4",
        none: "",
    };

    return (
        <div
            className={cn(
                sizeClasses[size],
                paddingClasses[padding],
                className
            )}
        >
            {children}
        </div>
    );
}

// Specialized containers for common use cases
export function ArticleContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <PageContainer
            size="narrow"
            padding="default"
            className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}
        >
            {children}
        </PageContainer>
    );
}

export function SectionContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <PageContainer
            size="default"
            padding="large"
            className={cn("space-y-8", className)}
        >
            {children}
        </PageContainer>
    );
}
