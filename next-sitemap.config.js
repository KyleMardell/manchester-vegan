/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://manchesterveganguide.com",
    output: "export",
    sourceDir: ".next",
    autoLastmod: false,
    trailingSlash: false,
    generateRobotsTxt: true, // will automatically generate robots.txt
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,
    transform: async (config, path) => ({
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        trailingSlash: path === "/",
    }),
};
