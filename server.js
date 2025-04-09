const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Mock Chatbot Responses
const responses = {
    "laws": "Here’s a basic overview of Indian laws (mock data).",
    "police station": "Nearby police station: XYZ Station, 5km away.",
    "cases": "Similar cases: Case #123, Judgment 2023.",
    default: "I’m here to help! Ask about laws, cases, or police stations."
};

app.post('/chat', (req, res) => {
    const message = req.body.message.toLowerCase();
    let reply = responses.default;
    if (message.includes("law")) reply = responses.laws;
    if (message.includes("police")) reply = responses["police station"];
    if (message.includes("case")) reply = responses.cases;
    res.json({ reply });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});