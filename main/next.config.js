const nextConfig = {
    transpilePackages: ["react-social-icons", "next-mdx-remote"],
};

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

module.exports = withVercelToolbar(nextConfig);
