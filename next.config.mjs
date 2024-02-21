/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kanbox.vn',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
