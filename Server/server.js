const express = require("express");
const { getJson } = require("serpapi");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/products", async (req, res) => {
    try {
        const response = await getJson({
            engine: "amazon",
            amazon_domain: "amazon.com",
            k: req.query.k,
            api_key: process.env.SERP_API_KEY
        });

        res.json(response.organic_results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error consultando SerpApi" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});