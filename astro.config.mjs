import { defineConfig } from "astro/config";

// 静的書き出し（dist/）。公開先が決まったら site を設定する
export default defineConfig({
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
