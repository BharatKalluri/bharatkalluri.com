const BASE_URL = "https://bharatkalluri.com";

const fs = require("fs");

const globby = require("globby");

(async () => {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        "pages/**/*{.js,.mdx}",
        "!pages/_*.js",
        "!pages/api",
    ]);

    const sitemapList = pages
        .map((page) => {
            const path = page
                .replace("pages", "")
                .replace(".js", "")
                .replace(".mdx", "");
            const route = path === "/index" ? "" : path;
            return `<url><loc>${BASE_URL}${route}</loc></url>`;
        })
        .join("");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapList}</urlset>`;
    fs.writeFileSync("public/sitemap.xml", sitemap);
})();
