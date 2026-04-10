import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "impartagency.co.za",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/get-to-know-us",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/get-to-know-us",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
