/** @type {import('next').NextConfig} */
import { withVercelToolbar } from "@vercel/toolbar/plugins/next";

const nextConfig = {
    assetPrefix: "/demos",
    experimental: {
        serverActions: {
            allowedOrigins: [`${process.env.MAIN_ORIGIN}`],
        },
    },
    transpilePackages: ["@jeffreyabarron/portfolio-db"],
};

export default withVercelToolbar()(nextConfig);
