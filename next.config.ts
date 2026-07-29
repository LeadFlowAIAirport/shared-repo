import type { NextConfig } from "next";

// Browser security headers. Applied two ways so EVERY response is covered on
// Netlify: `headers()` below covers Next.js-rendered routes (the pages), and an
// identical set in `public/_headers` covers statically-served files (the
// /demos/*.html bundles). `_headers` alone does NOT cover Next-rendered pages,
// so both are required. Keep the two lists in sync.
// CSP is Report-Only: it observes/logs but blocks nothing, so it cannot break
// the demos, videos, or fonts. X-Frame-Options is SAMEORIGIN (not DENY) because
// the site iframes its own same-origin /demos/*.html and video pages.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  {
    key: "Content-Security-Policy-Report-Only",
    value:
      "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; frame-src 'self'; form-action 'self' mailto:; img-src 'self' data: blob:; media-src 'self' blob:; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; worker-src 'self' blob:; connect-src 'self' blob:",
  },
];

const nextConfig: NextConfig = {
  // Drop the `X-Powered-By: Next.js` response header — minor stack-fingerprint
  // hardening.
  poweredByHeader: false,
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
  // Apply the security headers to every Next.js-rendered route. (Static files
  // under public/, e.g. the demo bundles, are covered by public/_headers.)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
