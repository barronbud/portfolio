import { FullConfig, chromium } from "@playwright/test";
import { setupTestData } from "../utils/test-utils";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const { baseURL } = config.projects[0].use;

    try {
        await page.goto(baseURL!);
        await setupTestData(page);
    } catch (error) {
        console.error("Error setting up test data:", error);
        throw error; // Re-throw to fail the setup
    } finally {
        await browser.close();
    }
}

export default globalSetup;
