Use the qodly-custom-component skill. Scaffold with @qodly/cli, then implement the component using the standard Build / Render / Config / Settings structure.

Create an Invoice Line-Item Grid custom component for Qodly. The component must follow a two-part contract: Props and Behavior. The grid is interactive: it edits lines, adds/removes/reorders them, updates invoice totals, and can mark the invoice paid. Persistence is not done with ds.setValue — the page binds the component events to these exposed Invoice entity functions (names only):

•saveLine
•addLine
•removeLine
•reorderLines
•applyTotals
•setPaid

Declare matching custom events in info.events (for example On Save Line → saveLine, On Add Line → addLine, On Remove Line → removeLine, On Reorder Lines → reorderLines, On Apply Totals → applyTotals, On Paid Change → setPaid). Emit them with useRenderer; do not embed 4D class code in the component.

Props define what flows into the component:

Data
•datasource: bind either the Invoice entity (e.g. `invoice`) or its related line selection (e.g. `invoice.Lines_Fm_Invoices`). These are ORDA sources, not JS arrays. Configure datasources.accept: ['entitysel', 'entity'] (Qodly’s official type names; entitysel is lowercase). Do not use accept: ['array'] — Studio then rejects entity and relatedEntities drops.

When the bound source is the Invoice entity, read the related lines from the `Lines_Fm_Invoices` attribute (expose this as a `linesRelation` setting, default: "Lines_Fm_Invoices"). When the bound source is already the line selection, use it directly.

Datasource declarations — declare only real INVOICE_LINES attributes, and only on the line path:
•If bound to `invoice`: `{ path: 'invoice' }` (NOT iterable) plus `{ path: 'invoice.Lines_Fm_Invoices', iterable: true }` plus `invoice.Lines_Fm_Invoices.[].ID`, `.Quantity`, `.Unit_Price`, `.Discount_Rate`, `.Tax_Rate`, `._ProductName`, `._ProductReference`, `.Product_ID`, `.Line_Number`, `.Total`, `.Total_Tax`. Also declare invoice-level `Paid`, `Subtotal_BT`, `Tax`, `Total` when bound to the entity.
•If bound to `invoice.Lines_Fm_Invoices`: `{ path: datasource, iterable: true }` plus `invoice.Lines_Fm_Invoices.[].<Attr>` for the line fields above.

Never mark the Invoice entity as iterable and never declare `invoice.[].Attr` — that produces console errors (`attribute:[] not found to build:invoice.[].…`). Never declare camelCase aliases (quantity, unitPrice, productRef) or Product.Name / Product.Category; those attributes do not exist on the dataclass and Qodly will log “attribute not found” while building the $attributes list.

Loading rows (Render) — do not use useDataLoader. That hook always clones the selection on mount (`entitysel.clone()`), even when fetchOnMount is false. In Studio the selection is already initialized so it can appear to work; in preview/runtime a related selection is often still null and the page throws `Cannot read properties of null (reading 'clone')`.

Load with the DataSource API instead, then parse:
1. Invoice entity: `await ds.getValue('Lines_Fm_Invoices')` (entity attributes are read with getValue(property), not as keys on the root object). The value is typically an ICollection `{ __ENTITIES: InvoiceLine[] }`.
2. Root `await ds.getValue()` — handle a collection (`__ENTITIES`), a plain array, or an invoice object that already embeds `Lines_Fm_Invoices.__ENTITIES` (as in REST getById with $expand).
3. Line selection: `await ds.getCollection(0, 200, ds.filterAttributesText || '')` only when `ds.type === 'entitysel'` AND `ds.entitysel != null`. Skip getCollection when entitysel is null; wait for the datasource `changed` event and retry.

Parse __ENTITIES / arrays / nested Lines_Fm_Invoices. Product is often `__deferred` only — use `_ProductName` and `_ProductReference`, not Product.Name. Listen to `changed` on the bound source and recompute. Do not fetch again from the same source inside that listener in a way that re-emits `changed` (that freeze-loops the page).

Each line is a 4D entity. Read:
•ID
•Quantity
•Unit_Price
•Discount_Rate
•Tax_Rate
•_ProductName
•_ProductReference
•Product_ID
•Line_Number
•Total
•Total_Tax

Formatting
•currency: currency symbol or ISO code shown next to amounts. Default: "" (plain numbers, no symbol).
•locale: number-formatting locale, e.g. "fr-FR" for comma decimals and thin-space thousands. Default: "fr-FR".

Design (the component controls its own appearance through these — see Behavior)
•accentColor: the single accent color used for the total, the quantity ring and the chart bars. Default: "#6E56CF".
•surfaceColor: card background color. Default: "#FFFFFF".
•textColor: primary text color. Default: "#23202E".
•mutedColor: secondary/label text color. Default: "#6F6B7D".
•cornerRadius: card and control corner radius in pixels. Default: 16.
•density: "comfortable" or "compact" row spacing. Default: "comfortable".
•categoryColors: optional object mapping a category value to a hex color (e.g. { "Plume": "#6E56CF", "Roller": "#12B886", "Multifonction": "#F59F00" }). When a category is missing from the map, fall back to a built-in neutral palette.

Section toggles
•showSummary: show the computed totals panel. Default: true.
•showChart: show the "revenue by product line" bar chart. Default: true.
•showQuantityRing: show the total-quantity progress ring. Default: true.
•showCategoryChips: show the category color chip on each row. Default: true.

Behavior:

Render the invoice lines as a clean, minimalist grid with these columns: Product (product name, a smaller reference sub-label, and an optional category color chip), Quantity, Unit Price, Discount %, Tax %, and a computed Line Total. Quantity, Unit Price, Discount % and Tax % are editable. Product can be chosen when a product is applied (Product_ID, _ProductName, _ProductReference). Provide add-line, remove-line, and drag-to-reorder controls, plus a paid/unpaid control on the invoice.

For each line, compute:
•lineNet = Quantity × Unit_Price × (1 − Discount_Rate / 100)
•lineTax = lineNet × Tax_Rate / 100
Show lineNet in the Line Total column. Also keep Total and Total_Tax in sync with lineNet and lineTax when emitting saveLine.

Emit the named Invoice functions (page wiring, not inlined 4D):
•saveLine — when a persisted line (numeric ID) changes; payload includes the line.
•addLine — when the user adds a row.
•removeLine — when the user deletes a row; payload includes the line ID.
•reorderLines — after drag-and-drop; payload includes orderedIds.
•applyTotals — when computed invoice totals change; payload includes Subtotal_BT, Tax, Total.
•setPaid — when the paid control changes; payload includes value (boolean).

Do not call saveLine for a row that still has a temporary client-only ID (addLine has not persisted it yet).

When showSummary is true, display a summary panel computed from the lines containing:
•Subtotal (sum of Quantity × Unit_Price, before discount)
•Discount (sum of subtotal − net)
•Net excluding tax
•Tax total
•Total due including tax (net + tax), shown as the single most prominent figure
•Total quantity — accompanied by a small circular progress ring when showQuantityRing is true

When showChart is true, display a compact horizontal bar chart "Revenue by product line (net)": one bar per line, sorted by net total descending, each bar colored by its category.

Design and customization — the component must control its own visual design and be self-contained; do not depend on the host page's theme or global CSS. Follow a minimalist aesthetic like a modern digital invoice:
•A single card on a light surface, with the given cornerRadius, a subtle 1px border, a soft shadow, and generous internal spacing based on an 8px scale.
•Restrained use of exactly one accent color (accentColor) for the total figure, the quantity ring and the chart bars; everything else in neutral text and muted labels.
•Modern typography, tabular figures for all numeric columns and amounts, right-aligned numbers, left-aligned product names.
•Comfortable or compact row height driven by the density prop.
•Assign a stable color per category (from categoryColors, else the fallback palette) and reuse it for both the chips and the chart bars.

Avoid heavy borders, dense grids, zebra clutter, multiple competing colors, and any decorative elements that are not one of: the accent total, the ring, the chips, and the chart. Hide empty or missing optional fields (no reference, no category, no discount) rather than showing blank cells.

Keep the grid and all computed figures synchronized with external datasource updates — recompute and re-render whenever the invoice or its line selection changes — and avoid unnecessary rendering. The layout must be responsive: the summary sits beside the grid on wide screens and stacks below it on narrow screens.

Verify in both Qodly Studio (dev) and page preview / built component. Studio can show mock or already-initialized selections while preview hits REST (`/rest/INVOICES/getById?$attributes=ID,Lines_Fm_Invoices,Lines_Fm_Invoices.Quantity,…`). Both bindings must work: `invoice` and `invoice.Lines_Fm_Invoices`.

Data Example
type InvoiceLine = {
  __KEY?: string;
  ID: number;
  Product_ID?: number;
  Line_Number?: number;
  Quantity: number;
  Unit_Price: number;
  Discount_Rate?: number;
  Tax_Rate?: number;
  Total?: number;
  Total_Tax?: number;
  _ProductName?: string;
  _ProductReference?: string;
  Product?: { __deferred?: { uri: string; __KEY: string } };
}
