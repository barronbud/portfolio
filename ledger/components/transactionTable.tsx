"use client";

// import { useQueryClient } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from "@/components/ui/table";
// import { usePreferences } from "../hooks/usePreferences";
import { Transaction } from "@/app/types";

function TransactionTable({ data }: { data: Transaction[] }) {
    // const queryClient = useQueryClient();

    // const { data: preferences } = usePreferences();

    const flaggedCompanies: string[] = [];

    const handleFlag = async (name: string, isFlagged: boolean | string) => {
        console.log(name, isFlagged);
    };

    // const handleFlag = async (name: string, isFlagged: boolean) => {
    //     const newFlaggedCompanies = isFlagged
    //         ? [...flaggedCompanies, name]
    //         : flaggedCompanies.filter((company) => company !== name);

    //     await fetch(
    //         `${
    //             import.meta.env.VITE_BEZOS_WALLET_BACKEND_URL
    //         }/api/userpreferences`,
    //         {
    //             method: "POST",
    //             body: JSON.stringify({ flaggedCompanies: newFlaggedCompanies }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );

    //     queryClient.invalidateQueries({
    //         queryKey: ["preferences"],
    //     });
    // };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Merchant</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((transaction: Transaction) => (
                    <TableRow key={transaction.id}>
                        <TableCell>
                            <Checkbox
                                checked={transaction?.isFlagged}
                                onCheckedChange={(checked) =>
                                    handleFlag(
                                        transaction?.merchant || "",
                                        checked
                                    )
                                }
                            />
                        </TableCell>
                        <TableCell>
                            {transaction.date
                                ? transaction.date.toLocaleDateString()
                                : ""}
                        </TableCell>
                        <TableCell>
                            {transaction?.isFlagged && (
                                <Badge color="destructive">
                                    {transaction?.merchant || ""}
                                </Badge>
                            )}
                            {!transaction?.isFlagged && transaction?.merchant}
                        </TableCell>
                        <TableCell>{transaction?.category}</TableCell>
                        <TableCell>
                            {transaction?.amount
                                ? transaction?.amount.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                  })
                                : ""}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TransactionTable;
