const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/demos/_next/:path+",
                destination: `${process.env.OMS_DOMAIN}/_next/:path+`,
            },
            {
                source: "/demos/order-management-system",
                destination: `${process.env.OMS_DOMAIN}/`,
            },
            {
                source: "/demos/order-management-system/:path+",
                destination: `${process.env.OMS_DOMAIN}/:path+`,
            },
        ];
    },
    transpilePackages: ["react-social-icons", "next-mdx-remote"],
    experimental: {
        serverActions: {
            allowedOrigins: [`${process.env.OMS_ORIGIN}`],
        },
    },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
