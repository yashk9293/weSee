import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Edit, Paperclip, Image, AtSign } from "lucide-react";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const EVENT_STREAM_URL = '/scrape';

import logo from "../assets/logo.png";
import searchImg from "../assets/search_img.png";

const ChatMessage = ({ message, isAi }) => {
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-6`}>
      {isAi && (
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
          AI
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl p-4 ${isAi
            ? 'bg-white border border-gray-200 shadow-sm'
            : 'bg-purple-100 text-white'
          }`}
      >
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className="prose prose-sm max-w-none"
        />
      </div>
      {!isAi && (
        <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white ml-3">
          U
        </div>
      )}
    </div>
  );
};

const Header = () => (
  <header className="bg-white border-b sticky top-0 z-10">
    <div className="flex justify-between items-center px-6 py-3">
      <div className="flex-1 flex justify-center">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <span className="text-purple-400 font-semibold">Asset AI Agent</span>
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
);

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const chatContainerRef = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, streamingMessage]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setHasStarted(true);
    setMessages(prev => [...prev, { text: input, isAi: false }]);
    setInput('');
    setIsLoading(true);
    setStreamingMessage('');

    try {
      const response = await fetch(EVENT_STREAM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let currentText = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          setMessages(prev => [...prev, { text: currentText, isAi: true }]);
          setStreamingMessage('');
          break;
        }

        // Decode and append new chunks
        const chunk = decoder.decode(value);
        currentText += chunk;
        setStreamingMessage(currentText);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
        return;
      }
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        text: "申し訳ありません。エラーが発生しました。",
        isAi: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col h-screen bg-gray-50">
      <Header />
      <main className="flex-1 overflow-hidden flex flex-col p-6">
        {!hasStarted && (
          <div className="max-w-6xl">
            <div className="mb-2 ml-12">
              <img
                src={logo}
                alt="Asset Management AI Agent Logo"
                className="w-8 h-8"
              />
            </div>
            <p className="text-2xl text-gray-400 mb-8 ml-12">
              本日は何をサポートしたらよいでしょうか？
            </p>
          </div>
        )}

        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto max-w-3xl mx-auto w-full px-4"
        >
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isAi={message.isAi}
            />
          ))}
          {streamingMessage && (
            <ChatMessage
              message={streamingMessage}
              isAi={true}
            />
          )}
          {isLoading && !streamingMessage && (
            <div className="flex items-center space-x-2 text-gray-500 mb-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
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
                  alt="Asset Management AI Agent Logo"
                  className="w-5 h-5"
                />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="AI エージェントに質問してみましょう。"
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