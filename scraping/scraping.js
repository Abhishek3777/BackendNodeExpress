const axios = require("axios");
const cheerio = require("cheerio");

async function scrape() {
    try {
        const response = await axios.get("https://example.com");
        const html = response.data;

        const $ = cheerio.load(html);

        const headings = [];
        $("h1").each((i, el) => {
            headings.push($(el).text());
        });

        console.log(headings);
    }
    catch (err) {
        console.log("Scarping failed", err.message);
    }

}

scrape();
