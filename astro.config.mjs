import { defineConfig } from "astro/config";
import chooseTechIntegration from "@choose-tech/astro";

export default defineConfig({
  integrations: [
    chooseTechIntegration({
      base: "/javascript-libraries",
      title: "JS Libraries",
      description: "Easily compare various JS/TS libraries from the community.",
      color: "#F7DF1E",
      repo: "choose-tech/javascript-libraries",
      logoFilename: "logo.svg",
    }),
  ],
});
