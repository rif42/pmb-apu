const { test, expect, devices } = require('@playwright/test');

const baseURL = 'http://127.0.0.1:4173';

function attachRuntimeWatch(page, bucket, label) {
  page.on('console', (message) => {
    if (message.type() === 'error') {
      bucket.consoleErrors.push(`[${label}] ${message.text()}`);
    }
  });

  page.on('pageerror', (error) => {
    bucket.pageErrors.push(`[${label}] ${error.message}`);
  });

  page.on('requestfailed', (request) => {
    const failure = request.failure();
    bucket.requestFailures.push(
      `[${label}] ${request.url()} :: ${failure ? failure.errorText : 'requestfailed'}`,
    );
  });
}

test('desktop theme verification', async ({ browser }) => {
  const runtime = { consoleErrors: [], pageErrors: [], requestFailures: [] };
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1600 },
    colorScheme: 'light',
  });
  const page = await context.newPage();
  attachRuntimeWatch(page, runtime, 'desktop');

  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600);

  const nav = page.locator('#main-nav');
  const heroPrimaryCta = page.locator('#hero-cta a').first();
  await expect(nav).toBeVisible();
  await expect(heroPrimaryCta).toBeVisible();

  const navInitialBg = await nav.evaluate((el) => getComputedStyle(el).backgroundColor);
  await page.screenshot({ path: '.sisyphus/evidence/task-8-desktop-top.png' });
  await page.screenshot({ path: '.sisyphus/evidence/task-8-full-page-desktop.png', fullPage: true });

  await page.mouse.wheel(0, 320);
  await page.waitForTimeout(500);
  const navScrolledBg = await nav.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(navInitialBg).toBe('rgba(21, 55, 32, 0.88)');
  expect(navScrolledBg).toBe('rgba(244, 247, 238, 0.94)');

  await page.locator('#jalur-masuk').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const pathwaysCards = await page.locator('#jalur-masuk .rounded-xl').count();
  expect(pathwaysCards).toBeGreaterThanOrEqual(2);

  await page.locator('#persyaratan').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const requirementsCards = await page.locator('#persyaratan .rounded-xl').count();
  expect(requirementsCards).toBeGreaterThanOrEqual(5);

  await page.locator('section#program').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const programsBg = await page.locator('section#program').evaluate((el) => getComputedStyle(el).backgroundColor);
  const programCards = await page.locator('section#program img').count();
  expect(programCards).toBeGreaterThanOrEqual(7);
  expect(programsBg).toBe('rgb(21, 55, 32)');

  await page.locator('#beasiswa').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const scholarshipBg = await page.locator('#beasiswa').evaluate((el) => getComputedStyle(el).backgroundColor);
  const scholarshipCards = await page.locator('#beasiswa .rounded-xl').count();
  expect(scholarshipCards).toBeGreaterThanOrEqual(4);
  expect(scholarshipBg).toBe('rgb(21, 55, 32)');

  await page.locator('#kontak').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const nameInput = page.locator('#nama');
  await nameInput.focus();
  await page.waitForTimeout(200);
  const contactFocusBorder = await nameInput.evaluate((el) => getComputedStyle(el).borderColor);
  expect(contactFocusBorder).toBe('rgb(47, 107, 59)');

  await page.fill('#nama', 'QA Theme');
  await page.fill('#email', 'qa@example.com');
  await page.fill('#whatsapp', '081234567890');
  await page.selectOption('section#kontak select#program', { index: 1 });
  await page.fill('#pesan', 'Verifikasi tema hijau.');
  await page.click('#submit-btn');
  await page.waitForTimeout(1700);
  await expect(page.locator('#success-state')).toBeVisible();

  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const footerBg = await page.locator('footer').evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(footerBg).toBe('rgb(21, 55, 32)');
  await page.screenshot({ path: '.sisyphus/evidence/task-8-footer-desktop.png' });

  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.75) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1200);
  const hiddenRevealsAfterScroll = await page
    .locator('.scroll-reveal')
    .evaluateAll((elements) =>
      elements.filter((element) => getComputedStyle(element).opacity === '0').length,
    );
  expect(hiddenRevealsAfterScroll).toBe(0);

  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
  expect(runtime.requestFailures).toEqual([]);

  console.log(
    'TASK8_DESKTOP_RESULTS ' +
      JSON.stringify({
        navInitialBg,
        navScrolledBg,
        pathwaysCards,
        requirementsCards,
        programCards,
        programsBg,
        scholarshipCards,
        scholarshipBg,
        contactFocusBorder,
        footerBg,
        hiddenRevealsAfterScroll,
      }),
  );

  await context.close();
});

test('mobile theme verification', async ({ browser }) => {
  const runtime = { consoleErrors: [], pageErrors: [], requestFailures: [] };
  const context = await browser.newContext({
    ...devices['iPhone 12'],
    colorScheme: 'light',
  });
  const page = await context.newPage();
  attachRuntimeWatch(page, runtime, 'mobile');

  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600);

  const nav = page.locator('#main-nav');
  await expect(nav).toBeVisible();
  const navInitialBg = await nav.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(navInitialBg).toBe('rgba(21, 55, 32, 0.88)');

  await page.click('#menu-toggle');
  await page.waitForTimeout(400);
  await expect(page.locator('#mobile-menu')).toBeVisible();
  expect(await page.locator('#menu-toggle').getAttribute('aria-expanded')).toBe('true');
  await page.screenshot({ path: '.sisyphus/evidence/task-8-mobile-menu.png' });

  await page.click('#mobile-menu a[href="#program"]');
  await page.waitForTimeout(900);
  expect(await page.locator('#menu-toggle').getAttribute('aria-expanded')).toBe('false');

  await page.locator('#kontak').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await expect(page.locator('#contact-form')).toBeVisible();

  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await expect(page.locator('footer')).toBeVisible();
  await page.screenshot({ path: '.sisyphus/evidence/task-8-full-page-mobile.png', fullPage: true });

  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.75) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1200);
  const hiddenRevealsAfterScroll = await page
    .locator('.scroll-reveal')
    .evaluateAll((elements) =>
      elements.filter((element) => getComputedStyle(element).opacity === '0').length,
    );
  expect(hiddenRevealsAfterScroll).toBe(0);

  expect(runtime.consoleErrors).toEqual([]);
  expect(runtime.pageErrors).toEqual([]);
  expect(runtime.requestFailures).toEqual([]);

  console.log(
    'TASK8_MOBILE_RESULTS ' +
      JSON.stringify({
        navInitialBg,
        hiddenRevealsAfterScroll,
      }),
  );

  await context.close();
});
