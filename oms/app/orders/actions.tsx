"use server";

import prisma from "@/db/client";
import { revalidatePath } from "next/cache";
import { Order } from "@/app/types";

export const onCreateOrder = async (data: Order) => {
    if (!data.customer.id) {
        throw new Error("Customer ID is required");
    }

    await prisma.oms_Order.create({
        data: {
            customerId: data.customer.id,
            status: "pending",
            total: data.total,
            shipping: data.shipping,
            tax: data.tax,
            orderItems: {
                create: data.orderItems.map((item) => ({
                    productId: item.product.id,
                    quantity: item.quantity,
                    price: item.product.price,
                })),
            },
        },
    });

    await revalidatePath("/orders");
};

export const onProcessOrder = async (orderId: string) => {
    await prisma.oms_Order.update({
        where: { id: orderId },
        data: { status: "completed" },
    });
};

export const onCancelOrder = async (orderId: string) => {
    await prisma.oms_Order.update({
        where: { id: orderId },
        data: { status: "cancelled" },
    });
};
