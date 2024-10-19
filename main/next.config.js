const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/demos/order-management-system",
                destination: `${process.env.OMS_DOMAIN}/`,
            },
            {
                source: "/demos/order-management-system/:path+",
                destination: `${process.env.OMS_DOMAIN}/:path+`,
            },
            {
                source: "/demos/_next/:path+",
                destination: `${process.env.OMS_DOMAIN}/demos/_next/:path+`,
            },
        ];
    },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
