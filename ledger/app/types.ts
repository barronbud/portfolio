export interface Transaction {
    amount?: number;
    category?: string[];
    date?: string;
    merchant_name?: string;
    id: number | string;
}

export interface Preferences {
    flaggedCompanies: string[];
}
