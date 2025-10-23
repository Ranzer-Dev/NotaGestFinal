/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Adicione esta seção 'rewrites'
  async rewrites() {
    return [
      {
        source: '/api/micro/:path*',
        destination: 'http://localhost:5001/:path*', // Proxy para seu microserviço
      },
      {
        source: '/api/notagest/:path*',
        destination: 'http://localhost:5000/:path*', // Proxy para o notagesexpress
      },
    ]
  },
}

module.exports = nextConfig