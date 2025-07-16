# 🔗 URL Shortener

A simple and efficient URL shortener web application built using Node.js, Express, MongoDB, and EJS.

## 🚀 Live Demo

🔗 [Try the Live App](https://url-shortener-2m77.onrender.com)

---

## 📌 Features

- Convert long URLs into short, shareable links
- Automatically generates a unique short code
- Redirects users to the original URL using the short code
- Stores all data in MongoDB
- Clean UI with EJS templating
- Deployed on Render

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Templating Engine:** EJS
- **Unique Code Generator:** shortid
- **Environment Management:** dotenv
- **Deployment:** Render

---

## 📦 Packages Used

```json
"dotenv": "^16.5.0",
"ejs": "^3.1.10",
"express": "^5.1.0",
"mongoose": "^8.14.1",
"shortid": "^2.2.17"
```

## 🧑‍💻 How to Run Locally

1. Clone the Repository
```
git clone https://github.com/Vaisujaiswal/URL_Shortener.git
cd URL_Shortener

```
2. Install Dependencies
```
npm install
```

3. Set Up Environment Variables: Create a .env file in the root folder:
```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

4. Start the Server
```
npm start
```

Visit: http://localhost:3000 in your browser.

