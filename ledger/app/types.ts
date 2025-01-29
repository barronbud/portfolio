export interface Transaction {
    id: number | string;
    amount: number;
    date: Date;
    isFlagged: boolean;
    merchant: string;
    category: string;
}

export interface Preferences {
    flaggedCompanies: string[];
}
