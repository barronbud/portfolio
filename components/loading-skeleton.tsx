interface LoadingSkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular' | 'card';
    width?: string | number;
    height?: string | number;
    lines?: number;
}

export function LoadingSkeleton({
    className = '',
    variant = 'rectangular',
    width = '100%',
    height = '1rem',
    lines = 1
}: LoadingSkeletonProps) {
    const baseClasses = 'skeleton animate-pulse bg-gray-200 dark:bg-gray-700';

    if (variant === 'text') {
        return (
            <div className={`space-y-2 ${className}`}>
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={`${baseClasses} h-4 rounded`}
                        style={{
                            width: index === lines - 1 ? '75%' : '100%'
                        }}
                    />
                ))}
            </div>
        );
    }

    if (variant === 'circular') {
        return (
            <div
                className={`${baseClasses} rounded-full ${className}`}
                style={{ width, height }}
            />
        );
    }

    if (variant === 'card') {
        return (
            <div className={`${baseClasses} rounded-lg p-6 ${className}`}>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="skeleton w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div className="space-y-2 flex-1">
                        <div className="skeleton h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                        <div className="skeleton h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="skeleton h-3 bg-gray-300 dark:bg-gray-600 rounded" />
                    <div className="skeleton h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
                    <div className="skeleton h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
                </div>
            </div>
        );
    }

    return (
        <div
            className={`${baseClasses} rounded ${className}`}
            style={{ width, height }}
        />
    );
}

export function LoadingSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <div className="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400" />
        </div>
    );
}

export function LoadingDots({ className = '' }: { className?: string }) {
    return (
        <div className={`flex space-x-1 ${className}`}>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
    );
}

export function PageLoadingSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-8 space-y-16">
            {/* Hero Section Skeleton */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    <LoadingSkeleton variant="circular" width="240px" height="240px" />
                    <div className="flex-1 space-y-6">
                        <LoadingSkeleton variant="text" lines={2} className="max-w-md" />
                        <LoadingSkeleton variant="text" lines={3} className="max-w-lg" />
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <LoadingSkeleton key={i} variant="card" className="h-20" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section Skeleton */}
            <div className="space-y-8">
                <LoadingSkeleton variant="text" lines={2} className="max-w-md mx-auto text-center" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <LoadingSkeleton key={i} variant="card" className="h-64" />
                    ))}
                </div>
            </div>

            {/* Case Studies Skeleton */}
            <div className="space-y-16">
                <LoadingSkeleton variant="text" lines={2} className="max-w-md mx-auto text-center" />
                {Array.from({ length: 3 }).map((_, i) => (
                    <LoadingSkeleton key={i} variant="card" className="h-96" />
                ))}
            </div>
        </div>
    );
}
