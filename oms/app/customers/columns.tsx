"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-header";

import { ColumnDef } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export type Customers = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

export const columns: ColumnDef<Customers>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Customer" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "createdAt",
        cell: ({ row }) => {
            return row.original.createdAt.toLocaleString();
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
    },
    {
        id: "actions",
        size: 25,
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <Link
                        href={`/demos/order-management-system/customers/${row.original.id}`}
                    >
                        <SearchIcon
                            aria-hidden="true"
                            className="w-5 h-5 mr-1"
                        />
                    </Link>
                </div>
            );
        },
    },
];
