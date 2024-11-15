import { Page } from "@playwright/test";
import prisma from "@/db/client";

export async function loginAsAdmin(page: Page) {
    // Since we don't have auth yet, this is a placeholder
    await page.goto("/demos/order-management-system");
}

export async function setupTestData(page: Page) {
    const testCustomer = await prisma.oms_Customer.findFirst({
        where: {
            email: "john@example.com",
        },
    });

    if (!testCustomer) {
        // Create a test customer
        const customer = {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            phone: "123-456-7890",
        };

        await prisma.oms_Customer.create({
            data: customer,
        });
    }

    const testProduct = await prisma.oms_Product.findFirst({
        where: {
            sku: "TEST-12345",
        },
    });

    if (!testProduct) {
        // Create a test product
        const product = {
            name: "Test Product",
            description: "Test Description",
            price: 1000, // $10.00
            sku: "TEST-12345",
            stock: 10,
        };

        await prisma.oms_Product.create({
            data: product,
        });
    }
}
