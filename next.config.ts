import type { NextConfig } from "next";

// GitHub Pages sirve el sitio en /<nombre-del-repo>. En local se usa la raíz.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "football-universe";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
