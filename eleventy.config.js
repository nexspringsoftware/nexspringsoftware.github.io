import WebcPlugin from "@11ty/eleventy-plugin-webc";
import { minify } from "html-minifier-next";

export default function (config) {
  config.setInputDirectory("src");
  config.ignores.add("src/ghost/**");

  config.addPlugin(WebcPlugin, {
    components: [
      "src/_includes/components/**/*.webc",
    ],
  });

  config.addGlobalData("layout", "default");
  config.addGlobalData("title", "NexSpring Software");
  config.addGlobalData("site", "NexSpring Software");
}
