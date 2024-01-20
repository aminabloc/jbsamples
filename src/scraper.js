const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://jobs.lever.co/altarum/');

    const jobs = await page.$$eval('.posting', (elements) =>
      elements.map((e) => {
        const title = e.querySelector('.posting-title > h5').textContent.trim();
        const location = e.querySelector('.location').textContent.trim();
        const url = e.querySelector('.posting-title').href;

        return {
          title,
          company: "Altarum",
          location,
          url,
        };
      })
    );

    console.log(jobs);

    // Optionally save the data to a file
    fs.writeFileSync('altarum_jobs.json', JSON.stringify(jobs, null, 2));

    await browser.close();
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

run();