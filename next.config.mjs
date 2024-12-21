/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/resume-builder' : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume-builder' : '',
  reactStrictMode: true,
  experimental: {
    // This will make Next.js render everything on client side
    appDir: true,
  }
}

export default nextConfig 