Evidence UI is a small, monochrome kit for pages that have to convince someone with numbers: customer reports, proposals, benchmarks, pricing calculators. The design goal is that the reader understands the answer first and can check the proof second. Everything below is a rule for applying the tokens and components in this system.

## The one idea

Every page answers one question for one reader. Write that question down before you lay anything out. The first screen shows the answer and the single strongest piece of evidence for it (use Opening). Everything after that either supports the answer, qualifies it, or lets a careful reader verify it.

Two kinds of readers use the same page:

- **Skimmers** read the title, headings, big numbers and captions. Those alone should tell the whole story in plain words.
- **Checkers** read tables, methods and sources. Give them exact names, units and periods there.

## Writing

- Headings are sentence case and make a claim. "Checkout loads in under a second" beats "Performance results".
- Say what was measured, on what, and when. Keep qualifiers that change the meaning ("median", "desktop only", "September").
- Prefer a number to an adjective. Replace "much faster" with "0.84 s, down from 2.1 s".
- Separate what you observed from what you infer. If a chart cannot show cause, the caption says so.
- No decorative labels above headings, no numbered section badges, no exclamation marks.

## Color

The palette is grayscale on purpose. Hierarchy comes from size, weight and position, not hue.

- Text: `ev-text-primary` for content, `ev-text-secondary` for labels, captions and metadata. Both pass 4.5:1 on `ev-surface-primary` and `ev-surface-secondary` in both themes.
- Status colors (`ev-color-info`, `ev-color-success`, `ev-color-warning`, `ev-color-error`) appear only when something has that status, and always next to a word that says it. A good number is not a "success".
- Charts use `ev-chart-1` for the series that matters and `ev-chart-2`, `ev-chart-3` for context. Distinguish series by line style and direct labels.
- The dark panel (`ev-surface-contrast`) comes only from Band with `inverse`.

## Type

One family, Geist, does almost everything: prose, headings, numbers, dates, money. Geist Mono (`ev-t-code`) is only for things a person might copy: commands, file paths, IDs, region codes.

| Role | Style | Where |
| --- | --- | --- |
| Statement | `ev-t-display` | At most once, for a page whose whole point is one sentence |
| Page title | `ev-t-title` | The h1 |
| Section | `ev-t-h24` | Each major turn in the argument |
| Subsection | `ev-t-h20`, `ev-t-h16` | Nested structure, chart titles |
| Summary | `ev-t-lede` | One paragraph under the title |
| Reading | `ev-t-body` | Paragraphs, kept to about 65 characters per line |
| Support | `ev-t-small`, `ev-t-label`, `ev-t-meta` | Captions, field labels, header and footer |
| Key figure | `ev-value-lead` | The one number the page is about |

Headings use `ev-weight-heading` (450). Figures that line up use tabular numerals. Numbers that are peers share one style regardless of length.

## Space and layout

- Desktop uses 12 columns, tablet 6, phone 4, inside a 1200px container.
- Prose spans about 7 columns. Tables, charts and calculators span all 12.
- Gaps grow with distance in meaning: `ev-space-2` to `ev-space-4` inside a group, `ev-space-6` to `ev-space-8` between groups, `ev-space-12` between sections. Save `ev-space-16` for a real chapter break.
- Set gaps on the parent with `gap`. Children don't add their own margins.
- When one finding matters more than the others, give it more room. Equal columns are for equal things.

## Surfaces

The page is one flat sheet on `ev-surface-primary`. Add a border or fill only when it means something: an input you can type in, a selected row, a dark Band at the decision point. Radius is `ev-radius-small` on controls and `ev-radius` on the rare panel. No shadows, gradients, glows, textures or nested cards.

## Data

- Bars start at zero and share one scale (BarList does this for you).
- Tables are real `<table>` elements with captions. Numeric columns align right, headers included.
- Label lines directly instead of using a legend.
- Every chart has a caption that says what to notice, and its data is available as a table or text.

## Interaction and motion

Controls are native elements with visible labels and a 2px `ev-focus` outline. Calculators recompute from exact values on every change and keep invalid input visible with an explanation. Motion is limited to short color transitions on buttons and is switched off when the reader prefers reduced motion.

## Icons and brand marks

The kit ships no icons and no logos. Use words instead of icons unless a symbol is universally understood. ReportShell, Masthead and Footer show dashed placeholders. Pass your own wordmark and logo through `identity` and `mark`.

## Before you ship

- Can someone who only reads the headings and captions repeat the conclusion?
- Is there one obvious focal point per section?
- Do both light and dark themes keep the same hierarchy?
- Does the page work at 375px without sideways scrolling?
- Could you delete any border, box, color or section without losing meaning? Then delete it.
