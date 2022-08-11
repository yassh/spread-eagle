/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.js", "page.jsx", "page.ts", "page.tsx"],
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
