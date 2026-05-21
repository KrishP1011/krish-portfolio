/** Prefix for static assets when deployed to GitHub Pages (e.g. /krish-portfolio) */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
