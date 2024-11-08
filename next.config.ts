import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
        hostname: 'static.noroff.dev'
    }]
},
};

export default nextConfig;
