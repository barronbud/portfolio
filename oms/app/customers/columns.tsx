"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-header";

import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

export type Customers = {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    createdAt: Date;
};

export const columns: ColumnDef<Customers>[] = [
    {
        accessorKey: "firstName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="First Name" />
        ),
    },
    {
        accessorKey: "lastName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Name" />
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "address",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Address" />
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
                    <Link
                        href={`/demos/order-management-system/customers/${row.original.id}/edit`}
                    >
                        <EditIcon aria-hidden="true" className="w-5 h-5 mr-1" />
                    </Link>
                </div>
            );
        },
    },
];
