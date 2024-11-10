"use server";

import { oms_CustomerModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { z } from "zod";
import prisma from "@/db/client";
import { revalidatePath } from "next/cache";

export const onCreateCustomer = async (
    data: z.infer<typeof oms_CustomerModel>
) => {
    const customerCount = await prisma.oms_Customer.count();

    if (customerCount <= 100) {
        await prisma.oms_Customer.create({
            data,
        });
    } else {
        throw new Error("The maximum number of customers has been reached");
    }

    await revalidatePath("/customers");
};

export const onEditCustomer = async (
    data: z.infer<typeof oms_CustomerModel>
) => {
    await prisma.oms_Customer.update({
        where: {
            id: data.id,
        },
        data,
    });

    await revalidatePath("/customers");
};

export const onDeleteCustomer = async (customerId: string) => {
    await prisma.oms_Customer.update({
        where: { id: customerId },
        data: {
            isActive: false,
        },
    });

    await revalidatePath("/customers");
};
