<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>Sitemap</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 40px;
                    background-color: #f9f9f9;
                    color: #333;
                }
                h2 {
                    text-align: center;
                    color: #2c3e50;
                }
                table { 
                    width: 100%; 
                    border-collapse: collapse; 
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                th, td { 
                    padding: 12px 15px; 
                    text-align: left;
                    border-bottom: 1px solid #ddd; 
                }
                th {
                    background-color: #2c3e50;
                    color: white;
                    text-transform: uppercase;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }
                a {
                    color: #3498db;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h2>Website Sitemap</h2>
            <table>
                <tr><th>URL</th></tr>
                <xsl:for-each select="urlset/url">
                    <tr><td><a href="{loc}" target="_blank"><xsl:value-of select="loc"/></a></td></tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
