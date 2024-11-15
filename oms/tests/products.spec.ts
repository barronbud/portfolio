import { test, expect } from "@playwright/test";

test.describe("Products Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/demos/order-management-system/products");
    });

    test("displays products list", async ({ page }) => {
        await expect(
            page.getByRole("heading", { name: "Products" })
        ).toBeVisible();
        await expect(page.getByTestId("products-table")).toBeVisible();
    });

    test("product search functionality", async ({ page }) => {
        const searchInput = page.getByPlaceholder("Filter...");
        await searchInput.fill("Test Product");
        await page.waitForTimeout(500);
        await expect(
            page.getByTestId("products-table").getByText("Test Product")
        ).toBeVisible();
    });
});
