const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // Automatisches Prefix für Project Pages: /<repo>/, für User Pages: /
    const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
    const isUserSite = repo && repo.toLowerCase() === `${(owner||"").toLowerCase()}.github.io`;
    const pathPrefix = isUserSite ? "/" : repo ? `/${repo}/` : "/";
    return {
        dir: { input: "src", includes: "_includes", output: "_site" },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        pathPrefix
    };
};

