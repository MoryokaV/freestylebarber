/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: './',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
