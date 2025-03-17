import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = "https://electricalstaticwebsite.netlify.app"; // Change this to your actual domain

    const pages = [
        { loc: "/", priority: "1.0" },
        { loc: "/about/who_we_are", priority: "0.8" },
        { loc: "/about/careers", priority: "0.8" },
        { loc: "/about/partners", priority: "0.8" },
        { loc: "/engineering_design_services/hardware", priority: "0.8" },
        { loc: "/engineering_design_services/firmware", priority: "0.8" },
        { loc: "/engineering_design_services/software", priority: "0.8" },
        { loc: "/engineering_design_services/mechanical", priority: "0.8" },
        { loc: "/electronic_design/pcb_design_service", priority: "0.8" },
        { loc: "/electronic_design/pcb_layout", priority: "0.8" },
        { loc: "/electronic_design/analysis", priority: "0.8" },
        { loc: "/electronic_design/reverse_engineering", priority: "0.8" },
        { loc: "/electronic_design/design_modification_service", priority: "0.8" },
        { loc: "/electronic_design/design_for_manufacturability", priority: "0.8" },
        { loc: "/manufacturing/pcba", priority: "0.8" },
        { loc: "/manufacturing/test_fixture", priority: "0.8" },
        { loc: "/manufacturing/box_build", priority: "0.8" },
        { loc: "/iot", priority: "0.8" },
        { loc: "/resources/blogs", priority: "0.8" },
        { loc: "/resources/news", priority: "0.8" },
        { loc: "/case-study", priority: "0.8" },
        { loc: "/contact-us", priority: "0.8" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `
    <url>
        <loc>${baseUrl}${page.loc}</loc>
        <priority>${page.priority}</priority>
    </url>`).join("")}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
