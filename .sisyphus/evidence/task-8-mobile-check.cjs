const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...devices['iPhone 12'],
    colorScheme: 'light',
  });
  const page = await context.newPage();
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
    const failure = request.failure();
    issues.request.push(
      `${request.url()}: ${failure ? failure.errorText : 'requestfailed'}`,
    );
  });

  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600);

  await page.click('#menu-toggle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: '.sisyphus/evidence/task-8-mobile-menu.png' });

  const expanded = await page.locator('#menu-toggle').getAttribute('aria-expanded');
  const menuOpacity = await page
    .locator('#mobile-menu')
    .evaluate((el) => getComputedStyle(el).opacity);
  const firstLinkBox = await page.locator('.mobile-nav-link').first().boundingBox();
  const panelBox = await page.locator('.mobile-menu-panel').boundingBox();

  await page.click(".mobile-nav-link[href='#program']");
  await page.waitForTimeout(900);

  const collapsed = await page.locator('#menu-toggle').getAttribute('aria-expanded');
  const atProgram = await page.evaluate(() => window.location.hash);

  const result = {
    expanded,
    menuOpacity,
    collapsed,
    atProgram,
    firstLinkBox,
    panelBox,
    issues,
  };

  console.log(JSON.stringify(result, null, 2));

  await browser.close();

  if (
    expanded !== 'true' ||
    menuOpacity !== '1' ||
    collapsed !== 'false' ||
    atProgram !== '#program' ||
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
