/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','wembleypark.com'],
  },
};

export default nextConfig;
