import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. The home directory contains an
  // unrelated package-lock.json, which would otherwise be inferred as root.
  turbopack: {
    root: import.meta.dirname,
  },
  // The per-service detail pages were collapsed into anchored sections on
  // /services. Redirect the old URLs to their section so existing/indexed
  // links don't break.
  async redirects() {
    return [
      {
        source: "/services/ai-business-enablement",
        destination: "/services#ai-business-enablement",
        permanent: true,
      },
      {
        source: "/services/ai-receptionist",
        destination: "/services#ai-receptionist",
        permanent: true,
      },
      {
        source: "/services/ads-booking-system",
        destination: "/services#ads-booking-system",
        permanent: true,
      },
      {
        source: "/services/local-visibility",
        destination: "/services#local-visibility",
        permanent: true,
      },
      {
        source: "/services/full-growth-system",
        destination: "/services#full-growth-system",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
