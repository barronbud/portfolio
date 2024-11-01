import prisma from "@/db/client";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default async function OrdersPage() {
    const orderData = await prisma.oms_Order.findMany({
        select: {
            id: true,
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
    });

    const orders = orderData.map((order) => ({
        id: order.id,
        customerName: `${order.customer.firstName} ${order.customer.lastName}`,
        total: Number(order.total),
        createdAt: order.createdAt.toLocaleDateString(),
        items: order._count.orderItems,
    }));

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <DataTable columns={columns} data={orders} />
        </section>
    );
}
