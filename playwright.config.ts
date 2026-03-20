import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://playwright.dev/docs/test-configuration#launching-a-browser-with-custom-environment-variables
 */
function getEnv() {
  return {
    CI: process.env.CI === "true",
  };
}

export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test files behind */
  forbidOnly: !!getEnv().CI,
  /* Retry on CI only */
  retries: getEnv().CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: getEnv().CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  use: {
    /* Collect trace when retrying on CI. */
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
    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
});
