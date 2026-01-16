import WebcPlugin from "@11ty/eleventy-plugin-webc";
import { minify } from "html-minifier-next";

export default function (config) {
  config.setInputDirectory("src/ghost");
	config.setIncludesDirectory("../_includes");
  config.addPlugin(WebcPlugin, {
    components: [
      "src/_includes/components/**/*.webc",
    ],
  });
  config.addTransform("htmlmin", async function (content) {
		const name = this.page.outputPath || "";
    if (name.endsWith(".html") || name.endsWith(".hbs")) {
      content = await minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				ignoreCustomFragments: [
					/{{[{]?(.*?)[}]?}}/g
				]
      });
    }
    return content;
  });
	config.setOutputDirectory("_theme");
	config.addPassthroughCopy({ "src/ghost/package.json": "package.json" })
}
