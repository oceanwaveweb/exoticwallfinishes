/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/atelier',
        destination: '/studio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
