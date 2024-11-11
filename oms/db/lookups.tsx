"use server";

import prisma from "./client";

export async function getCustomers(search: string) {
    if (!search) return [];

    const customers = await prisma.oms_Customer.findMany({
        where: {
            OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
            ],
        },
    });
    return customers;
}

export async function getProducts(search: string) {
    if (!search) return [];

    const products = await prisma.oms_Product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: "insensitive" } },
                { sku: { contains: search, mode: "insensitive" } },
            ],
        },
    });

    return products;
}
