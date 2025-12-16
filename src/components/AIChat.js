import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const initialMessages = [
  { from: "ai", text: "Hi! I'm your AI assistant. How can I help today?" },
];

const AIChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "Got it! I suggest prioritizing this task first." },
      ]);
    }, 1000);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <MessageCircle className="w-10 h-10 text-blue-600 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-900">
            AI Assistant Chat
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Interact with your AI assistant directly to get task suggestions and insights.
          </p>
        </div>

        {/* Chat box */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.from === "ai" ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-xl max-w-xs ${
                msg.from === "ai"
                  ? "bg-blue-100 text-gray-900 self-start"
                  : "bg-blue-600 text-white self-end"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input box */}
        <form
          onSubmit={handleSend}
          className="mt-4 flex items-center space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default AIChat;
