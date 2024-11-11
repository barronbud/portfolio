import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export interface Product {
    id: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    sku: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="flex flex-row items-center justify-between gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 m-4">
            <p>{product.name}</p>
            <p>
                {`${(product.price / 100).toLocaleString("en-US", {
                    currency: "USD",
                    style: "currency",
                })}`}
            </p>
            <p>Stock: {product.stock}</p>
            <Button>
                <PlusIcon /> Add to Order
            </Button>
        </div>
    );
}
