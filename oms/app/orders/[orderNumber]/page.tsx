import prisma from "@/db/client";

export default async function OrderPage({
    params,
}: {
    params: Promise<{ orderNumber: string }>;
}) {
    const { orderNumber } = await params;

    // Convert orderNumber to number since our ID is Int in schema
    const orderId = parseInt(orderNumber);

    // Fetch order with related data
    const order = await prisma.oms_Order.findUnique({
        where: { id: orderId },
        include: {
            user: true,
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });

    if (!order) {
        return <div className="p-6">Order not found</div>;
    }

    return (
        <div className="p-6 dark:bg-gray-900">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
                Order Details
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Order ID
                        </p>
                        <p className="font-semibold dark:text-white">
                            {order.id}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Customer
                        </p>
                        <p className="font-semibold dark:text-white">
                            {order.user.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Order Date
                        </p>
                        <p className="font-semibold dark:text-white">
                            {order.createdAt.toLocaleDateString()}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Status
                        </p>
                        <p className="font-semibold dark:text-white">
                            {order.status}
                        </p>
                    </div>
                </div>

                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Order Items
                </h2>
                <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left dark:text-gray-200">
                                    Item
                                </th>
                                <th className="px-4 py-2 text-left dark:text-gray-200">
                                    Quantity
                                </th>
                                <th className="px-4 py-2 text-left dark:text-gray-200">
                                    Price
                                </th>
                                <th className="px-4 py-2 text-left dark:text-gray-200">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className="dark:text-gray-300">
                            {order.orderItems.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t dark:border-gray-700"
                                >
                                    <td className="px-4 py-2">
                                        {item.product.name}
                                    </td>
                                    <td className="px-4 py-2">
                                        {item.quantity}
                                    </td>
                                    <td className="px-4 py-2">
                                        ${Number(item.price).toFixed(2)}
                                    </td>
                                    <td className="px-4 py-2">
                                        $
                                        {(
                                            Number(item.price) * item.quantity
                                        ).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-right">
                    <p className="text-lg font-semibold dark:text-white">
                        Total: ${Number(order.total).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
