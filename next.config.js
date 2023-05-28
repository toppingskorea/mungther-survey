/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://34.64.104.252:8080/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
