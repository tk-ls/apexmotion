import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the whole site prerenders to plain HTML in `out/`,
  // deployable to any static host (Cloudflare Pages, GitLab Pages, etc.)
  output: "export",
};

export default nextConfig;
