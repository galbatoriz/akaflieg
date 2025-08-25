const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // Pfadpräfix für GitHub Pages korrekt bestimmen
    const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
    const isUserSite = repo && repo.toLowerCase() === `${(owner || "").toLowerCase()}.github.io`;
    const pathPrefix = process.env.PATH_PREFIX || (isUserSite ? "/" : repo ? `/${repo}/` : "/");

    return {
        dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        pathPrefix
    };
};
