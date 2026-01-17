
# Yellow.ai Backend Assignment

## Description
This project is a simple backend application built using Node.js and Express.
It demonstrates how to create a basic server and expose an API endpoint.

## Tech Stack
- Node.js
- Express.js

## Setup Instructions
1. Install Node.js (v16 or above)
2. Navigate to the project folder:
   cd yellow-ai-assignment
3. Install dependencies using:
   npm install

## How to Run
Run the following command:
   node server.js
The server starts on port 3000.

## API Endpoint
- GET /
  - Returns a message indicating the server is running.

- POST /chat
  - Example Request Body:
    {
      "message": "hi"
    }
  - Example Response:
    {
      "reply": "Hello! I am the Yellow.ai demo chatbot. How can I help you?"
    }

## Hosted Demo URL
The application is deployed on Render (Free Tier):
<PASTE YOUR RENDER LIVE URL HERE>

Note: Free tier may have cold-start delay of 30–50 seconds.

## Architecture / Design Explanation
- The project uses Node.js with Express.js
- A simple server exposes HTTP endpoints
- POST /chat implements a basic keyword-based intent detection for the chatbot
- Lightweight, easy to understand, easy to deploy

## Demo
- Demo video shows:
  - GitHub repository
  - Live deployed URL
  - Server response in browser