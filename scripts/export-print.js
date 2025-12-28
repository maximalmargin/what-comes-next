import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../print-output');

// Print dimensions (full spread)
const COVER_WIDTH = 5760;
const COVER_HEIGHT = 2944;
const CONTENT_WIDTH = 5824;
const CONTENT_HEIGHT = 2944;

// Page structure:
// 0 = title, 1-5 = patterns with reveals, 6 = finale
const TITLE_PAGE = 0;
const PATTERN_PAGES = [1, 2, 3, 4, 5]; // circles, hearts/stars, flowers, day-night, cat
const FINALE_PAGE = 6;

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
  // Create/clean output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  } else {
    fs.readdirSync(outputDir).forEach(f => fs.unlinkSync(path.join(outputDir, f)));
  }

  console.log('Starting dev server...');
  const server = spawn('npm', ['run', 'dev'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'pipe',
    shell: true
  });

  const serverUrl = 'http://localhost:5173';
  await waitForServer(serverUrl);
  console.log('Server ready!\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let printPageNum = 0;

  async function capturePage(appPageIndex, revealed, label) {
    const isCover = appPageIndex === TITLE_PAGE;
    const width = isCover ? COVER_WIDTH : CONTENT_WIDTH;
    const height = isCover ? COVER_HEIGHT : CONTENT_HEIGHT;

    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });

    // Use URL params for print mode
    const url = `${serverUrl}?print=true&page=${appPageIndex}&revealed=${revealed}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for render
    await new Promise(r => setTimeout(r, 300));

    const filename = `page-${String(printPageNum).padStart(2, '0')}-${label}.png`;
    await page.screenshot({
      path: path.join(outputDir, filename),
      type: 'png'
    });

    console.log(`  [${printPageNum}] ${filename} (${width}x${height})`);
    printPageNum++;
    await page.close();
  }

  try {
    console.log('Exporting print spreads...\n');

    // 1. Cover/title page
    await capturePage(TITLE_PAGE, false, 'cover');

    // 2. Pattern pages: question spread, then answer spread
    for (const pageIdx of PATTERN_PAGES) {
      await capturePage(pageIdx, false, 'question');
      await capturePage(pageIdx, true, 'answer');
    }

    // 3. Finale page
    await capturePage(FINALE_PAGE, false, 'finale');

    console.log('\n✓ Export complete!');
    console.log(`  Output: ${outputDir}`);
    console.log(`  Total spreads: ${printPageNum}`);
    console.log('\nPage order for printing:');
    fs.readdirSync(outputDir).sort().forEach(f => console.log(`  ${f}`));

  } finally {
    await browser.close();
    server.kill();
  }
}

exportPages().catch(console.error);
