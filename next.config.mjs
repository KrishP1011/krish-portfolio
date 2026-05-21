/** @type {import('next').NextConfig} */

// GitHub Pages project site: https://krishp1011.github.io/krish-portfolio/
const repoName = "krish-portfolio";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig = {
    output: "export",
    basePath,
    assetPrefix: isProd ? `/${repoName}/` : undefined,
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
