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
        <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Product Details
                    </h1>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        In Stock: {product.stock}
                    </span>
                </div>

                {/* Product Info Card */}
                <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                    {/* Basic Info Section */}
                    <div className="p-6 border-b dark:border-gray-700">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                SKU: {product.sku}
                            </p>
                            <div className="mt-2">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {(product.price / 100).toLocaleString(
                                        "en-US",
                                        {
                                            style: "currency",
                                            currency: "USD",
                                        }
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="p-6">
                        <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            Product Information
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Product ID
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-900 dark:text-white">
                                        {product.id}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Description
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-900 dark:text-white">
                                        {product.description ||
                                            "No description available"}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Stock Level
                                    </h4>
                                    <div className="mt-1">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div
                                                    className={`h-2 rounded-full ${
                                                        product.stock > 500
                                                            ? "bg-green-500"
                                                            : product.stock >
                                                              200
                                                            ? "bg-yellow-500"
                                                            : "bg-red-500"
                                                    }`}
                                                    style={{
                                                        width: `${Math.min(
                                                            (product.stock /
                                                                100) *
                                                                100,
                                                            100
                                                        )}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                {product.stock} units
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Price Details
                                    </h4>
                                    <div className="mt-1 p-3 bg-gray-50 rounded-lg dark:bg-gray-700/50">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                Unit Price
                                            </span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                {(
                                                    product.price / 100
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
