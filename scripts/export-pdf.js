import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../print-output');

// Print dimensions
const COVER_WIDTH = 5760;
const COVER_HEIGHT = 2944;
const CONTENT_WIDTH = 5824;
const CONTENT_HEIGHT = 2944;

// Total pages (from pages.js)
const TOTAL_PAGES = 7;

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  throw new Error('Server did not start');
}

async function exportPages() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Starting dev server...');
  const server = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'pipe',
    shell: true
  });

  let serverUrl = 'http://localhost:5173';

  // Wait for server to be ready
  await waitForServer(serverUrl);
  console.log('Server ready!');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (let pageIndex = 0; pageIndex < TOTAL_PAGES; pageIndex++) {
      const iscover = pageIndex === 0;
      const width = iscover ? COVER_WIDTH : CONTENT_WIDTH;
      const height = iscover ? COVER_HEIGHT : CONTENT_HEIGHT;

      console.log(`Exporting page ${pageIndex + 1}/${TOTAL_PAGES} (${width}x${height})...`);

      const page = await browser.newPage();

      // Set viewport to exact print dimensions
      await page.setViewport({
        width,
        height,
        deviceScaleFactor: 1
      });

      // Navigate to the app
      await page.goto(serverUrl, { waitUntil: 'networkidle0' });

      // Navigate to the correct page by simulating arrow key presses
      for (let i = 0; i < pageIndex; i++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 400)); // Wait for animation
      }

      // Wait for animations to settle
      await new Promise(r => setTimeout(r, 800));

      // Hide navigation for print
      await page.evaluate(() => {
        const nav = document.querySelector('[class*="fixed bottom"]');
        if (nav) nav.style.display = 'none';
      });

      // Take screenshot
      const filename = `page-${String(pageIndex).padStart(2, '0')}-${iscover ? 'cover' : 'content'}.png`;
      await page.screenshot({
        path: path.join(outputDir, filename),
        type: 'png',
        fullPage: false
      });

      console.log(`  Saved: ${filename}`);
      await page.close();
    }

    console.log('\n✓ All pages exported to:', outputDir);
    console.log('\nExported files:');
    fs.readdirSync(outputDir).forEach(f => console.log(`  - ${f}`));

  } finally {
    await browser.close();
    server.kill();
  }
}

exportPages().catch(console.error);
