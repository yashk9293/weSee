import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Edit, Paperclip, Image, AtSign } from "lucide-react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import searchImg from "../assets/search_img.png";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [streamingResponse, setStreamingResponse] = useState(""); // Temporary AI response
  const eventSourceRef = useRef(null);
  const chatContainerRef = useRef(null);

  const handleSubmit = () => {
    if (!message.trim()) {
      setError("Message cannot be empty.");
      return;
    }

    setError(null);
    setLoading(true);

    // Add the user's message to the conversation
    const userMessage = { text: message, isAi: false };
    setConversation((prev) => [...prev, userMessage]);

    // Clear the input field
    setMessage("");

    try {
      const newEventSource = new EventSource(
        `/scrape?message=${encodeURIComponent(message)}`
      );
      eventSourceRef.current = newEventSource;

      newEventSource.onopen = () => console.log("SSE connection opened");

      newEventSource.onmessage = (event) => {
        const chunk = event.data.trim();
        setStreamingResponse(chunk); // Keep only the most recent chunk
      };

      newEventSource.onerror = () => {
        setError("Failed to connect to the server or stream ended.");
        closeConnection();
        setLoading(false);
      };

      newEventSource.onclose = () => {
        // Replace the temporary AI response with the final message
        if (streamingResponse.trim()) {
          const aiMessage = { text: streamingResponse, isAi: true };
          setConversation((prev) => [...prev.filter((msg) => !msg.isAi), aiMessage]);
        }
        setStreamingResponse(""); // Clear temporary response
        closeConnection();
        setLoading(false);
      };
    } catch (err) {
      console.error("Request failed:", err);
      setError("Failed to connect to the server.");
      closeConnection();
      setLoading(false);
    }
  };

  const closeConnection = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation, streamingResponse]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex-1 flex justify-center">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <span className="text-purple-600 font-semibold">AI Agent</span>
              <ChevronDown className="h-4 w-4 text-purple-600" />
            </button>
          </div>
          <div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col p-6">
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto max-w-3xl mx-auto w-full px-4"
        >
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.isAi ? "justify-start" : "justify-end"
              } mb-6`}
            >
              {msg.isAi && (
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
                  AI
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.isAi
                    ? "bg-white border border-gray-200 shadow-sm"
                    : "bg-purple-100 text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
              {!msg.isAi && (
                <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white ml-3">
                  U
                </div>
              )}
            </div>
          ))}
          {streamingResponse && (
            <div className="flex justify-start mb-6">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
                AI
              </div>
              <div
                className="max-w-[80%] rounded-2xl p-4 bg-white border border-gray-200 shadow-sm"
                dangerouslySetInnerHTML={{ __html: streamingResponse }}
              />
            </div>
          )}
        </div>

        <div className="max-w-3xl mx-auto w-full px-4">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Image className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <AtSign className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <img
                  src={searchImg}
                  alt="Search"
                  className="w-5 h-5"
                />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask the AI Agent..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white border border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-700 transition-colors"
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
