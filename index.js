const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load outlandish requests from JSON
const outlandishRequests = JSON.parse(fs.readFileSync('./outlandish_requests.json', 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers['cf-connecting-ip'] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

// Random outlandish request endpoint
app.get('/outlandish_request', (req, res) => {
  const request = outlandishRequests[Math.floor(Math.random() * outlandishRequests.length)];
  res.json({ request });
});

// Start server
app.listen(PORT, () => {
  console.log(`Outlandish Request-as-a-Service is running on port ${PORT}`);
});
