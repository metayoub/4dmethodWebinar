import type { CategoryColors, InvoiceLine, InvoiceModel } from './InvoiceLineGrid.types';
export declare const FALLBACK_PALETTE: string[];
export declare const LINE_ATTRS: readonly ["ID", "Quantity", "Unit_Price", "Discount_Rate", "Tax_Rate", "_ProductName", "_ProductReference", "Product_ID", "Line_Number", "Total", "Total_Tax"];
export declare const INVOICE_ATTRS: readonly ["Paid", "Subtotal_BT", "Tax", "Total"];
export declare const toNumber: (value: unknown, fallback?: number) => number;
export declare const toOptionalString: (value: unknown) => string | undefined;
export declare const isPersistedLineId: (id: string) => boolean;
export declare const extractRecords: (raw: unknown, relationKeys?: string[]) => Record<string, unknown>[];
export declare const parseInvoiceLines: (raw: unknown, relationKeys?: string[]) => InvoiceLine[];
export declare function loadInvoiceLines(ds: datasources.DataSource, linesRelation: string): Promise<InvoiceLine[]>;
export declare function loadInvoicePaid(ds: datasources.DataSource, linesRelation: string): Promise<boolean | undefined>;
export declare const toCategoryColorMap: (input?: CategoryColors | string) => Record<string, string>;
export declare const colorForCategory: (category: string | undefined, map: Record<string, string>, seen: Map<string, string>, accentColor: string) => string;
export declare const computeLineAmounts: (line: InvoiceLine) => {
    lineGross: number;
    lineNet: number;
    lineTax: number;
    lineDiscount: number;
};
export declare const computeInvoice: (lines: InvoiceLine[], categoryColors: Record<string, string>, accentColor: string) => InvoiceModel;
export declare const buildSaveLinePayload: (line: InvoiceLine) => {
    line: {
        ID: number;
        Quantity: number;
        Unit_Price: number;
        Discount_Rate: number;
        Tax_Rate: number;
        Total: number;
        Total_Tax: number;
        _ProductName: string | undefined;
        _ProductReference: string | undefined;
        Product_ID: number | undefined;
        Line_Number: number | undefined;
    };
};
export declare const buildApplyTotalsPayload: (lines: InvoiceLine[]) => {
    Subtotal_BT: number;
    Tax: number;
    Total: number;
};
export declare const formatAmount: (value: number, locale: string, currency: string) => string;
export declare const formatNumber: (value: number, locale: string, digits?: number) => string;
export declare const formatPercent: (value: number, locale: string) => string;
export declare const MOCK_LINES: InvoiceLine[];
