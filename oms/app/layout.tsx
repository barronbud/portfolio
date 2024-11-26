import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode, Suspense } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactQueryProvider, PostHogProvider } from "@/lib/providers";
import { Toaster } from "@/components/ui/toaster";
import PostHogPageView from "@/app/PostHogPageView";

export const metadata: Metadata = {
    title: {
        default: "Portfolio | Jeffrey Barron",
        template: "%s | Portfolio | Jeffrey Barron",
    },
    description:
        "Engineering Leader • Software Engineer • I empower engineering teams to solve hard problems.",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: { children: ReactNode }) {
    const shouldInjectToolbar = process.env.NODE_ENV === "development";
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-slate-100 dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <PostHogProvider>
                <ReactQueryProvider>
                    <body className="antialiased mx-4 mt-8">
                        <Suspense>
                            <PostHogPageView />
                        </Suspense>
                        <SidebarProvider defaultOpen={true}>
                            <AppSidebar />
                            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                                {children}
                                <Analytics />
                                <SpeedInsights />
                                {shouldInjectToolbar && <VercelToolbar />}
                            </main>
                            <Toaster />
                        </SidebarProvider>
                    </body>
                </ReactQueryProvider>
            </PostHogProvider>
        </html>
    );
}
