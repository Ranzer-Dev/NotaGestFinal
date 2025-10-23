/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/api/micro/:path*',
        destination: 'http://localhost:5001/:path*',
      },
      {
        source: '/api/notagest/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ]
  },
}

module.exports = nextConfig