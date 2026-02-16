import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',  // Disabled to enable API routes
  // distDir: 'out',
  images: {
    unoptimized: true,
  },
  reactCompiler: true
};

export default nextConfig;
