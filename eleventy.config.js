import pluginWebc from "@11ty/eleventy-plugin-webc";
import { RenderPlugin } from "@11ty/eleventy";

export default function (config) {
  config.setInputDirectory("src");
  config.addPlugin(pluginWebc, {
    components: [
      "src/_includes/components/**/*.webc",
      "npm:@11ty/is-land/*.webc",
    ],
    useTransform: true,
  });
  config.addPlugin(RenderPlugin);
  config.addGlobalData("layout", "layouts/base");
  config.addPassthroughCopy("src/styles.css");
  config.addTransform("trim-whitespace", function (content) {
    const trimCommentsRegex =
      /\s*<!---*\s*trim-whitespace(?:="(?<count>\d+)")?\s*-*-->\s*/gim;

    return content.replaceAll(trimCommentsRegex, function (_match, countStr) {
      const count = +countStr;
      if (!isNaN(count)) {
        return " ".repeat(count);
      }
      return "";
    });
  });
}
