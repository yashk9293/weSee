import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Edit, Paperclip, Image, AtSign } from "lucide-react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

import logo from "../assets/logo.png";
import searchImg from "../assets/search_img.png";

const ChatMessage = ({ message, isAi }) => (
<div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
    <div className={`max-w-[80%] p-3 rounded-lg ${
    isAi ? 'bg-gray-100' : 'bg-purple-100'
    }`}>
    {message}
    </div>
</div>
);

const Header = () => (
<header className="bg-white border-b sticky top-0 z-10">
    <div className="flex justify-between items-center px-6 py-3">
    <div className="flex-1 flex justify-center">
        <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
        <span className="text-purple-400 font-semibold">AI Agent</span>
        <ChevronDown className="h-4 w-4 text-purple-400" />
        </button>
    </div>
    <div>
        <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
        <Edit className="h-4 w-4" />
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
  const chatContainerRef = useRef(null);
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    
    setHasStarted(true);
    setMessages(prev => [...prev, { text: input, isAi: false }]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chat = model.startChat();
      const result = await chat.sendMessage(input);
      const response = await result.response;
      
      setMessages(prev => [...prev, { 
        text: response.text(), 
        isAi: true 
      }]);
    } catch (error) {
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
    <div className="flex-1 overflow-hidden flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-hidden flex flex-col p-6">
        {!hasStarted && (
          <div className="max-w-6xl">    {/*mx-auto */}
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
          className="flex-1 overflow-y-auto max-w-4xl mx-auto w-full"
        >
          {messages.map((message, index) => (
            <ChatMessage 
              key={index}
              message={message.text}
              isAi={message.isAi}
            />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                入力中...
              </div>
            </div>
          )}
        </div>

        <div className="max-w-5xl mx-auto mt-4 w-full">
          <div className="bg-gray-50 rounded-lg p-4 shadow-md">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-200 rounded">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <Image className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <AtSign className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <img
                  src={searchImg}
                  alt="Asset Management AI Agent Logo"
                  className="w-5 h-5"
                />
              </button>
              <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded hidden">
                CAD 235665162
              </div>
              <span className="text-xs text-muted-foreground hidden">
                3.5MB
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Managemente の AI エージェントに質問してみましょう。"
                className="bg-gray-50 w-full mt-2 px-4 py-2 rounded outline-none pr-10"
              />
              <button 
                onClick={handleSubmit}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 cursor-pointer"
              >
                <IoArrowUpCircleSharp className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
