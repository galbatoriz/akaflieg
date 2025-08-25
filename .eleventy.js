const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    return {
        dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid"
    };
};
