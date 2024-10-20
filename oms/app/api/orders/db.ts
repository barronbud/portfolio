import { Order } from "@/app/types";

export const db = {
    orders: [
        {
            id: 1,
            cartID: "unique-cart-id-1",
            wineryID: "winery-id-1",
            orderNumber: "1000",
            orderDate: new Date().toISOString(),
            cartStatusID: "status-id-1",
            cartPaymentTypeID: "payment-type-id-1",
            memberID: "member-id-1",
            billFirstName: "John",
            billLastName: "Doe",
            billEmail: "john.doe@example.com",
            billPhone: "1234567890",
            billAddress: "123 Main St",
            billCity: "Anytown",
            billState: "CA",
            billZipCode: "12345",
            billCountryID: "country-id-1",
            shipFirstName: "Jane",
            shipLastName: "Doe",
            shipAddress: "456 Oak St",
            shipCity: "Othertown",
            shipState: "NY",
            shipZipCode: "67890",
            shipCountryID: "country-id-2",
            subtotal: 100.0,
            tax: 8.0,
            shipping: 10.0,
            total: 118.0,
            creditCardTypeID: "cc-type-id-1",
            cardNumber: "************1234",
            cardExpiryMo: "12",
            cardExpiryYr: "2025",
            nameOnCard: "John Doe",
        },
    ] as Order[],

    async getOrders(): Promise<Order[]> {
        // Simulate database query delay
        await new Promise((resolve) => setTimeout(resolve, 100));
        return this.orders;
    },
};
