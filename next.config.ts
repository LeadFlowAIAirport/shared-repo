import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. The home directory contains an
  // unrelated package-lock.json, which would otherwise be inferred as root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
