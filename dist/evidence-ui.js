/* @ds-bundle: {"format":4,"namespace":"EvidenceUI","components":[{"name":"ReportShell"},{"name":"Masthead"},{"name":"Footer"},{"name":"Opening"},{"name":"StatStrip"},{"name":"BarList"},{"name":"DataTable"},{"name":"Chart"},{"name":"Comparison"},{"name":"Band"},{"name":"Button"},{"name":"Field"},{"name":"Calculator"},{"name":"Note"},{"name":"Sources"}]} */
/* Evidence UI. MIT License. Requires window.React (18+). */
(function (global) {
  var React = global.React;
  var h = React.createElement;

  function classes() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function asText(n) { return typeof n === "number" ? n.toLocaleString("en-US") : n; }
  function omit(obj, keys) {
    var copy = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) copy[k] = obj[k];
    return copy;
  }

  /* Shell */
  function Masthead(p) {
    var fields = (p.meta || []).slice(0, 2);
    return h("header", { className: "ev-masthead" },
      p.identity || h("span", { className: "ev-slot ev-slot--wordmark", role: "img", "aria-label": "Your wordmark" }, "wordmark"),
      fields.length > 0 && h("div", { className: "ev-masthead__meta" },
        fields.map(function (f, i) { return h("span", { key: i, className: "ev-t-meta" }, f); })));
  }
  function Footer(p) {
    return h("footer", { className: "ev-footer ev-t-meta" },
      p.mark || h("span", { className: "ev-slot ev-slot--mark", role: "img", "aria-label": "Your logo" }),
      p.children && h("span", null, p.children));
  }
  function ReportShell(p) {
    return h("div", { className: "ev" },
      h("div", { className: "ev-shell" },
        h("a", { className: "ev-sr-only", href: "#ev-main" }, "Skip to content"),
        h(Masthead, { identity: p.identity, meta: p.meta }),
        h("main", { id: "ev-main", className: "ev-shell__main" }, p.children),
        h(Footer, { mark: p.mark }, p.footer)));
  }

  /* Composition */
  function Opening(p) {
    return h("section", { className: "ev-opening" },
      h("div", { className: "ev-opening__claim" },
        h("h1", { className: p.display ? "ev-t-display" : "ev-t-title" }, p.claim),
        p.lede && h("p", { className: "ev-t-lede" }, p.lede),
        p.context && h("p", { className: "ev-t-small" }, p.context)),
      p.proof && h("div", { className: "ev-opening__proof" }, p.proof));
  }
  function Band(p) {
    return h("section", { className: classes("ev-band", p.inverse && "ev-band--inverse", p.className) }, p.children);
  }

  /* Evidence */
  function StatStrip(p) {
    return h("div", { className: "ev-stats" }, (p.stats || []).map(function (s, i) {
      return h("div", { key: i, className: "ev-stats__item" },
        h("p", { className: "ev-t-small" }, s.label),
        h("p", { className: classes("ev-value", s.lead && "ev-value--lead") }, s.value),
        s.detail && h("p", { className: "ev-t-small" }, s.detail));
    }));
  }
  function BarList(p) {
    var rows = p.rows || [];
    var scaleMax = p.max || rows.reduce(function (m, r) { return Math.max(m, r.value); }, 0) || 1;
    var focused = rows.some(function (r) { return r.lead; });
    var list = h("ul", { className: classes("ev-bars", focused && "ev-bars--focused"), "aria-label": p.label },
      rows.map(function (r, i) {
        return h("li", { key: i, className: classes("ev-bars__row", r.lead && "is-lead", r.reference && "is-reference") },
          h("span", null, r.label),
          h("span", { className: "ev-bars__track", "aria-hidden": "true" },
            h("span", { className: "ev-bars__fill", style: { display: "block", width: (r.value / scaleMax * 100) + "%" } })),
          h("span", { className: "ev-bars__value" }, r.display != null ? r.display : asText(r.value)));
      }));
    if (!p.caption) return list;
    return h("figure", { className: "ev-chart" }, list, h("figcaption", { className: "ev-t-small" }, p.caption));
  }
  function DataTable(p) {
    var cols = p.columns || [];
    function renderRow(row, cellTag) {
      return cols.map(function (c, j) {
        var cls = c.numeric ? "ev-num" : undefined;
        var v = c.numeric ? asText(row[c.key]) : row[c.key];
        return j === 0 ? h("th", { key: c.key, scope: "row", className: cls }, v) : h(cellTag, { key: c.key, className: cls }, v);
      });
    }
    return h("div", { className: "ev-table" },
      h("table", null,
        p.caption && h("caption", null, p.caption),
        h("thead", null, h("tr", null, cols.map(function (c) {
          return h("th", { key: c.key, scope: "col", className: c.numeric ? "ev-num" : undefined }, c.label);
        }))),
        h("tbody", null, (p.rows || []).map(function (row, i) {
          return h("tr", { key: i, className: row.highlight ? "is-highlighted" : undefined }, renderRow(row, "td"));
        })),
        p.foot && h("tfoot", null, h("tr", null, renderRow(p.foot, "td")))));
  }
  function Chart(p) {
    var W = 720, H = 280, padL = 48, padR = 120, padT = 16, padB = 32;
    var series = p.series || [], labels = p.xLabels || [];
    var all = [];
    series.forEach(function (s) { all = all.concat(s.values); });
    var top = p.yMax || Math.max.apply(null, all.concat([1]));
    var ticks = p.yTicks || [0, top / 2, top];
    var unit = p.unit || "";
    var px = function (i) { return padL + (W - padL - padR) * (labels.length > 1 ? i / (labels.length - 1) : 0); };
    var py = function (v) { return padT + (H - padT - padB) * (1 - v / top); };
    var parts = [];
    ticks.forEach(function (t, i) {
      parts.push(h("line", { key: "g" + i, className: i === 0 ? "ev-chart__axis" : "ev-chart__grid", x1: padL, x2: W - padR, y1: py(t), y2: py(t) }));
      parts.push(h("text", { key: "y" + i, className: "ev-chart__tick", x: padL - 8, y: py(t) + 4, textAnchor: "end" }, asText(t) + unit));
    });
    labels.forEach(function (l, i) {
      parts.push(h("text", { key: "x" + i, className: "ev-chart__tick", x: px(i), y: H - 8, textAnchor: "middle" }, l));
    });
    // End labels: keep at least 18px apart so close series never overlap.
    var labelY = series.map(function (s, k) { return { k: k, y: py(s.values[s.values.length - 1]) + 4 }; })
      .sort(function (a, b) { return a.y - b.y; });
    labelY.forEach(function (l, i) { if (i > 0 && l.y - labelY[i - 1].y < 18) l.y = labelY[i - 1].y + 18; });
    var labelAt = {};
    labelY.forEach(function (l) { labelAt[l.k] = l.y; });
    series.forEach(function (s, k) {
      var tone = "ev-series-" + (k + 1), end = s.values.length - 1;
      var d = s.values.map(function (v, i) { return (i ? "L" : "M") + px(i).toFixed(1) + "," + py(v).toFixed(1); }).join(" ");
      parts.push(h("path", { key: "l" + k, className: classes("ev-chart__line", tone), d: d }));
      parts.push(h("circle", { key: "d" + k, className: classes("ev-chart__dot", tone), cx: px(end), cy: py(s.values[end]), r: 4 }));
      parts.push(h("text", { key: "n" + k, className: "ev-chart__label", x: px(end) + 10, y: labelAt[k] }, s.name + " " + asText(s.values[end]) + unit));
    });
    return h("figure", { className: "ev-chart" },
      p.title && h("h3", { className: "ev-t-h16" }, p.title),
      h("div", { className: "ev-chart__plot", tabIndex: 0 },
        h("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": p.ariaLabel || p.title }, parts)),
      p.caption && h("figcaption", { className: "ev-t-small" }, p.caption));
  }
  function Comparison(p) {
    return h("div", { className: "ev-compare" }, (p.items || []).map(function (it, i) {
      return h("div", { key: i, className: "ev-compare__item" }, h("h3", { className: "ev-t-h20" }, it.title), h("p", null, it.body));
    }));
  }
  function Note(p) {
    return h("aside", { className: classes("ev-note", p.tone && "ev-note--" + p.tone) },
      p.title && h("p", { className: "ev-note__title" }, p.tone && h("span", { className: "ev-note__dot", "aria-hidden": "true" }), p.title),
      h("p", { className: "ev-t-small" }, p.children));
  }
  function Sources(p) {
    return h("ol", { className: "ev-sources" }, (p.items || []).map(function (s, i) {
      return h("li", { key: i }, s.href ? h("a", { href: s.href }, s.label) : s.label, s.detail ? ", " + s.detail : null);
    }));
  }

  /* Controls */
  function Button(p) {
    var rest = omit(p, ["solid", "className", "children"]);
    rest.className = classes("ev-btn", p.solid && "ev-btn--solid", p.className);
    if (!rest.href && !rest.type) rest.type = "button";
    return h(rest.href ? "a" : "button", rest, p.children);
  }
  function Field(p) {
    var input = omit(p, ["label", "hint", "error", "prefix", "suffix"]);
    var hintId = p.id + "-hint", errorId = p.id + "-error";
    input["aria-describedby"] = classes(p.hint && hintId, p.error && errorId) || undefined;
    if (p.error) input["aria-invalid"] = "true";
    return h("div", { className: classes("ev-field", p.error && "is-invalid") },
      h("label", { className: "ev-field__label", htmlFor: p.id }, p.label),
      h("div", { className: "ev-field__box" },
        p.prefix && h("span", { className: "ev-field__unit" }, p.prefix),
        h("input", input),
        p.suffix && h("span", { className: "ev-field__unit" }, p.suffix)),
      p.hint && h("p", { className: "ev-field__hint", id: hintId }, p.hint),
      p.error && h("p", { className: "ev-field__error", id: errorId, role: "alert" }, p.error));
  }
  function Calculator(p) {
    return h("div", { className: "ev-calc" },
      h("div", { className: "ev-calc__inputs" }, p.inputs),
      h("div", { className: "ev-calc__results" },
        h("div", { className: "ev-calc__grid", "aria-live": "polite" }, (p.results || []).map(function (r, i) {
          return h("div", { key: i, className: "ev-calc__result" },
            h("p", { className: "ev-t-small" }, r.label),
            h("p", { className: classes("ev-value", r.lead && "ev-value--lead") }, r.value),
            r.detail && h("p", { className: "ev-t-small" }, r.detail));
        })),
        p.formula && h("code", { className: "ev-calc__formula" }, p.formula)));
  }

  global.EvidenceUI = Object.assign(global.EvidenceUI || {}, {
    ReportShell: ReportShell, Masthead: Masthead, Footer: Footer, Opening: Opening, Band: Band,
    StatStrip: StatStrip, BarList: BarList, DataTable: DataTable, Chart: Chart, Comparison: Comparison,
    Note: Note, Sources: Sources, Button: Button, Field: Field, Calculator: Calculator
  });
})(window);
