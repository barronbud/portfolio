"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { getProducts } from "@/db/lookups";
import { Button } from "@/components/ui/button";
import ProductCard from "./card";
import { SearchIcon } from "lucide-react";

interface Product {
    id: string;
    name: string;
    price: number;
}
export default function CustomerLookup({
    handleSelect,
}: {
    handleSelect: (product: Product) => void;
}) {
    const queryClient = useQueryClient();

    const [search, setSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const {
        isPending,
        isError,
        data: products,
    } = useQuery({
        queryKey: ["products", searchValue],
        queryFn: () => getProducts(searchValue),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Search for a product"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        data-testid="product-search-input"
                    />
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            setSearchValue(search);
                        }}
                        data-testid="product-search-button"
                    >
                        <SearchIcon />
                    </Button>
                </div>
                {searchValue &&
                    products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => {
                                handleSelect(product);
                                setSearch("");
                                setSearchValue("");
                            }}
                            data-testid="product-search-result"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
            </div>
        </QueryClientProvider>
    );
}
