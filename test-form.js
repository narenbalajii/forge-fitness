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
  await page.goto("https://forgegym01.netlify.app/contact", { waitUntil: 'domcontentloaded' });

  console.log("Filling form...");
  await page.fill('input[name="Full Name"]', 'John Smith Real Client');
  await page.fill('input[name="Email"]', 'john.smith@gmail.com');
  await page.fill('input[name="Phone"]', '555-987-6543');
  await page.selectOption('select[name="Subject"]', 'General Enquiry');
  await page.fill('textarea[name="Message"]', 'Hello, I am interested in joining Forge Fitness. Could you please send me the pricing details for the Pro membership? Thank you!');

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
