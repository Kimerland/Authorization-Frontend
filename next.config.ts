import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  matcher: ["/profile/:path*", "/login", "/register"],
};

export default nextConfig;
