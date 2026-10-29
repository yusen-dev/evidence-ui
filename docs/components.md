# Components

All components are exported on `window.EvidenceUI`. Types are in [`dist/index.d.ts`](../dist/index.d.ts).

## ReportShell

Wraps a whole report page: header, main content and footer, centered at a 1200px maximum width.

**Props:** `meta` (up to two short strings for the header, such as who it is for and the period), `footer` (one line), `children` (the report body), and optional `identity` and `mark` for your own wordmark and logo. Without them, dashed placeholders show where they go.

**Use it** once per page, as the outermost element.

**Avoid** extra rows of metadata between the header and the title; whatever describes the document belongs in the header.

## Masthead

The top row of a report: your wordmark on the left and at most two metadata strings on the right, sharing a baseline.

**Props:** `meta` (array; anything past the second item is dropped), `identity` (optional element for your wordmark).

**Avoid** inventing metadata you don't have, and drawing a rule under the header. Space does that job.

## Footer

The last row of a report: a small mark on the left and one line of text on the right, in `ev-t-meta`.

**Props:** `children` (the line), `mark` (optional logo element).

**Avoid** navigation, social links or a second line of text here.

## Opening

The first screen of a report. The headline and the one piece of evidence that backs it sit side by side: 7 columns for the claim, 5 for the proof. They stack below 800px.

**Props:** `claim` (the h1, written as the finding itself), `lede` (optional one-paragraph summary), `context` (optional basis, such as the period or sample), `proof` (any evidence component), and `display` to use the larger `ev-t-display` size.

**Use it** to answer the reader's question right away. A headline like "Q3 performance review" names the document; "Checkout pages now load in under a second" tells the reader what happened.

## Band

A full-width section. With `inverse`, it becomes a dark panel and switches the text, rule and button colors inside it, so any component placed there still reads well.

**Props:** `inverse` (boolean), `className`, `children`.

**Use it** sparingly: once or twice a page, where the argument turns, such as the decision you are asking for.

## StatStrip

A row of numbers that carry equal weight, each with a label above and an optional detail below.

**Props:** `stats`: `[{label, value, detail?, lead?}]`. Pass values already formatted. Set `lead: true` on a single figure to show it at the larger `ev-value-lead` size.

**Use it** for two to four numbers that really are peers.

**Avoid** boxes or borders around each number, and giving a single figure a different size just because it has more digits.

## BarList

Horizontal bars measured on a single scale. Every row lines up in three shared columns: label, bar and value.

**Props:** `rows`: `[{label, value, display?, lead?, reference?}]`, plus optional `max` (the end of the scale; defaults to the largest value), `label` (accessible name) and `caption`. Marking a row `lead` keeps it dark and mutes the rest. `reference` mutes a comparison row.

**Use it** for ranking or comparing sizes. Bars always start at zero, so their lengths stay honest.

**Avoid** cutting off the scale to make small differences look big. Put units and the time period in the caption.

## DataTable

A real HTML table with caption, header, body and optional total row, for readers who need to look up exact values.

**Props:** `caption`, `columns`: `[{key, label, numeric?}]`, `rows` (objects keyed by column; add `highlight: true` to shade a row), optional `foot`. The first column renders as the row heading.

**Use it** at the full width of its section. Numeric columns, headers included, align right with tabular figures.

**Avoid** mixing units or decimal places within a column, and highlighting a row nobody asked you to recommend.

## Chart

A line chart drawn as inline SVG, with series names written at the line ends instead of a legend, and a caption below.

**Props:** `series`: `[{name, values}]`, `xLabels`, plus optional `yMax`, `yTicks`, `unit`, `title`, `caption` and `ariaLabel`. The first series is solid, the second dashed and the third dotted, so they can be told apart without color.

**Use it** when the trend is the point. If the reader needs exact numbers, add a DataTable too.

**Avoid** captions that only describe the chart. Say what to notice and what the chart cannot prove.

## Comparison

Two to four options side by side, each with a heading and a short description, aligned to the same rows.

**Props:** `items`: `[{title, body}]`.

**Use it** for a quick read of trade-offs. When readers need to compare many attributes line by line, use a DataTable.

## Note

A short caveat or status message placed next to the evidence it qualifies.

**Props:** `children` (text), optional `title` and `tone` (`info`, `warning`, `error`, `success`). A tone adds a small colored dot beside the title, so the words still carry the meaning without the color.

**Avoid** boxes, colored side borders or icon tiles around notes.

## Sources

A numbered list of sources, set small and muted, for the end of a report.

**Props:** `items`: `[{label, href?, detail?}]`.

## Button

An outlined button by default; `solid` gives the dark filled version for the main action.

**Props:** `children` (label), `solid`, `href` (renders a link instead), plus any native button attributes.

**Use it** with labels that say exactly what happens. Keep it to one solid button per view.

## Field

A text or number input with a visible label, an optional unit on either side, a hint and an error message.

**Props:** `id` and `label` (both required), `prefix` or `suffix` (unit), `hint`, `error`, plus any native input attributes.

**Use it** with units and limits stated in the hint. When input is invalid, keep what the person typed and explain how to fix it. Don't quietly replace it with a default.

## Calculator

Inputs on the left and live results on the right, laid out as one tool. Results are announced to screen readers when they change.

**Props:** `inputs` (Field elements), `results`: `[{label, value, detail?, lead?}]` (formatted strings), optional `formula`. Your code holds the state and recalculates on every change.

**Use it** when trying different numbers is the whole point of the page. Put it in the first screen and show the default result before anyone types.

