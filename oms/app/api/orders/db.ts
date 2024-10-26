import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const orders = await prisma.oms_Order.findMany({
    include: {
        user: true,
        orderItems: {
            include: {
                product: true,
            },
        },
    },
});

export default orders;
