const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.sunkeydesignsystems.com"; 

const pages = [
    "/",
    "/about/who-we-are",
    "/about/careers",
    "/about/partners",
    "/engineering-design-services/hardware",
    "/engineering-design-services/firmware",
    "/engineering-design-services/software",
    "/engineering-design-services/mechanical",
    "/electronic-design/pcb-design-service",
    "/electronic-design/pcb-layout",
    "/electronic-design/analysis",
    "/electronic-design/reverse-engineering",
    "/electronic-design/design-modification-service",
    "/electronic-design/design-for-manufacturability",
    "/manufacturing/pcba",
    "/manufacturing/test-fixture",
    "/manufacturing/box-build",
    "/iot",
    "/resources/blogs",
    "/resources/news",
    "/case-study",
    "/contact-us",
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
        <loc>${baseUrl}${page}</loc>
        <priority>0.8</priority>
    </url>`
      )
      .join("")}
</urlset>`;

const sitemapPath = path.join(__dirname, "../public/sitemap.xml");

fs.writeFileSync(sitemapPath, sitemapContent);

console.log("✅ Sitemap generated at: /public/sitemap.xml");