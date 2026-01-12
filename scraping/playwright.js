const { chromium } = require("playwright");

async function scrapePrice(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(url, { timeout: 30000, waitUntil: "domcontentloaded" });

    await page.waitForSelector("h1");

    const title = await page.locator("h1").innerText();
    const para = await page.locator("p").nth(0).innerText();
    const para1 = await page.locator("p").nth(1).innerText();

    return { title, para, para1 };
  } catch (err) {
    console.error("Scrape failed:", err.message);
    throw err;
  } finally {
    await browser.close();
  }
}

// CALL IT
(async () => {
  const result = await scrapePrice("https://example.com");
  console.log(result);
})();
