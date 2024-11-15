"use client";

import StatusBadge from "@/components/orders/status-badge";
import { DataTableColumnHeader } from "@/components/ui/data-table-header";
import { ColumnDef } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
export type Order = {
    id: string;
    customerName: string;
    status: string;
    shipping: number;
    tax: number;
    total: number;
    createdAt: string;
    items: number;
};

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "customerName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Customer" />
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            return <StatusBadge status={row.original.status} />;
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Order Date" />
        ),
    },
    {
        accessorKey: "shipping",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Shipping" />
        ),
        cell: ({ row }) => {
            return row.original.shipping.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        },
    },
    {
        accessorKey: "tax",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tax" />
        ),
        cell: ({ row }) => {
            return row.original.tax.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        },
    },
    {
        accessorKey: "total",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total" />
        ),
        cell: ({ row }) => {
            return row.original.total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        },
    },
    {
        accessorKey: "items",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Items" />
        ),
    },
    {
        id: "actions",
        size: 25,
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <Link
                        href={`/demos/order-management-system/orders/${row.original.id}`}
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
