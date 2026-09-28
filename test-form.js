const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.request().method() === 'POST') {
      console.log(`[POST RESPONSE] ${response.url()} : ${response.status()}`);
    }
  });

  console.log("Navigating to Contact page...");
  await page.goto("https://forgegym01.netlify.app/contact", { waitUntil: 'networkidle' });

  console.log("Filling form...");
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="phone"]', '555-1234');
  await page.selectOption('select[name="subject"]', 'General Enquiry');
  await page.fill('textarea[name="message"]', 'This is a test message to diagnose Netlify Forms submission. Must be at least 20 chars.');

  console.log("Submitting form...");
  await page.click('button[type="submit"]');

  await page.waitForTimeout(3000);

  const bodyText = await page.innerText('body');
  if (bodyText.includes('problem sending your message')) {
    console.log("Form failed with UI error.");
  } else if (bodyText.includes('MESSAGE SENT')) {
    console.log("Form succeeded in UI.");
  } else {
    console.log("Unknown UI state.");
  }

  await browser.close();
})();
