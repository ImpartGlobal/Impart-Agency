/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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

module.exports = nextConfig;
