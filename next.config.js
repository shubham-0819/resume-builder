/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}

module.exports = nextConfig 