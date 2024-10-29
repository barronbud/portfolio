/** @type {import('next').NextConfig} */
import { withVercelToolbar } from "@vercel/toolbar/plugins/next";

const nextConfig = {
    assetPrefix: "/demos",
};

export default withVercelToolbar()(nextConfig);
