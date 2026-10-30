# Evidence UI

A small, monochrome component kit for pages that make a case with numbers: customer reports, proposals, benchmarks and pricing calculators. The reader sees the answer first and can check the proof second.

- **Tokens** for light and dark themes: 64 colors, 12 text styles, spacing, radius. Available as JSON, CSS variables and a Figma Tokens Studio file.
- **15 React components:** ReportShell, Masthead, Footer, Opening, Band, StatStrip, BarList, DataTable, Chart, Comparison, Note, Sources, Button, Field, Calculator.
- **Guidelines** written for designers and for AI coding assistants.
- **Geist and Geist Mono** fonts bundled under the SIL Open Font License.

**Live example:** https://yusen-dev.github.io/evidence-ui/examples/ is a complete sample report built from every component. Source: [`examples/index.html`](examples/index.html).

> Evidence UI is an independent project and is not affiliated with Vercel. See [NOTICE.md](NOTICE.md).

## Repository layout

| Path | What |
| --- | --- |
| `tokens/tokens.json` | Source of truth for every token, with a usage note on each |
| `tokens/tokens.css` | CSS custom properties (`--ev-*`), light and dark, plus `@font-face` rules |
| `tokens/figma-tokens-studio.json` | Import into Figma with the Tokens Studio plugin |
| `tokens/colors.md` | Every color as hex, light and dark |
| `dist/evidence-ui.js` | Components as one script that sets `window.EvidenceUI` |
| `dist/evidence-ui.css` | Component styles |
| `dist/index.d.ts` | TypeScript types for all component props |
| `docs/guidelines.md` | How to write, color, type and lay out a page |
| `docs/components.md` | What each component is for and its props |
| `fonts/` | Geist variable fonts and their license |
| `examples/index.html` | Full sample report |

## Use in a web page

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="dist/evidence-ui.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="dist/evidence-ui.js"></script>

<div id="root"></div>
<script>
  const E = window.EvidenceUI, h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h(E.ReportShell, { meta: ['For Northwind Logistics', 'Q3 2026'] },
      h(E.Opening, {
        claim: 'Checkout pages now load in under a second',
        proof: h(E.StatStrip, { stats: [{ label: 'Median load time', value: '0.84 s', lead: true }] })
      })
    )
  );
</script>
```

The theme follows the reader's system setting. To force one, set `data-theme="light"` or `data-theme="dark"` on `<html>`.

## Use in Figma

1. Install the **Tokens Studio for Figma** plugin.
2. Load `tokens/figma-tokens-studio.json`. It contains three sets: `core` (spacing, radius, type), `light` and `dark`.
3. Export to Figma variables and styles from the plugin.
4. Install the fonts from `fonts/` on your machine so text styles render in Geist.

## Use with AI assistants

Give your assistant `docs/guidelines.md`, `docs/components.md` and `dist/index.d.ts`, or point it at this repository. A prompt that works well:

> Build this page with Evidence UI. Follow docs/guidelines.md, use only components and tokens defined in this repository, and do not add colors, shadows or icons that the guidelines do not allow.

## 中文说明

Evidence UI 是一套黑白灰风格的组件库，专门用来做“用数据讲道理”的页面，比如客户报告、方案、基准测试和价格计算器。设计目标是让读者第一眼看到结论，再往下能逐项核对证据。

- **在线示例：** https://yusen-dev.github.io/evidence-ui/examples/
- **网页里用：** 按上面 “Use in a web page” 的方式引入 CSS 和 JS 就行，组件挂在 `window.EvidenceUI` 上。
- **Figma 里用：** 装 Tokens Studio 插件，导入 `tokens/figma-tokens-studio.json`，再把 `fonts/` 里的字体装到电脑上。
- **给 AI 用：** 把 `docs/guidelines.md`、`docs/components.md` 和 `dist/index.d.ts` 发给 AI，或者直接给它这个仓库的链接。

本项目与 Vercel 无关联，详见 [NOTICE.md](NOTICE.md)。

## License

Code, styles, tokens and docs: [MIT](LICENSE). Fonts: [SIL Open Font License 1.1](fonts/OFL.txt).
