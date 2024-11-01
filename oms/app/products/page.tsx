import prisma from "@/db/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default async function ProductsPage() {
    const productData = await prisma.oms_Product.findMany();
    const products = productData.map((product) => ({
        ...product,
        price: Number(product.price),
    }));

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <DataTable columns={columns} data={products} />
        </section>
    );
}
