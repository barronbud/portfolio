import prisma from "@/db/client";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    // Fetch order with related data
    const product = await prisma.oms_Product.findUnique({
        where: { id: productId },
    });

    if (!product) {
        return <div className="p-6">Product not found</div>;
    }

    return (
        <div className="p-6 dark:bg-gray-900">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
                Product Details
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Product ID
                        </p>
                        <p className="font-semibold dark:text-white">
                            {product.id}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Product Name
                        </p>
                        <p className="font-semibold dark:text-white">
                            {product.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">SKU</p>
                        <p className="font-semibold dark:text-white">
                            {product.sku}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Description
                        </p>
                        <p className="font-semibold dark:text-white">
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Price
                        </p>
                        <p className="font-semibold dark:text-white">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Stock
                        </p>
                        <p className="font-semibold dark:text-white">
                            {product.stock}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
