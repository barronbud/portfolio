import prisma from "@/db/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ProductsPage() {
    const productData = await prisma.oms_Product.findMany({
        where: {
            isActive: true,
        },
        orderBy: {
            name: "asc",
        },
    });
    const products = productData.map((product) => ({
        ...product,
        price: product.price / 100,
    }));

    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link href="/demos/order-management-system/products/create">
                    <Button
                        variant="default"
                        data-testid="create-product-button"
                    >
                        Create new product
                    </Button>
                </Link>
            </div>
            <div data-testid="products-table">
                <DataTable columns={columns} data={products} />
            </div>
        </section>
    );
}
