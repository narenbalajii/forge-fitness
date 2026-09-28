const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const urls = [
    "https://forgegym01.netlify.app/",
    "https://forgegym01.netlify.app/programs",
    "https://forgegym01.netlify.app/trainers",
    "https://forgegym01.netlify.app/memberships",
    "https://forgegym01.netlify.app/gallery",
    "https://forgegym01.netlify.app/about",
    "https://forgegym01.netlify.app/contact",
  ];

  console.log("Running Desktop QA...");
  let brokenCount = 0;
  for (const url of urls) {
    const res = await page.goto(url, { waitUntil: 'networkidle' });
    const title = await page.title();
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth
      })).filter(img => !img.complete || img.naturalWidth === 0);
    });
    
    if (brokenImages.length > 0) {
      console.log(`[Broken] ${url}`);
      brokenImages.forEach(img => {
        console.log(`   -> Broken img: ${img.src} | alt: ${img.alt}`);
      });
      brokenCount += brokenImages.length;
    } else {
      console.log(`[OK] ${url}`);
    }
  }

  await browser.close();
  console.log(`Done. Found ${brokenCount} broken images.`);
})();
