import { test, expect } from "@playwright/test";

test("should load the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("Jeffrey Barron");
});

test("should load the articles section", async ({ page }) => {
    await page.goto("/articles");
    await expect(page.locator("h1")).toHaveText("Articles");

    await page.goto("/articles/splitting-teams-gone-wrong");
    await expect(page.locator("h1")).toHaveText(
        "When Splitting Teams into Backend and Front-end Goes Wrong"
    );
});

test("should load the projects section", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.locator("h1")).toHaveText("Projects");

    await page.goto("/projects/content-build-system-with-python-and-docker");
    await expect(page.locator("h1")).toHaveText(
        "Creating a Content Build System with Python and Docker"
    );
});
