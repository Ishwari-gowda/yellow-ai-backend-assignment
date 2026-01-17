const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Yellow.ai Chatbot Backend is running");
});

// Intent-based chatbot endpoint
app.post("/chat", (req, res) => {
  const message = req.body.message?.toLowerCase();

  if (!message) {
    return res.status(400).json({
      reply: "Please provide a message"
    });
  }

  let reply;

  if (message.includes("hi") || message.includes("hello")) {
    reply = "Hello! I am the Yellow.ai demo chatbot. How can I help you?";
  } else if (message.includes("price") || message.includes("cost")) {
    reply = "Pricing depends on usage. Please contact sales@yellow.ai";
  } else if (message.includes("support") || message.includes("help")) {
    reply = "You can reach support at support@yellow.ai";
  } else if (message.includes("bye")) {
    reply = "Goodbye! Have a great day 😊";
  } else {
    reply = "Sorry, I didn't understand that. Can you rephrase?";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});