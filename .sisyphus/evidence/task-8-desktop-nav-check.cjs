const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const issues = { console: [], page: [], request: [] };

  page.on('console', (message) => {
    if (message.type() === 'error') {
      issues.console.push(message.text());
    }
  });

  page.on('pageerror', (error) => {
    issues.page.push(error.message);
  });

  page.on('requestfailed', (request) => {
    issues.request.push(request.url());
  });

  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600);
  await page.click("a.nav-link[href='#jalur-masuk']");
  await page.waitForTimeout(900);

  const active = await page
    .locator("a.nav-link[href='#jalur-masuk']")
    .getAttribute('data-active');
  const color = await page
    .locator("a.nav-link[href='#jalur-masuk']")
    .evaluate((el) => getComputedStyle(el).color);
  const hash = await page.evaluate(() => window.location.hash);

  const result = { active, color, hash, issues };
  console.log(JSON.stringify(result, null, 2));

  await browser.close();

  if (
    active !== 'true' ||
    hash !== '#jalur-masuk' ||
    issues.console.length ||
    issues.page.length ||
    issues.request.length
  ) {
    process.exit(1);
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
