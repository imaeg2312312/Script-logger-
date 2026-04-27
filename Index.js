const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const WEBHOOK = "DEIN_DISCORD_WEBHOOK"; // <-- hier dein webhook rein

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
