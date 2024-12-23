"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-header";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, SearchIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { onDeleteProduct } from "./actions";

export type Product = {
    id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    stock: number;
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "sku",
        size: 50,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="SKU" />
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
    },
    {
        accessorKey: "description",
        size: 300,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
        ),
    },
    {
        accessorKey: "price",
        size: 50,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ({ row }) => {
            return row.original.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        },
    },
    {
        accessorKey: "stock",
        size: 50,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Stock" />
        ),
    },
    {
        id: "actions",
        size: 25,
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <Link
                        href={`/demos/order-management-system/products/${row.original.id}`}
                    >
                        <SearchIcon
                            aria-hidden="true"
                            className="w-5 h-5 mr-1"
                        />
                    </Link>
                    <Link
                        href={`/demos/order-management-system/products/${row.original.id}/edit`}
                    >
                        <EditIcon aria-hidden="true" className="w-5 h-5 mr-1" />
                    </Link>
                    <div
                        onClick={async () => {
                            await onDeleteProduct(row.original.id);
                        }}
                    >
                        <TrashIcon
                            aria-hidden="true"
                            className="w-5 h-5 mr-1"
                        />
                    </div>
                </div>
            );
        },
    },
];
