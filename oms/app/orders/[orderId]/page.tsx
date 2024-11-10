import CustomerCard from "@/components/customers/card";
import prisma from "@/db/client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function OrderPage({
    params,
}: {
    params: Promise<{ orderId: string }>;
}) {
    const { orderId } = await params;

    // Fetch order with related data
    const order = await prisma.oms_Order.findUnique({
        where: { id: orderId },
        include: {
            customer: true,
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
        <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Order Details
                    </h1>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        {order.status}
                    </span>
                </div>

                {/* Order Info Cards */}
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                        <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Customer Information
                        </h2>
                        <Link
                            href={`/demos/order-management-system/customers/${order.customer.id}`}
                        >
                            <CustomerCard customer={order.customer}>
                                <ExternalLink className="w-4 h-4 float-right" />
                            </CustomerCard>
                        </Link>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                        <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            Order Details
                        </h2>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Order ID:
                                <span className="font-medium text-gray-900 dark:text-white pl-2">
                                    {order.id}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Date:
                                <span className="font-medium text-gray-900 dark:text-white pl-2">
                                    {order.createdAt.toLocaleDateString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Order Items Table */}
                <div className="overflow-hidden bg-white rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-6 border-b dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Order Items
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-700/50">
                                    <th className="px-6 py-4 text-sm font-medium text-left text-gray-500 dark:text-gray-400">
                                        Item
                                    </th>
                                    <th className="px-6 py-4 text-sm font-medium text-left text-gray-500 dark:text-gray-400">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-4 text-sm font-medium text-left text-gray-500 dark:text-gray-400">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 text-sm font-medium text-left text-gray-500 dark:text-gray-400">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {order.orderItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                                            <Link
                                                href={`/demos/order-management-system/products/${item.product.id}`}
                                            >
                                                {item.product.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                                            {item.quantity}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                                            {(item.price / 100).toLocaleString(
                                                "en-US",
                                                {
                                                    style: "currency",
                                                    currency: "USD",
                                                }
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                                            {(
                                                (item.price * item.quantity) /
                                                100
                                            ).toLocaleString("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                            })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Order Summary */}
                    <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Subtotal
                                </span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {(
                                        (order.total -
                                            order.shipping -
                                            order.tax) /
                                        100
                                    ).toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Shipping
                                </span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {(order.shipping / 100).toLocaleString(
                                        "en-US",
                                        {
                                            style: "currency",
                                            currency: "USD",
                                        }
                                    )}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Tax
                                </span>
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {(order.tax / 100).toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </span>
                            </div>
                            <div className="pt-3 mt-3 border-t dark:border-gray-600">
                                <div className="flex justify-between">
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Total
                                    </span>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        {(order.total / 100).toLocaleString(
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
                    </div>
                </div>
            </div>
        </div>
    );
}
