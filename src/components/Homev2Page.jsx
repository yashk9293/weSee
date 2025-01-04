import React, { useState, useEffect, useRef } from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { FiPaperclip, FiImage, FiAtSign } from "react-icons/fi"; // Example icons
import ChatMessage from "./ChatMessage"; // Import ChatMessage component

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]); // Store ChatMessage components
  const [loading, setLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false); // Tracks if an answer is being streamed
  const eventSourceRef = useRef(null);

  const handleSubmit = () => {
    if (!message.trim()) return;

    // Add the new question and initialize an empty answer
    const newChatMessage = {
      question: message,
      streamingAnswer: "",
      isAi: true,
    };

    setConversation((prev) => [...prev, newChatMessage]);
    setMessage(""); // Reset input field
    setLoading(true);
    setIsStreaming(true); // Start streaming

    try {
      const newEventSource = new EventSource(
        `/scrape?message=${encodeURIComponent(message)}`
      );
      eventSourceRef.current = newEventSource;

      newEventSource.onmessage = (event) => {
        const chunk = event.data.trim()

        setConversation(
          (prev) => {
            const updated = [...prev]
            const lastMessage = updated[updated.length - 1]
            lastMessage.streamingAnswer = chunk
            return updated
          }
        )
      }

      newEventSource.onerror = () => {
        newEventSource.close();
        setLoading(false);
        setIsStreaming(false); // End streaming
      };

      newEventSource.onclose = () => {
        newEventSource.close();
        setLoading(false);
        setIsStreaming(false); // End streaming
      };
    } catch (err) {
      console.error(err);
      setLoading(false);
      setIsStreaming(false); // End streaming
    }
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-lg font-semibold text-purple-600">AI Chat</h1>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col p-6">
        {/* Chat Messages Section */}
        <div className="flex-1 overflow-y-auto max-w-3xl mx-auto w-full px-4">
          {conversation.map((msg, index) => (
            <ChatMessage
              key={index}
              question={msg.question}
              streamingAnswer={msg.streamingAnswer}
              isAi={msg.isAi}
            />
          ))}
        </div>

        {/* Input Section with Icons Above */}
        <div className="max-w-3xl mx-auto w-full px-4">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            {/* Icons Above the Input, Left-aligned */}
            <div className="flex items-center space-x-4 mb-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Attach File"
              >
                <FiPaperclip className="w-5 h-5 text-gray-500" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Add Image"
              >
                <FiImage className="w-5 h-5 text-gray-500" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Mention"
              >
                <FiAtSign className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Input Field and Send Button */}
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask the AI Agent..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none"
                disabled={isStreaming} // Disable input when streaming
              />
              <button
                onClick={handleSubmit}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-700"
                disabled={isStreaming} // Disable send button when streaming
              >
                <IoArrowUpCircleSharp className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
