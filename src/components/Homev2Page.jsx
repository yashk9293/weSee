import React, { useState, useEffect, useRef } from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { FiPaperclip, FiImage, FiAtSign } from "react-icons/fi";
import ChatMessage from "./ChatMessage";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortControllerRef = useRef(null);

  // const handleSubmit = async () => {
  //   if (!message.trim() || isStreaming) return;

  //   // Cleanup previous request if exists
  //   if (abortControllerRef.current) {
  //     abortControllerRef.current.abort();
  //   }

  //   const newChatMessage = {
  //     question: message,
  //     streamingAnswer: "",
  //     isAi: true,
  //   };

  //   setConversation(prev => [...prev, newChatMessage]);
  //   setMessage("");
  //   setLoading(true);
  //   setIsStreaming(true);

  //   // Create new AbortController for this request
  //   abortControllerRef.current = new AbortController();

  //   try {
  //     const response = await fetch(`/scrape?message=${encodeURIComponent(message)}`, {
  //       signal: abortControllerRef.current.signal
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     // Get the complete response text
  //     let data = await response.text();
  //     data = data.split('data:')
  //     data = data[data.length - 1]

  //     // Update conversation with complete response
  //     setConversation(prev => {
  //       const updated = [...prev];
  //       const lastMessage = updated[updated.length - 1];
  //       lastMessage.streamingAnswer = data;
  //       return updated;
  //     });

  //   } catch (err) {
  //     if (err.name === 'AbortError') {
  //       console.log('Fetch aborted');
  //     } else {
  //       console.error("Connection error:", err);
  //     }
  //   } finally {
  //     setLoading(false);
  //     setIsStreaming(false);
  //     abortControllerRef.current = null;
  //   }
  // };

  // Cleanup on component unmount

  const handleSubmit = async () => {
    if (!message.trim() || isStreaming) return;

    // Cleanup previous request if exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const newChatMessage = {
      question: message,
      streamingAnswer: "",
      isAi: true,
    };

    setConversation((prev) => [...prev, newChatMessage]);
    setMessage("");
    setLoading(true);
    setIsStreaming(true);

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(`/scrape?message=${encodeURIComponent(message)}`, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Stream response data
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
          const chunk = decoder.decode(value);

          setConversation((prev) => {
            const updated = [...prev];
            const lastMessage = updated[updated.length - 1];
            lastMessage.streamingAnswer = chunk.split('data:')[1]; // Replace with the latest chunk
            return updated;
          });
        }
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Connection error:", err);
      }
    } finally {
      setLoading(false);
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };


  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div className="flex-1 overflow-hidden flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          <h1 className="text-lg font-semibold text-purple-600">AI Chat</h1>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col p-6">
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

        <div className="max-w-3xl mx-auto w-full px-4">
          <div className="bg-white rounded-xl p-4 shadow-lg">
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

            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isStreaming && handleSubmit()}
                placeholder="Ask the AI Agent..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none"
                disabled={isStreaming}
              />
              <button
                onClick={handleSubmit}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-700"
                disabled={isStreaming}
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