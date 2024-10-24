import Link from "next/link";
import {
    MagnifyingGlassIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { db } from "./api/orders/db";

export default async function Orders() {
    const orders = await db.getOrders();

    return (
        <div>
            <h1>Orders</h1>
            <table className="w-full dark:bg-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Order Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Order Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Items
                        </th>
                        <td></td>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {orders.map((order) => (
                        <tr key={order.id} className="dark:hover:bg-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                                {order.orderNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">{`${order.user.name}`}</td>
                            <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                                {new Date(order.orderDate).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                                ${order.total}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap dark:text-gray-300">
                                {order.items.length}
                            </td>
                            <td className="px-6 py-4 flex items-center">
                                <Link
                                    href={`/demos/order-management-system/orders/${order.id}`}
                                >
                                    <MagnifyingGlassIcon
                                        aria-hidden="true"
                                        className="w-5 h-5 mr-1"
                                        title="View"
                                    />
                                </Link>

                                <Link
                                    href={`/demos/order-management-system/orders/${order.id}`}
                                >
                                    <PencilSquareIcon
                                        aria-hidden="true"
                                        className="w-5 h-5 mr-1"
                                        title="Edit"
                                    />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
