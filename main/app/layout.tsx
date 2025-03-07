import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";
import { VercelToolbar } from "@vercel/toolbar/next";
import AnalyticsWrapper from "@/components/analytics";
import { PostHogProvider } from "./providers";
import PostHogPageView from "@/app/PostHogPageView";
import { Suspense } from "react";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Portfolio | Jeffrey Barron",
        template: "%s | Portfolio | Jeffrey Barron",
    },
    description:
        "Engineering Leader • Software Engineer • I empower engineering teams to solve hard problems.",
    openGraph: {
        title: "Jeffrey Barron's Portfolio",
        description:
            "I'm an engineering leader specializing in building, growing, and empowering full-stack teams.",
        url: baseUrl,
        siteName: "Jeffrey Barron's Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${baseUrl}/images/profile-pic.png`,
                alt: "Jeffrey Barron's Profile Picture",
            },
        ],
    },
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const shouldInjectToolbar = process.env.NODE_ENV === "development";
    return (
        <html
            lang="en"
            className={cx(
                "dark text-black bg-slate-200 dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <PostHogProvider>
                <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto px-4 bg-slate-200 dark:bg-black">
                    <Suspense>
                        <PostHogPageView />
                    </Suspense>
                    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                        <Navbar />
                        {children}
                        <Footer />
                        <AnalyticsWrapper />
                        <SpeedInsights />
                        {shouldInjectToolbar && <VercelToolbar />}
                    </main>
                </body>
            </PostHogProvider>
        </html>
    );
}
