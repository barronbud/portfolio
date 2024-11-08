import prisma from "@/db/client";

export default async function CustomerPage({
    params,
}: {
    params: Promise<{ customerId: string }>;
}) {
    const { customerId } = await params;

    // Fetch order with related data
    const customer = await prisma.oms_Customer.findUnique({
        where: { id: customerId },
        include: {
            orders: {
                take: 3,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    orderItems: {
                        include: {
                            product: true,
                        },
                    },
                },
            },
        },
    });

    if (!customer) {
        return <div className="p-6">Customer not found</div>;
    }

    return (
        <div className="p-6 dark:bg-gray-900">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
                Customer Details
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Customer ID
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.id}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            First Name
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.firstName}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Last Name
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.lastName}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Email
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.email}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Address
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.address}
                        </p>
                        <p className="font-semibold dark:text-white">
                            {customer.city}, {customer.state} {customer.zip}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4 dark:text-white">
                Recent Orders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customer.orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Order #{order.id}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold text-lg dark:text-white">
                                ${order.total.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span
                                className={`text-sm px-2 py-1 rounded ${
                                    order.status === "completed"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                        : order.status === "pending"
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                }`}
                            >
                                {order.status}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {order.orderItems.length} items
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
