import prisma from "@/db/client";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function OrdersPage() {
    const orderData = await prisma.oms_Order.findMany({
        select: {
            id: true,
            status: true,
            shipping: true,
            tax: true,
            total: true,
            createdAt: true,
            customer: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
            _count: {
                select: {
                    orderItems: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const orders = orderData.map((order) => ({
        id: order.id,
        customerName: `${order.customer.firstName} ${order.customer.lastName}`,
        status: order.status,
        shipping: order.shipping / 100,
        tax: order.tax / 100,
        total: order.total / 100,
        createdAt: order.createdAt.toLocaleDateString(),
        items: order._count.orderItems,
    }));

    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Orders</h1>
                <Link href="/demos/order-management-system/orders/create">
                    <Button variant="default">Create new order</Button>
                </Link>
            </div>
            <div data-testid="orders-table">
                <DataTable columns={columns} data={orders} />
            </div>
        </section>
    );
}
