import { Order } from "@/app/types";

export const db = {
    orders: [
        {
            id: 1,
            cartID: "unique-cart-id-1",
            orderNumber: "1000",
            orderDate: new Date().toISOString(),
            user: {
                id: 1,
                name: "Jack Doe",
            },
            subtotal: 100.0,
            tax: 8.0,
            shipping: 10.0,
            total: 118.0,
            items: [
                {
                    id: 1,
                    orderID: 1,
                    product: {
                        id: 1,
                        name: "Product 1",
                        price: 100.0,
                    },
                    quantity: 1,
                },
                {
                    id: 2,
                    orderID: 1,
                    product: { id: 2, name: "Product 2", price: 200.0 },
                    quantity: 2,
                },
            ],
        },
        {
            id: 2,
            cartID: "unique-cart-id-2",
            orderNumber: "1001",
            orderDate: new Date().toISOString(),
            user: {
                id: 2,
                name: "Jane Doe",
            },
            subtotal: 100.0,
            tax: 8.0,
            shipping: 10.0,
            total: 118.0,
            items: [
                {
                    id: 3,
                    orderID: 2,
                    product: { id: 3, name: "Product 3", price: 300.0 },
                    quantity: 3,
                },
            ],
        },
    ] as Order[],

    async getOrders(): Promise<Order[]> {
        // Simulate database query delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        return this.orders;
    },

    async getOrder(id: string): Promise<Order | undefined> {
        return this.orders.find((order) => order.id === parseInt(id));
    },
};
