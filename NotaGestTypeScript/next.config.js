/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'http://localhost:5001/api/auth/:path*',
      },
      {
        source: '/api/users/:path*',
        destination: 'http://localhost:5000/api/users/:path*',
      },
    ]
  },
}

module.exports = nextConfig