"use client";

import TransactionTable from "@/components/transactionTable";
import TransactionSummary from "@/components/transactionSummary";
import { Transaction } from "@/app/types";
// import { usePreferences } from "@/hooks/usePreferences";

function TransactionList() {
    const data: Transaction[] = [];

    // const { data: preferences } = usePreferences();

    if (!data) return [];

    // const flaggedCompanies = preferences?.flaggedCompanies || [];

    // const transactionTotal = data.reduce((acc, transaction) => {
    //     return acc + (transaction?.amount || 0);
    // }, 0);
    // const flaggedTransactionTotal = data.reduce((acc, transaction) => {
    //     return (
    //         acc +
    //         (flaggedCompanies.includes(transaction?.merchant_name || "")
    //             ? transaction?.amount || 0
    //             : 0)
    //     );
    // }, 0);
    // const percentageFlagged =
    //     (flaggedTransactionTotal / transactionTotal) * 100;

    return (
        <>
            <h1>Wallet</h1>
            <div className="flex flex-row gap-2">
                <TransactionTable data={data} />
                <TransactionSummary />
            </div>
        </>
    );
}

export default TransactionList;
