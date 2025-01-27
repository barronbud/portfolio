import { withVercelToolbar } from "@vercel/toolbar/plugins/next";

const nextConfig = {
    assetPrefix: "/demos/ledger",
    experimental: {
        serverActions: {
            allowedOrigins: [`${process.env.MAIN_ORIGIN}`],
        },
    },
    transpilePackages: ["@jeffreyabarron/portfolio-db"],
};

export default withVercelToolbar()(nextConfig);
