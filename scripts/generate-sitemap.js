const fs = require("fs");
const path = require("path");

const baseUrl = "https://electricalstaticwebsite.netlify.app"; 
// const baseUrl = "http://localhost:3000"; 

const pages = [
    "/",
    "/about/who_we_are",
    "/about/careers",
    "/about/partners",
    "/engineering_design_services/hardware",
    "/engineering_design_services/firmware",
    "/engineering_design_services/software",
    "/engineering_design_services/mechanical",
    "/electronic_design/pcb_design_service",
    "/electronic_design/pcb_layout",
    "/electronic_design/analysis",
    "/electronic_design/reverse_engineering",
    "/electronic_design/design_modification_service",
    "/electronic_design/design_for_manufacturability",
    "/manufacturing/pcba",
    "/manufacturing/test_fixture",
    "/manufacturing/box_build",
    "/iot",
    "/resources/blogs",
    "/resources/news",
    "/case-study",
    "/contact-us",
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
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