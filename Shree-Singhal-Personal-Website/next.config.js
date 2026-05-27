/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Deploying to user site https://shreesinghal.github.io/ — no basePath needed.
};

module.exports = nextConfig;
