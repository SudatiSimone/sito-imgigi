/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/sito-imgigi', 
  trailingSlash: true,     
};

module.exports = nextConfig;
