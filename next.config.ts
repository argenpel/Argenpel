import type { NextConfig } from "next";

import { categories } from "./src/data/categories";

const securityHeaders = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  agentRules: false,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // There is no products index; send it to the first category.
  async redirects() {
    return [
      {
        source: "/productos",
        destination: `/productos/${categories[0].slug}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
