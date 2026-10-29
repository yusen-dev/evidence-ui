# Colors (hex)

Hex conversions of the oklch values in `tokens.json`, for tools that do not support oklch.


| Token | Light | Dark | Usage |
| --- | --- | --- | --- |
| `ev-background-100` | #ffffff | #000000 | Page canvas. The report is normally one continuous canvas on this color. |
| `ev-background-200` | #fafafa | #000000 | Secondary surface: bar tracks, disabled fields. Never a card fill for ordinary sections. |
| `ev-gray-100` | #f2f2f2 | #1a1a1a | Lowest gray step. Rarely used directly; prefer alpha grays over surfaces. |
| `ev-gray-200` | #ebebeb | #1f1f1f | Subtle fills. |
| `ev-gray-300` | #e6e6e6 | #292929 | Subtle fills, hover backgrounds. |
| `ev-gray-400` | #eaeaea | #2e2e2e | Default fills. |
| `ev-gray-500` | #c9c9c9 | #454545 | Decorative rules only; too light for text. |
| `ev-gray-600` | #a8a8a8 | #878787 | Disabled marks; too light for body text. |
| `ev-gray-700` | #8f8f8f | #8f8f8f | Placeholder-level marks. Below 4.5:1 on canvas, so never body text. |
| `ev-gray-800` | #7d7d7d | #7d7d7d | Tertiary chart series (chart-3/6). Use only at 18px+ or for marks. |
| `ev-gray-900` | #4d4d4d | #a0a0a0 | Secondary text on background-100 and background-200 (text-secondary). Chart series 2. |
| `ev-gray-1000` | #171717 | #ededed | Primary text, headings, primary button fill, chart series 1. |
| `ev-gray-alpha-100` | #0000000d | #ffffff12 | Hairline tint. |
| `ev-gray-alpha-200` | #00000015 | #ffffff17 | Button hover fill. |
| `ev-gray-alpha-300` | #0000001a | #ffffff21 | Subtle borders (border-subtle). |
| `ev-gray-alpha-400` | #00000014 | #ffffff24 | Default borders for controls and table rules (border-default). |
| `ev-gray-alpha-500` | #00000036 | #ffffff3d | Stronger tint. |
| `ev-gray-alpha-600` | #0000003d | #ffffff82 | Stronger tint. |
| `ev-gray-alpha-700` | #00000070 | #ffffff8a | Strong borders, hovered inputs (border-strong). |
| `ev-gray-alpha-800` | #00000082 | #ffffff78 | Overlay tint. |
| `ev-gray-alpha-900` | #000000b2 | #ffffff9c | Overlay tint. |
| `ev-gray-alpha-1000` | #000000e8 | #ffffffeb | Near-opaque overlay. |
| `ev-blue-100` | #f0f7ff | #06193a | Blue scale. Tinted background for a state that needs a surface. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-blue-400` | #cae7ff | #003674 | Blue scale. Tinted border or fill for a state. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-blue-700` | #006bff | #006efe | Blue scale. Solid state fill. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-blue-900` | #005ff2 | #47a8ff | Blue scale. State text and marks on canvas. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-blue-1000` | #002359 | #eaf6ff | Blue scale. Highest-contrast state text. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-red-100` | #ffeeef | #330a11 | Red scale. Tinted background for a state that needs a surface. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-red-400` | #ffd7d6 | #6f101b | Red scale. Tinted border or fill for a state. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-red-700` | #fc0035 | #f13242 | Red scale. Solid state fill. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-red-900` | #d8001b | #ff565f | Red scale. State text and marks on canvas. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-red-1000` | #47000c | #ffe9ed | Red scale. Highest-contrast state text. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-amber-100` | #fff6de | #2a1700 | Amber scale. Tinted background for a state that needs a surface. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-amber-400` | #ffdc73 | #5b3000 | Amber scale. Tinted border or fill for a state. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-amber-700` | #ffae00 | #ffae00 | Amber scale. Solid state fill. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-amber-900` | #aa4d00 | #ff9300 | Amber scale. State text and marks on canvas. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-amber-1000` | #561900 | #fff3d5 | Amber scale. Highest-contrast state text. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-green-100` | #ecfdec | #002608 | Green scale. Tinted background for a state that needs a surface. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-green-400` | #b9f5bc | #004615 | Green scale. Tinted border or fill for a state. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-green-700` | #28a948 | #00ac3a | Green scale. Solid state fill. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-green-900` | #107d32 | #00ca50 | Green scale. State text and marks on canvas. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-green-1000` | #003a00 | #d8ffe4 | Green scale. Highest-contrast state text. Color only when it adds meaning to state, action or data, paired with a non-color cue. |
| `ev-surface-primary` | #ffffff | #000000 | Default page surface. |
| `ev-surface-secondary` | #fafafa | #000000 | Secondary surface for bar tracks and disabled states. |
| `ev-surface-contrast` | #171717 | #171717 | The only contrast field: Band with inverse. Same in both themes. Use the Band component instead of painting this surface yourself. |
| `ev-text-primary` | #171717 | #ededed | Body copy, headings, values on surface-primary and surface-secondary. |
| `ev-text-secondary` | #4d4d4d | #a0a0a0 | Labels, captions, metadata, helper text on surface-primary and surface-secondary. Never tiny gray prose. |
| `ev-text-on-contrast` | #ededed | #ededed | Text on surface-contrast. |
| `ev-text-on-contrast-secondary` | #a4a4a4 | #a4a4a4 | Secondary text on surface-contrast. |
| `ev-border-subtle` | #0000001a | #ffffff21 | Table row rules and quiet separators. Prefer spacing first. |
| `ev-border-default` | #00000014 | #ffffff24 | Control borders (buttons, inputs). |
| `ev-border-strong` | #00000070 | #ffffff8a | Hovered input border, table header rule. |
| `ev-border-on-contrast` | #ffffff3d | #ffffff3d | Borders inside a contrast band. |
| `ev-focus` | #006bff | #47a8ff | Focus ring, 2px solid, on every interactive element. |
| `ev-color-info` | #006bff | #006efe | Informational state. Pair with a word or icon. |
| `ev-color-success` | #107d32 | #00ca50 | Success state. Never to make a favorable number green. |
| `ev-color-warning` | #aa4d00 | #ff9300 | Warning state. Pair with a word. |
| `ev-color-error` | #fc0035 | #f13242 | Error text and invalid field borders. |
| `ev-chart-1` | #171717 | #ededed | Chart series 1: the decisive series. |
| `ev-chart-2` | #4d4d4d | #a0a0a0 | Chart series 2: supporting or reference series. |
| `ev-chart-3` | #7d7d7d | #7d7d7d | Chart series 3. |
| `ev-chart-4` | #171717 | #ededed | Chart series 4 (repeats 1; distinguish with dash or direct label). |
| `ev-chart-5` | #4d4d4d | #a0a0a0 | Chart series 5 (repeats 2; distinguish with dash or direct label). |
| `ev-chart-6` | #7d7d7d | #7d7d7d | Chart series 6 (repeats 3; distinguish with dash or direct label). |
