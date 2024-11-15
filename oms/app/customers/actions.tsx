"use server";

import prisma from "@/db/client";
import { revalidatePath } from "next/cache";
import { Customer } from "@/app/types";

export const onCreateCustomer = async (data: Customer): Promise<Customer> => {
    const customerCount = await prisma.oms_Customer.count();

    if (customerCount <= 100) {
        const newCustomer = await prisma.oms_Customer.create({
            data,
        });

        await revalidatePath("/customers");
        return newCustomer;
    } else {
        throw new Error("The maximum number of customers has been reached");
    }
};

export const onEditCustomer = async (data: Customer): Promise<Customer> => {
    const updatedCustomer = await prisma.oms_Customer.update({
        where: {
            id: data.id,
        },
        data,
    });

    await revalidatePath("/customers");
    return updatedCustomer;
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
