import { test, expect } from "@playwright/test";
import { loginAsAdmin } from "./utils/test-utils";

test.describe("Customers Page", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsAdmin(page);
        await page.goto("/demos/order-management-system/customers");
    });

    test("displays customer list", async ({ page }) => {
        await expect(
            page.getByRole("heading", { name: "Customers" })
        ).toBeVisible();
        await expect(page.getByTestId("customers-table")).toBeVisible();
    });

    test("search customers functionality", async ({ page }) => {
        const searchInput = page.getByPlaceholder("Filter...");
        await searchInput.fill("John");
        await page.waitForTimeout(500);
        await expect(
            page.getByTestId("customers-table").getByText("john@example.com")
        ).toBeVisible();
    });
});
