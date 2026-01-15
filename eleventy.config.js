import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (config) {
  config.setInputDirectory("src");
  config.addPlugin(pluginWebc, {
    components: [
      "src/_includes/components/**/*.webc",
      "npm:@11ty/is-land/*.webc",
    ],
  });
	config.ignores.add("src/ghost/**");
}
