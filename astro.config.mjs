import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repository.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS === "true" && repository && !isUserSite
  ? `/${repository}`
  : "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://irwingss.github.io",
  base,
  trailingSlash: "always"
});
