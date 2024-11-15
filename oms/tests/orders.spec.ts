import { test, expect } from "@playwright/test";
import { loginAsAdmin } from "./utils/test-utils";

test.describe("Orders Page", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsAdmin(page);
        await page.goto("/demos/order-management-system/orders");
    });

    test("displays orders page", async ({ page }) => {
        await expect(
            page.getByRole("heading", { name: "Orders" })
        ).toBeVisible();
    });

    test("creates new order with existing customer", async ({ page }) => {
        // Click new order button
        await page.getByRole("button", { name: /new order/i }).click();

        // Wait for form
        const form = page.getByTestId("order-form");
        await expect(form).toBeVisible();

        // Fill order form
        await page.getByTestId("customer-search-input").fill("John");
        await page.getByTestId("customer-search-button").click();
        await page
            .getByTestId("customer-search-result")
            .getByText("John Doe")
            .click();

        // Add product to order
        await page.getByTestId("product-search-input").fill("Test Product");
        await page.getByTestId("product-search-button").click();
        await page.getByTestId("add-to-order-button").click();

        // Submit form
        await page.getByTestId("create-order-button").click();

        // Wait for state update
        await page.waitForTimeout(500);

        // Verify order was created
        await expect(
            page.getByTestId("orders-table").getByText("John Doe").first()
        ).toBeVisible();
    });
});
