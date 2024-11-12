import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: [".env", ".env.local"] });

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "list",
    globalSetup: "./tests/setup/global-setup.ts",
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: process.env.MAIN_DOMAIN,

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
    webServer: [
        {
            command: "npm run dev",
            url: "http://127.0.0.1:3000",
            reuseExistingServer: !process.env.CI,
            cwd: path.resolve(__dirname, "../oms"),
        },

        {
            command: "npm run dev",
            url: "http://127.0.0.1:3001",
            reuseExistingServer: !process.env.CI,
            cwd: path.resolve(__dirname, "../main"),
        },
    ],
});
