const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/demos",
                destination: `${process.env.DEMO_DOMAIN}/demos`,
            },
            {
                source: "/demos/:path+",
                destination: `${process.env.DEMO_DOMAIN}/demos/:path+`,
            },
        ];
    },
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
