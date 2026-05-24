/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // TODO: GitHub Pages basePath.
  // If deploying to a PROJECT page at https://<username>.github.io/<repo-name>/,
  // set basePath: '/<repo-name>' and assetPrefix: '/<repo-name>/' below.
  // If deploying to a USER page at https://<username>.github.io/, leave these
  // commented out.
  // basePath: '/<repo-name>',
  // assetPrefix: '/<repo-name>/',
};

module.exports = nextConfig;
