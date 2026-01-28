import WebcPlugin from "@11ty/eleventy-plugin-webc";
import { minify } from "html-minifier-next";

export default function (config) {
  config.setInputDirectory("src/ghost");
  config.setIncludesDirectory("../_includes");
  config.setOutputDirectory("_theme");
  config.addPassthroughCopy({ "src/ghost/package.json": "package.json" });

  config.addPlugin(WebcPlugin, {
    components: [
      "src/_includes/components/**/*.webc",
    ],
  });

  config.addGlobalData("layout", "ghost");
  config.addGlobalData("permalink", "'/' + page.filePathStem + '.hbs'");
  config.addGlobalData("ghost", true);
  config.addGlobalData("title", "{{meta_title}}");
  config.addGlobalData("site", "NexSpring Software Journal");
}
