import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export für maximale Performance
  images: {
    unoptimized: true, // Erforderlich für static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
