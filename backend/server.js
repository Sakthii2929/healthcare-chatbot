const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// POST request to handle user messages
app.post("/message", (req, res) => {
  const userMsg = req.body.message.toLowerCase();
  let reply = "Please consult a doctor.";

  // Basic symptom responses
  if (userMsg.includes("fever")) {
    reply = "You may have fever. Drink fluids, take rest, and consider paracetamol if needed.";
  } 
  else if (userMsg.includes("cold")) {
    reply = "Common cold detected. Stay warm, hydrate, and take vitamin C.";
  } 
  else if (userMsg.includes("headache")) {
    reply = "Headache can occur due to stress or dehydration. Drink water and rest.";
  } 
  else if (userMsg.includes("stomach pain")) {
    reply = "Stomach pain may be due to indigestion. Eat light food and avoid spicy items.";
  } 
  else if (userMsg.includes("cough")) {
    reply = "Cough detected. Drink warm fluids and rest. Use honey or cough syrup if needed.";
  } 
  // Emergency detection
  else if (userMsg.includes("chest pain") || userMsg.includes("difficulty breathing")) {
    reply = "⚠️ This may be an emergency! Please call a doctor or go to the hospital immediately.";
  }
  // AI integration placeholder
  else if (userMsg.includes("ai")) {
    reply = "AI feature coming soon! Currently basic responses are active.";
  }
  // Database placeholder
  else if (userMsg.includes("record") || userMsg.includes("history")) {
    reply = "Patient history feature will be integrated with MongoDB soon.";
  }

  res.json({ reply });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

