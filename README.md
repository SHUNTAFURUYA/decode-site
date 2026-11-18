# デコデ 会社サイト（作り直し）

**引き継ぐ人（とその Claude）は [docs/handoff/START_HERE.md](docs/handoff/START_HERE.md) から。**

Astro の静的書き出し。`npm install` → `npm run dev`（確認）/ `npm run build`（`dist/` に出力）。
- 文章と設定は `src/data/site.ts`、ページは `src/pages/`、見た目は `src/styles/global.css`
- `_ref/` は今の dcd.co.jp の写し（文章を移すときの元）
- 公開先・お問い合わせの送り先は未定。`Base.astro` の `noindex` は公開前に外す
