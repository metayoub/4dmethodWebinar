export type InvoiceLine = {
    id: string;
    productRef?: string;
    name: string;
    category?: string;
    quantity: number;
    unitPrice: number;
    discountPct?: number;
    taxPct?: number;
    productId?: number;
    lineNumber?: number;
};
export type CategoryColorEntry = {
    category: string;
    color: string;
};
export type CategoryColors = Record<string, string> | CategoryColorEntry[];
export type Density = 'comfortable' | 'compact';
export type ComputedLine = InvoiceLine & {
    lineGross: number;
    lineNet: number;
    lineTax: number;
    lineDiscount: number;
    color: string;
};
export type InvoiceSummary = {
    subtotal: number;
    discount: number;
    net: number;
    tax: number;
    totalDue: number;
    totalQuantity: number;
};
export type ChartBar = {
    id: string;
    label: string;
    net: number;
    color: string;
    pct: number;
};
export type InvoiceModel = {
    rows: ComputedLine[];
    summary: InvoiceSummary;
    chart: ChartBar[];
    hasDiscount: boolean;
    hasTax: boolean;
};
export type SaveLinePayload = {
    line: {
        ID: number;
        Quantity: number;
        Unit_Price: number;
        Discount_Rate: number;
        Tax_Rate: number;
        Total: number;
        Total_Tax: number;
        _ProductName?: string;
        _ProductReference?: string;
        Product_ID?: number;
        Line_Number?: number;
    };
};
export type RemoveLinePayload = {
    ID: number;
};
export type ReorderLinesPayload = {
    orderedIds: number[];
};
export type ApplyTotalsPayload = {
    Subtotal_BT: number;
    Tax: number;
    Total: number;
};
export type SetPaidPayload = {
    value: boolean;
};
export type EditableLineField = 'quantity' | 'unitPrice' | 'discountPct' | 'taxPct';
