const cron = require("node-cron");
const axios = require("axios");
const cheerio = require("cheerio");
const scraper = require("./scraper");

async function setjobData() {
    try {
        const htmlPage = await axios.get("https://internshala.com/jobs/page-1/");
        const $ = cheerio.load(htmlPage.data);
        const totalPages = $("#total_pages").text().trim();

        for (let i = 1; i <= 20; i++) {
            await scraper.getdatafromsite(i);
            await scraper.delay(10000);
        }

        console.log(`Scraping completed. Total pages: ${totalPages}`);
    } catch (error) {
        console.error("An error occurred while scraping job data:", error);
    }
}

const schedulecron = () => {
    cron.schedule("0 0 * * *", async function () {
        console.log("Running job scraping task...");
        await setjobData();
    });
};

module.exports = { schedulecron };
