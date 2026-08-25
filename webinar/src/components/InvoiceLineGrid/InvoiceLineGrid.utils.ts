import type { CategoryColors, InvoiceLine, InvoiceModel } from './InvoiceLineGrid.types';

export const FALLBACK_PALETTE = ['#8B8698', '#A39EAD', '#7A7586', '#9C97A8', '#6F6B7D', '#B4B0BC'];

export const LINE_ATTRS = [
  'ID',
  'Quantity',
  'Unit_Price',
  'Discount_Rate',
  'Tax_Rate',
  '_ProductName',
  '_ProductReference',
  'Product_ID',
  'Line_Number',
  'Total',
  'Total_Tax',
] as const;

export const INVOICE_ATTRS = ['Paid', 'Subtotal_BT', 'Tax', 'Total'] as const;

const pick = (record: Record<string, unknown>, keys: string[]): unknown => {
  for (const key of keys) {
    if (record[key] != null && record[key] !== '') return record[key];
  }
  return undefined;
};

export const toNumber = (value: unknown, fallback = 0): number => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value.replace(/\s/g, '').replace(',', '.'));
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
};

export const toOptionalString = (value: unknown): string | undefined => {
  if (value == null) return undefined;
  const s = String(value).trim();
  return s === '' ? undefined : s;
};

export const isPersistedLineId = (id: string): boolean => /^\d+$/.test(id);

export const extractRecords = (
  raw: unknown,
  relationKeys: string[] = ['Lines_Fm_Invoices', 'Lines', 'lines'],
): Record<string, unknown>[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.filter((item) => item && typeof item === 'object') as Record<string, unknown>[];
  }
  if (typeof raw !== 'object') return [];
  const obj = raw as Record<string, unknown>;
  if (Array.isArray(obj.__ENTITIES)) return obj.__ENTITIES as Record<string, unknown>[];
  if (Array.isArray(obj.entities)) return obj.entities as Record<string, unknown>[];
  for (const key of relationKeys) {
    let nested: unknown;
    try {
      nested = obj[key];
    } catch {
      continue;
    }
    const inner = extractRecords(nested, []);
    if (inner.length > 0) return inner;
  }
  return [];
};

const parseWithPlainFallback = (
  raw: unknown,
  relationKeys: string[],
): Record<string, unknown>[] => {
  const direct = extractRecords(raw, relationKeys);
  if (direct.length > 0) return direct;
  if (!raw || typeof raw !== 'object') return [];
  try {
    return extractRecords(JSON.parse(JSON.stringify(raw)), relationKeys);
  } catch {
    return [];
  }
};

const asRecord = (value: unknown): Record<string, unknown> | undefined => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  return value as Record<string, unknown>;
};

export const parseInvoiceLines = (
  raw: unknown,
  relationKeys: string[] = ['Lines_Fm_Invoices', 'Lines', 'lines'],
): InvoiceLine[] => {
  const records = parseWithPlainFallback(raw, relationKeys);
  const lines: InvoiceLine[] = [];
  records.forEach((record, index) => {
    if (!record || typeof record !== 'object') return;
    const product = asRecord(pick(record, ['Product', 'product']));
    const name =
      toOptionalString(pick(record, ['_ProductName', 'name', 'Name'])) ??
      toOptionalString(product ? pick(product, ['name', 'Name']) : undefined) ??
      '';
    const productRef =
      toOptionalString(pick(record, ['_ProductReference', 'Reference', 'product_ref'])) ??
      toOptionalString(product ? pick(product, ['Reference', 'reference']) : undefined);
    const category =
      toOptionalString(pick(record, ['category', 'Category'])) ??
      toOptionalString(product ? pick(product, ['Category', 'category']) : undefined);
    const quantity = toNumber(pick(record, ['Quantity', 'quantity']));
    const unitPrice = toNumber(pick(record, ['Unit_Price', 'unitPrice', 'unit_price']));
    const discountRaw = pick(record, ['Discount_Rate', 'discountPct', 'Discount']);
    const taxRaw = pick(record, ['Tax_Rate', 'taxPct', 'tax_pct']);
    const discountPct = discountRaw == null ? undefined : toNumber(discountRaw);
    const taxPct = taxRaw == null ? undefined : toNumber(taxRaw);
    const productIdRaw = pick(record, ['Product_ID', 'productId']);
    const lineNumberRaw = pick(record, ['Line_Number', 'lineNumber']);
    lines.push({
      id: String(pick(record, ['ID', 'id', '__KEY']) ?? index),
      productRef,
      name,
      category,
      quantity,
      unitPrice,
      discountPct: discountPct && discountPct !== 0 ? discountPct : undefined,
      taxPct,
      productId: productIdRaw == null ? undefined : toNumber(productIdRaw),
      lineNumber: lineNumberRaw == null ? undefined : toNumber(lineNumberRaw),
    });
  });
  return lines;
};

function hasEntitySelection(ds: datasources.DataSource): boolean {
  return (ds as datasources.DataSource & { entitysel?: unknown }).entitysel != null;
}

export async function loadInvoiceLines(
  ds: datasources.DataSource,
  linesRelation: string,
): Promise<InvoiceLine[]> {
  const keys = [linesRelation, 'Lines', 'lines'].filter((key) => key.trim() !== '');
  const read = async (property?: string): Promise<InvoiceLine[]> => {
    try {
      const raw = property ? await ds.getValue(property) : await ds.getValue();
      return parseInvoiceLines(raw, keys);
    } catch {
      return [];
    }
  };

  if (ds.type === 'entity' || ds.type === 'object' || ds.dataType === 'object') {
    for (const key of keys) {
      const fromRelation = await read(key);
      if (fromRelation.length > 0) return fromRelation;
    }
  }

  const fromRoot = await read();
  if (fromRoot.length > 0) return fromRoot;

  if (ds.type === 'entitysel' && hasEntitySelection(ds)) {
    try {
      const collection = await ds.getCollection(0, 200, ds.filterAttributesText || '');
      const parsed = parseInvoiceLines(collection, keys);
      if (parsed.length > 0) return parsed;
    } catch {
      // selection not ready yet
    }
  }

  return [];
}

export async function loadInvoicePaid(
  ds: datasources.DataSource,
  linesRelation: string,
): Promise<boolean | undefined> {
  if (ds.type !== 'entity' && ds.type !== 'object' && ds.dataType !== 'object') {
    return undefined;
  }
  const relation = linesRelation.trim();
  const dsId = ds.id?.split('.')[0] ?? '';
  if (dsId && relation && ds.id?.includes('.')) {
    return undefined;
  }
  try {
    const paid = await ds.getValue('Paid');
    return Boolean(paid);
  } catch {
    return undefined;
  }
}

export const toCategoryColorMap = (input?: CategoryColors | string): Record<string, string> => {
  if (!input) return {};
  if (typeof input === 'string') {
    try {
      return toCategoryColorMap(JSON.parse(input));
    } catch {
      return {};
    }
  }
  if (Array.isArray(input)) {
    const map: Record<string, string> = {};
    input.forEach((row) => {
      const category = row?.category?.trim();
      const color = row?.color?.trim();
      if (category && color) map[category] = color;
    });
    return map;
  }
  return input;
};

export const colorForCategory = (
  category: string | undefined,
  map: Record<string, string>,
  seen: Map<string, string>,
  accentColor: string,
): string => {
  if (!category) return accentColor;
  const mapped = map[category];
  if (mapped) return mapped;
  const existing = seen.get(category);
  if (existing) return existing;
  const color = FALLBACK_PALETTE[seen.size % FALLBACK_PALETTE.length];
  seen.set(category, color);
  return color;
};

export const computeLineAmounts = (line: InvoiceLine) => {
  const discountPct = line.discountPct ?? 0;
  const taxPct = line.taxPct ?? 0;
  const lineGross = line.quantity * line.unitPrice;
  const lineNet = lineGross * (1 - discountPct / 100);
  const lineTax = lineNet * (taxPct / 100);
  return { lineGross, lineNet, lineTax, lineDiscount: lineGross - lineNet };
};

export const computeInvoice = (
  lines: InvoiceLine[],
  categoryColors: Record<string, string>,
  accentColor: string,
): InvoiceModel => {
  const seen = new Map<string, string>();
  const rows = lines.map((line) => {
    const { lineGross, lineNet, lineTax, lineDiscount } = computeLineAmounts(line);
    return {
      ...line,
      lineGross,
      lineNet,
      lineTax,
      lineDiscount,
      color: colorForCategory(line.category, categoryColors, seen, accentColor),
    };
  });

  const summary = rows.reduce(
    (acc, row) => {
      acc.subtotal += row.lineGross;
      acc.discount += row.lineDiscount;
      acc.net += row.lineNet;
      acc.tax += row.lineTax;
      acc.totalQuantity += row.quantity;
      return acc;
    },
    { subtotal: 0, discount: 0, net: 0, tax: 0, totalDue: 0, totalQuantity: 0 },
  );
  summary.totalDue = summary.net + summary.tax;

  const maxNet = rows.reduce((max, row) => Math.max(max, row.lineNet), 0);
  const chart = [...rows]
    .sort((a, b) => b.lineNet - a.lineNet)
    .map((row) => ({
      id: row.id,
      label: row.name || row.productRef || row.id,
      net: row.lineNet,
      color: row.color,
      pct: maxNet > 0 ? (row.lineNet / maxNet) * 100 : 0,
    }));

  return {
    rows,
    summary,
    chart,
    hasDiscount: rows.some((row) => (row.discountPct ?? 0) > 0),
    hasTax: rows.some((row) => row.taxPct != null),
  };
};

export const buildSaveLinePayload = (line: InvoiceLine) => {
  const { lineNet, lineTax } = computeLineAmounts(line);
  return {
    line: {
      ID: Number(line.id),
      Quantity: line.quantity,
      Unit_Price: line.unitPrice,
      Discount_Rate: line.discountPct ?? 0,
      Tax_Rate: line.taxPct ?? 0,
      Total: lineNet,
      Total_Tax: lineTax,
      _ProductName: line.name || undefined,
      _ProductReference: line.productRef || undefined,
      Product_ID: line.productId,
      Line_Number: line.lineNumber,
    },
  };
};

export const buildApplyTotalsPayload = (lines: InvoiceLine[]) => {
  const model = computeInvoice(lines, {}, '#6E56CF');
  return {
    Subtotal_BT: model.summary.net,
    Tax: model.summary.tax,
    Total: model.summary.totalDue,
  };
};

export const formatAmount = (value: number, locale: string, currency: string): string => {
  const abs = Number.isFinite(value) ? value : 0;
  if (!currency) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(abs);
  }
  if (/^[A-Z]{3}$/.test(currency)) {
    try {
      return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(abs);
    } catch {
      // fall through
    }
  }
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(abs);
  return `${number}\u00a0${currency}`;
};

export const formatNumber = (value: number, locale: string, digits = 0): string => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: digits,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
};

export const formatPercent = (value: number, locale: string): string => {
  return `${formatNumber(value, locale, 0)}\u00a0%`;
};

export const MOCK_LINES: InvoiceLine[] = [
  {
    id: 'L-01',
    productRef: 'PLM-204',
    name: 'Plume 204',
    category: 'Plume',
    quantity: 2,
    unitPrice: 1290,
    discountPct: 10,
    taxPct: 20,
  },
  {
    id: 'L-02',
    productRef: 'ROL-12',
    name: 'Roller Compact 12',
    category: 'Roller',
    quantity: 1,
    unitPrice: 890,
    taxPct: 20,
  },
  {
    id: 'L-03',
    name: 'Station multifonction A3',
    category: 'Multifonction',
    quantity: 3,
    unitPrice: 450,
    discountPct: 5,
    taxPct: 20,
  },
];
