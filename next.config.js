/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
