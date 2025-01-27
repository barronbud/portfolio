"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import posthog from "posthog-js";
// import { PostHogProvider as CorePostHogProvider } from "posthog-js/react";
import { useState } from "react";

export const ReactQueryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

// export function PostHogProvider({ children }: { children: React.ReactNode }) {
//     useEffect(() => {
//         if (
//             process.env.NEXT_PUBLIC_POSTHOG_KEY &&
//             process.env.NEXT_PUBLIC_POSTHOG_HOST
//         ) {
//             posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//                 api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//                 person_profiles: "identified_only",
//                 capture_pageview: false, // Disable automatic pageview capture, as we capture manually
//                 capture_pageleave: true,
//             });
//         }
//     }, []);

//     return (
//         <CorePostHogProvider client={posthog}>{children}</CorePostHogProvider>
//     );
// }
