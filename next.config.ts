import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/**"),
    ],
  },
};

export default nextConfig;
