import prisma from "@/db/client";
import { Button } from "@/components/ui/button";
import { onEditProduct } from "@/app/products/actions";
import ProductForm from "@/components/products/form";

export default async function EditProductPage({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    const product = await prisma.oms_Product.findUnique({
        where: {
            id: productId,
        },
    });

    const productData = product
        ? { ...product, price: product.price / 100 }
        : undefined;

    return (
        <div>
            <ProductForm onSaveProduct={onEditProduct} product={productData}>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Save product</Button>
                </div>
            </ProductForm>
        </div>
    );
}
