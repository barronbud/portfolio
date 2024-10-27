import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { VercelToolbar } from "@vercel/toolbar/next";
import AnalyticsWrapper from "./components/analytics";

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

const cx = (...classes) => classes.filter(Boolean).join(" ");

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
                "text-black bg-white dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                    <Footer />
                    <AnalyticsWrapper />
                    <SpeedInsights />
                    {shouldInjectToolbar && <VercelToolbar />}
                </main>
            </body>
        </html>
    );
}
