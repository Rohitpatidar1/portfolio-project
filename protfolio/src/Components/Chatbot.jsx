// src/Components/Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import feather from "feather-icons";
// Aapki API functions ko import karein
import { getAllProjects, getAllSkills } from "../api/api";

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  useEffect(() => {
    feather.replace();
  }, [name]); // Icon badalne par replace karein
  return <i data-feather={name} className={className} />;
};

// --- Naya Bot Logic (Async + API Calls) ---
const getBotResponse = async (userInput) => {
  const text = userInput.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hi there! How can I assist you with this portfolio?";
  }

  if (text.includes("contact") || text.includes("email")) {
    return "Please head to the 'Get In Touch' section to send a message directly.";
  }

  // --- API Call: Projects ---
  if (text.includes("project")) {
    try {
      // 1. API se live projects fetch karein
      const res = await getAllProjects();
      const projects = res.data;

      if (!projects || projects.length === 0) {
        return "I couldn't find any projects in the database right now.";
      }

      // 2. Projects ke naam se response banayein
      const projectTitles = projects.map((p) => p.title).join(", ");
      return `I found ${projects.length} projects: ${projectTitles}. You can see them all in the 'Projects' section!`;
    } catch (err) {
      console.error("Error fetching projects for chatbot:", err);
      return "Sorry, I had trouble fetching the project list from the database.";
    }
  }

  // --- API Call: Skills ---
  if (
    text.includes("skill") ||
    (text.includes("tech") && !text.includes("library"))
  ) {
    try {
      // 1. API se live skills fetch karein
      const res = await getAllSkills();
      const skills = res.data;

      if (!skills || skills.length === 0) {
        return "I couldn't find any skills in the database right now.";
      }

      // 2. Skills ki categories se response banayein
      const skillCategories = skills.map((s) => s.category).join(", ");
      return `I found skills in these categories: ${skillCategories}. Check the 'Skills' section for proficiency details.`;
    } catch (err) {
      console.error("Error fetching skills for chatbot:", err);
      return "Sorry, I had trouble fetching the skills from the database.";
    }
  }

  // Default fallback
  return "Thanks for your message! For a detailed query, please use the contact form.";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm an AI assistant. Feel free to ask me about projects, skills, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Automatically scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Naya sendMessage Function (Async) ---
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");

    // 1. "Thinking..." indicator add karein
    const thinkingMessage = { from: "bot", text: "..." };
    setMessages((prev) => [...prev, thinkingMessage]);

    // 2. API call karke real response laayein
    const botReplyText = await getBotResponse(currentInput);
    const botResponse = { from: "bot", text: botReplyText };

    // 3. "Thinking..." message ko real response se replace karein
    setMessages((prev) => {
      // Purane messages se "..." wala message hatayein
      const newMessages = prev.filter((msg) => msg.text !== "...");
      // Naya real response add karein
      return [...newMessages, botResponse];
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-80 h-[28rem] bg-white dark:bg-gray-800 shadow-2xl rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="font-bold">AI Assistant</span>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <RenderFeatherIcon name="x" className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-xl ${
                    msg.from === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 focus:outline-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-5 py-3 hover:bg-blue-600 transition-colors"
            >
              <RenderFeatherIcon name="send" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`bg-blue-500 text-white rounded-full w-16 h-16 flex justify-center items-center shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        aria-label="Toggle chat"
      >
        <RenderFeatherIcon name="message-square" className="w-8 h-8" />
      </button>
    </div>
  );
}
