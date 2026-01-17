
# Yellow.ai Backend Assignment

This project is a backend application developed as part of the Yellow.ai Software Engineer Intern assignment.

The application exposes a simple HTTP server and a chatbot API to confirm that the backend service is running successfully.

---

## Tech Stack
- Node.js
- Express.js

---

## Project Structure
- server.js : Main server file
- package.json : Project dependencies and scripts
- README.md : Project documentation

---

## How to Run the Project Locally

1. Clone the repository:
   git clone https://github.com/Ishwari-gowda/yellow-ai-backend-assignment.git

2. Navigate to the project directory:
   cd yellow-ai-assignment

3. Install dependencies:
   npm install

4. Start the server:
   node server.js

5. Server will run at:
   http://localhost:3000

---

## Hosted Demo URL

The application is deployed on Render (Free Tier):

https://yellow-ai-backend-assignment.onrender.com

Note: Free tier may have a cold-start delay of 30–50 seconds.

---

## Architecture / Design Explanation

The backend is built using Express.js.
It exposes REST APIs and processes chatbot messages using simple keyword-based intent detection.
The architecture is lightweight, modular, and easy to deploy on cloud platforms.

---

## Chatbot Design

This project implements a basic intent-based chatbot backend.

### Supported Intents
- Greeting (hi, hello)
- Pricing queries (price, cost)
- Support queries (help, support)
- Goodbye (bye)

### API Endpoint

POST /chat

Request Body:
{
  "message": "hi"
}

Response:
{
  "reply": "Hello! I am the Yellow.ai demo chatbot. How can I help you?"
}
## Architecture / Design Explanation

The application is built using Node.js and Express.js.
It follows a simple architecture where an Express server listens for HTTP requests.
A basic API endpoint is exposed to verify that the backend service is running.
This design keeps the application lightweight, easy to understand, and easy to deploy.
