## **LUXORA: Multi-Platform Product Aggregator** 
LUXORAis a full-stack web application designed to simplify the online shopping experience by aggregating products from multiple e-commerce platforms like 
**Amazon** and **Flipkart** based on user search queries. The goal of **LUXORA** is to reduce the time spent browsing different platforms by displaying 
relevant product results from all major platforms in one place. Users can search for any product (e.g., *"white t-shirt"* or *"smartphone"*) and get real-time 
results from various e-commerce sites. Clicking on any product will redirect the user to the respective platform for purchase.  

 **How It Works**
- **Web Scraping with Puppeteer:** LUXORA uses **Puppeteer**, a headless browser automation library for **Node.js**, to scrape product data (title, price, image, and link) from multiple e-commerce platforms. Instead of using APIs, Puppeteer automates web browsers to extract live product information, ensuring real-time data accuracy.  
- **Unified Search Platform:** Users can simply enter a product name, and LUXORA will fetch matching results from **Amazon**, **Flipkart**, and **Meesho**, displaying them side-by-side for easy comparison.  
- **Redirection to Platforms:** When users find a product they like, they can click on it, and LUXORA will instantly redirect them to the original e-commerce platform for checkout.  
- **Efficient Crawling:** The scraping logic is optimized to avoid rate-limiting, ensuring fast and efficient data retrieval without compromising performance.  

**Tech Stack**
- **React.js:** Used for building the frontend, providing a fast, responsive, and user-friendly interface.  
- **Node.js + Express.js:** Powers the backend, handling API requests, scraping logic, and serving the data to the frontend.  
- **Puppeteer:** Handles web scraping by automating browser interactions to fetch real-time product information from e-commerce websites.  
- **PostgreSQL:** Serves as the database to store user search history, logs, and interactions for future reference.  

**Why LUXORA?**
- **Saves Time:** Eliminates the need to browse different platforms individually, displaying all products in one place.  
- **Real-Time Data:** Uses Puppeteer to ensure that product information (price, availability, etc.) is always up-to-date.  
- **Simple & Fast Navigation:** Offers a clean and responsive user interface with minimal distractions.  
- **Seamless Redirection:** Allows users to instantly redirect to the respective e-commerce site for purchasing without any hassle.  

**LUXORA** aims to revolutionize the online shopping experience by acting as a bridge between users and multiple e-commerce platforms, ensuring easy access to accurate product information and comparison options.
