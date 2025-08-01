import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Jeffrey Barron | Engineering Leader & Technical Executive",
        template: "%s | Jeffrey Barron",
    },
    description:
        "Engineering Leader with 10+ years in software development and 3+ years leading remote full-stack teams. Proven track record of increasing team velocity by 150% and delivering scalable solutions using Node, React, Python, and TypeScript.",
    openGraph: {
        title: "Jeffrey Barron | Engineering Leader & Technical Executive",
        description:
            "Engineering Leader with 10+ years in software development and 3+ years leading remote full-stack teams across fin-tech, edu-tech, and e-commerce.",
        url: baseUrl,
        siteName: "Jeffrey Barron | Engineering Leader",
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(
                "dark text-black bg-gray-50 dark:text-white dark:bg-gray-900",
                inter.variable
            )}
        >
            <body className="antialiased bg-gray-50 dark:bg-gray-900">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 lg:px-6">
                    <div className="pt-8">{children}</div>
                    <Footer />
                </main>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
