import TransactionTable from "@/components/transactionTable";
import TransactionSummary from "@/components/transactionSummary";
import { Transaction } from "@/app/types";
import prisma from "@/db/client";
// import { usePreferences } from "@/hooks/usePreferences";

export default async function TransactionList() {
    const transactionData = await prisma.ledger_Transaction.findMany({
        select: {
            id: true,
            amount: true,
            date: true,
            merchant: {
                select: {
                    name: true,
                    isFlagged: true,
                },
            },
            category: {
                select: {
                    name: true,
                },
            },
        },
    });

    const transactions = transactionData.map((transaction) => ({
        id: transaction.id,
        amount: transaction.amount,
        date: transaction.date,
        isFlagged: transaction.merchant?.isFlagged,
        merchant: transaction.merchant?.name,
        category: transaction.category?.name,
    }));

    // const { data: preferences } = usePreferences();

    if (!transactions) return [];

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
                <TransactionTable data={transactions} />
                <TransactionSummary />
            </div>
        </>
    );
}
