import StatusBadge from "@/components/orders/status-badge";
import prisma from "@/db/client";
import Link from "next/link";

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
        <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Customer Profile
                    </h1>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        {customer.orders.length} Orders
                    </span>
                </div>

                <div className="mb-8 overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-6 border-b dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-12 h-12 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-400">
                                {customer.firstName[0]}
                                {customer.lastName[0]}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {customer.firstName} {customer.lastName}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {customer.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Contact Information
                                    </h3>
                                    <div className="mt-2 space-y-2">
                                        <p className="text-sm text-gray-900 dark:text-white">
                                            <span className="text-gray-500 dark:text-gray-400 pr-2">
                                                Email:
                                            </span>
                                            {customer.email}
                                        </p>
                                        <p className="text-sm text-gray-900 dark:text-white">
                                            <span className="text-gray-500 dark:text-gray-400 pr-2">
                                                Phone:
                                            </span>
                                            {customer.phone || "Not provided"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Shipping Address
                                    </h3>
                                    <div className="mt-2 space-y-1">
                                        <p className="text-sm text-gray-900 dark:text-white">
                                            {customer.address}
                                        </p>
                                        <p className="text-sm text-gray-900 dark:text-white">
                                            {`${customer.city}, ${customer.state} ${customer.zip}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {customer.orders.length > 0 && (
                    <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                        <div className="p-6 border-b dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Recent Orders
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {customer.orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="p-6 transition hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                >
                                    <Link
                                        href={`/demos/order-management-system/orders/${order.id}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    Order #{order.id}
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {new Date(
                                                        order.createdAt
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {(
                                                        order.total / 100
                                                    ).toLocaleString("en-US", {
                                                        style: "currency",
                                                        currency: "USD",
                                                    })}
                                                </p>
                                                <StatusBadge
                                                    status={order.status}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="mt-4">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span>
                                                {order.orderItems.length} items
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
