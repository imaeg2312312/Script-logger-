const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const WEBHOOK = "https://discord.com/api/webhooks/1498310169564807271/twMBY4leRVBneMTfTc6shTZhjKk33F_uHwcx8ynrBN5N4YzpAaia3mHimcPlVX2n2A9K"; // <-- hier dein webhook rein

app.post("/log", async (req, res) => {
    const data = req.body;

    await fetch(WEBHOOK, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: `Message: ${data.content}\nJobId: ${data.jobId}\nPlaceId: ${data.placeId}`
        })
    });

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Server läuft");
});

app.listen(3000, () => console.log("Server läuft auf Port 3000"));
