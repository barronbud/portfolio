import { NextResponse } from "next/server";

export interface Order {
    id: number;
    cartID: string;
    wineryID: string;
    orderNumber: string;
    orderDate: string;
    cartStatusID: string;
    cartPaymentTypeID: string;
    memberID: string;
    billFirstName: string;
    billLastName: string;
    billEmail: string;
    billPhone: string;
    billAddress: string;
    billCity: string;
    billState: string;
    billZipCode: string;
    billCountryID: string;
    shipFirstName: string;
    shipLastName: string;
    shipAddress: string;
    shipCity: string;
    shipState: string;
    shipZipCode: string;
    shipCountryID: string;
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    creditCardTypeID: string;
    cardNumber: string;
    cardExpiryMo: string;
    cardExpiryYr: string;
    nameOnCard: string;
}

export async function GET() {
    const orders: Order[] = [
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
        {
            id: 2,
            cartID: "unique-cart-id-2",
            wineryID: "winery-id-2",
            orderNumber: "1001",
            orderDate: new Date().toISOString(),
            cartStatusID: "status-id-2",
            cartPaymentTypeID: "payment-type-id-2",
            memberID: "member-id-2",
            billFirstName: "Alice",
            billLastName: "Smith",
            billEmail: "alice.smith@example.com",
            billPhone: "9876543210",
            billAddress: "789 Elm St",
            billCity: "Somewhere",
            billState: "TX",
            billZipCode: "54321",
            billCountryID: "country-id-1",
            shipFirstName: "Bob",
            shipLastName: "Smith",
            shipAddress: "101 Pine St",
            shipCity: "Elsewhere",
            shipState: "FL",
            shipZipCode: "98765",
            shipCountryID: "country-id-1",
            subtotal: 150.0,
            tax: 12.0,
            shipping: 15.0,
            total: 177.0,
            creditCardTypeID: "cc-type-id-2",
            cardNumber: "************5678",
            cardExpiryMo: "06",
            cardExpiryYr: "2024",
            nameOnCard: "Alice Smith",
        },
    ];

    return NextResponse.json(orders);
}
