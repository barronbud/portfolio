"use server";

import { oms_ProductModel } from "@jeffreyabarron/portfolio-db/prisma/zod";
import { z } from "zod";
import prisma from "@/db/client";
import { revalidatePath } from "next/cache";

export const onCreateProduct = async (
    data: z.infer<typeof oms_ProductModel>
) => {
    const productCount = await prisma.oms_Product.count();

    if (productCount <= 100) {
        await prisma.oms_Product.create({
            data,
        });
    } else {
        throw new Error("The maximum number of products has been reached");
    }

    await revalidatePath("/products");
};

export const onEditProduct = async (data: z.infer<typeof oms_ProductModel>) => {
    await prisma.oms_Product.update({
        where: {
            id: data.id,
        },
        data,
    });

    await revalidatePath("/products");
};

export const onDeleteProduct = async (productId: string) => {
    await prisma.oms_Product.update({
        where: { id: productId },
        data: {
            isActive: false,
        },
    });

    await revalidatePath("/products");
};
