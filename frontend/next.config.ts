import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.thenounproject.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
