# ⁉️ Outlandish Request-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/richard-sparq/outlandish-request-as-a-service/main/assets/imgs/outlandish-request-as-a-service.png" alt="Outlandish-Request-as-a-Service Banner" width="70%"/>
</p>


Ever needed a truly outlandish request to lighten the mood or poke fun at project demands?
This tiny API now returns random, absurd, and often hilarious outlandish requests — perfect for team chats, developer banter, or whenever you need a reminder that some requests are just a bit much.

Built for humans, humour, and the joy of the ridiculous.

<!-- GitAds-Verify: QTJORG4C54SQYWQSA8A4A2AZAJFRED6D -->
<p align="center">
  <a href="https://docs.gitads.dev/">
    <img src="https://gitads.dev/assets/images/sponsor/camos/camo-3.png" alt="Sponsored by GitAds" />
  </a>
</p>

<p align="center">
  This project is <strong>sponsored by <a href="https://docs.gitads.dev/docs/getting-started/publishers">GitAds</a></strong>.<br>
  You can get your GitHub repository sponsored too — <a href="https://docs.gitads.dev/docs/getting-started/publishers">create your account now</a>.
</p>

---

## 🚀 API Usage

**Base URL**
```
http://localhost:3000/outlandish_request
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /outlandish_request
```

### ✅ Example Response
```json
{
  "request": "Can you just stick a web UI on the front of this before the sprint demo tomorrow?"
}
```

Use it in apps, bots, landing pages, Slack integrations, or wherever you want to amuse (or gently troll) your team with an outlandish request.

---

## 🛠️ Self-Hosting

Want to run it yourself? It’s lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/rguinn-sparq/outlandish-request-as-a-service.git
cd outlandish-request-as-a-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3000/no
```

You can also change the port using an environment variable:
```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
outlandish-request-as-a-service/
├── index.js                  # Express API
├── outlandish_requests.json  # Outlandish requests data
├── package.json
└── README.md
```

---

## 📦 package.json

For reference, here’s the package config:

```json
{
  "name": "outlandish-request-as-a-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns random outlandish requests.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "hotheadhacker",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)
... and modified by [rguinn-sparq](https://github.com/rguinn-sparq)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.
