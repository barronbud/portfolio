"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { getCustomers } from "@/db/lookups";
import { Button } from "@/components/ui/button";
import { Customer } from "@/components/customers/card";

export default function CustomerLookup({
    handleSelect,
}: {
    handleSelect: (customer: Customer) => void;
}) {
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const {
        isPending,
        isError,
        data: customers,
    } = useQuery({
        queryKey: ["customers", searchValue],
        queryFn: () => getCustomers(searchValue),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Search for a customer"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            setSearchValue(search);
                        }}
                    >
                        Search
                    </Button>
                </div>
                {searchValue &&
                    customers.map((customer) => (
                        <div
                            key={customer.id}
                            onClick={() => {
                                handleSelect(customer);
                                setSearch("");
                                setSearchValue("");
                            }}
                        >
                            {customer.firstName} {customer.lastName}
                        </div>
                    ))}
            </div>
        </QueryClientProvider>
    );
}
