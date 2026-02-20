const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({ override: true });

connectDB();

const app = express();

console.log("Gemini Key Length:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : "0");
console.log("OpenAI Key Status:", process.env.OPENAI_API_KEY ? "Loaded" : "Missing");

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/ai', require('./routes/ai'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
