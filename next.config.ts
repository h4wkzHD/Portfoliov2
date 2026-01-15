import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
   eslint: {
    ignoreDuringBuilds: true, // ⚠️ Ajoute cette ligne
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Ajoute celle-ci aussi
  },
};

export default nextConfig;
