/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/product",
        destination: "/apps/harmoneaz",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
