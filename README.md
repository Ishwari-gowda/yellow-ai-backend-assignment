# Yellow.ai Backend Assignment

This project is a backend application developed as part of the Yellow.ai Software Engineer Intern assignment.

The application exposes a simple HTTP server that responds with a message to confirm that the backend service is running successfully.

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
   git clone <repository-url>

2. Navigate to the project directory:
   cd yellow-ai-assignment

3. Install dependencies:
   npm install

4. Start the server:
   node server.js

5. The server will run on:
   http://localhost:3000

--

## Hosted Demo URL

The application is deployed on Render (Free Tier):

<PASTE YOUR RENDER LIVE URL HERE>

Note: The free tier may have a cold-start delay of up to 30–50 seconds.

---

## Architecture / Design Explanation

The application uses a simple Express.js server that listens for incoming HTTP requests.
A single route is exposed to return a response confirming that the backend is running.
This design keeps the application lightweight, easy to understand, and easy to deploy.

---

 ## Demo

A short demo video is included to show:
- GitHub repository
- Live deployed URL
- Server response in browser
## Chatbot Design

This project implements an intent-based chatbot backend using Node.js and Express.

The chatbot detects user intent using simple keyword matching and responds accordingly.

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
