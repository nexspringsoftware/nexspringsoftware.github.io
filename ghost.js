import WebcPlugin from "@11ty/eleventy-plugin-webc";

export default function (config) {
  config.setInputDirectory("src/ghost");
	config.setIncludesDirectory("../_includes");
  config.addPlugin(WebcPlugin, {
    components: [
      "src/_includes/components/**/*.webc",
      "npm:@11ty/is-land/*.webc",
    ],
  });
	config.setOutputDirectory("_theme");
	config.addPassthroughCopy({ "src/ghost/package.json": "package.json" })
}
