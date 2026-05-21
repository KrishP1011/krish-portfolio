/** Prefix for static assets when deployed to GitHub Pages (e.g. /krish-portfolio) */
function getBasePath() {
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
        return process.env.NEXT_PUBLIC_BASE_PATH;
    }
    if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
        const segment = window.location.pathname.split("/").filter(Boolean)[0];
        return segment ? `/${segment}` : "";
    }
    return "";
}

export function assetPath(path) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${getBasePath()}${normalized}`;
}
