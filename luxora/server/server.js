const express = require('express');
const puppeteer = require('puppeteer');
const pg = require('pg')
const app = express();
const port = 5000;

app.use(express.json())

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "luxora",
    password: "Ansh@2004",
    port: 5432,
});
db.connect();

app.get('/', (req, res) => {
    res.send("this is my Server");
})

app.post('/Signup', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        // Inserting the data
        await db.query(
            "INSERT INTO authentication (email, password) VALUES ($1, $2)",
            [email, password]
        );

        // Sending success
        res.status(200).json({ message: "User signed up successfully!" });
    } catch (err) {
        console.error("Error signing up:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const passResult = await db.query('SELECT password FROM authentication WHERE email = $1', [email]);
        const pass = passResult.rows[0]?.password;

        if (pass && pass === password) {
            // Success login
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ errorMessage: "Invalid email or password" });
        }

    }
    catch (err) {
        console.log("Error in loggin", err);
        res.status(500).json({ errorMessage: "Internal server error" });
    }
});

async function getProductDataAmazon(link) {
    let browser;
    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setViewport({
            width: 1080,
            height: 760,
        });

        // Change navigation timeout
        await page.setDefaultNavigationTimeout(30000); // 30 seconds

        // Navigate to the Amazon search results page
        await page.goto(link);

        // Array to store the product data
        const data = [];

        // Select all elements with "role=listitem"
        const productElements = await page.$$('[role="listitem"]');

        // Loop through the first 7 product elements
        for (let i = 0; i < Math.min(7, productElements.length); i++) {
            const product = productElements[i];

            // Extract product details
            const image = await product.$eval('img', img => img.src).catch(() => null);
            const name =  await product.$eval('h2 span', span => span.innerText).catch(() => null);
            const description = await product.$eval('a h2 span', span => span.innerText).catch(() => null);
            const price = await product.$eval('.a-price-whole', span => span.innerText).catch(() => null);

            // Push the product data to the array
            data.push({ image, name, description, price });
        }

        return data; // Return the scraped data
    } catch (err) {
        console.error('Error scraping Amazon:', err);
        return [];
    } finally {
        if (browser) await browser.close(); // Ensure browser closes
    }
}


app.post('/Home', async (req, res) => {
    const input = req.body.searchedItem;

    if (!input) {
        return res.status(400).json({ message: 'Please provide a search term' });
    }

    const amazonURL = encodeURI(`https://www.amazon.in/s?k=${input}`);
    const flipkartURL = encodeURI(`https://www.flipkart.com/search?q=${input}`);
    const myntraURL = encodeURI(`https://www.myntra.com/${input}`);

    try {
        const AmazonproductData = await getProductDataAmazon(amazonURL); // Await the scraped data
        const FlipkartproductData = await getProductDataFlipkart(flipkartURL); // Await the scraped data
        const MyntraproductData = await getProductDataMyntra(myntraURL); // Await the scraped data

        // Combine the data from all sources
        const productData = [
            { name: 'Amazon', products: AmazonproductData },
            { name: 'Flipkart', products: FlipkartproductData },
            { name: 'Myntra', products: MyntraproductData },
        ];

        console.log(productData);
        // Send the data back as JSON
        res.status(200).json({ products: productData });
    } catch (err) {
        console.error('Error in /Home endpoint:', err);
        res.status(500).json({ message: 'Failed to fetch product data' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})