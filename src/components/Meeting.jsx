import React, { useState } from 'react';
import { ChevronDown, Edit, HomeIcon, Unplug, FileIcon, MessageCircle, Home, Menu, Image, Paperclip, AtSign, Plus } from 'lucide-react';
import { PiGlobeSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import meeting from '../assets/meeting.png'
import searchImg from '../assets/search_img.png'

const ChatLayout = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Sidebar - Navigation */}
      {/* <div className="w-16 bg-white flex flex-col items-center py-4 space-y-4">
        <div className="text-indigo-500 font-semibold mb-6">✦</div>
        <HomeIcon className="w-6 h-6 text-gray-600" />
        <PiGlobeSimpleFill className="w-6 h-6 text-gray-600" />
        <Unplug className="w-6 h-6 text-gray-600 rotate-45" />
        <FileIcon className="w-6 h-6 text-gray-600" />
        <Plus className="w-6 h-6 text-gray-600 p-1 rounded-md hover:bg-gray-100 border border-blue-500" />
        <div className="flex-grow" />
        <FaUserCircle className='w-6 h-6'/>
      </div> */}

      <div className="w-px bg-gray-200" />

      {/* Main content wrapper */}
      <div className="flex flex-1 h-full">
        {/* Chat Section */}
        <div className="w-[32rem] flex flex-col">
          {/* <div className="p-4 border-b border-gray-200">
            <Link to="/">
              <h1 className="text-xl font-semibold text-indigo-500">Managemente®</h1>
            </Link>
          </div> */}
          
          
          <div className="flex-grow overflow-y-auto p-4">
            {/* Chat messages would go here */}
          </div>

          {/* Input Section */}
          <div className="p-4 border-gray-200">
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="flex items-center space-x-2 mb-2">
                <Paperclip className="h-5 w-5 text-gray-500" />
                <Image className="w-5 h-5 text-gray-500" />
                <AtSign className="w-5 h-5 text-gray-500" />
                <img
                  src={searchImg}
                  alt="Asset Management AI Agent Logo"
                  className="w-5 h-5"
                />
              </div>
              <div className="flex items-end space-x-2">
                <textarea
                  className="flex-grow resize-none bg-transparent outline-none"
                  placeholder="Managemente の AI エージェントに質問してみましょう。"
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-indigo-500 text-white p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-200" />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex items-center justify-between p-4">
            
            {/* <div className="flex items-center space-x-2">
              <span className="text-gray-600">PLAYGROUND</span>
              <Menu className="w-5 h-5 text-gray-600" />
            </div> */}
            {/* <div className="flex justify-between items-center px-6 py-3"> */}
              {/* Centering AI Agent */}
              <div className="flex-1 flex justify-center">
                <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
                  <span className="text-purple-400 font-semibold">PLAYGROUND</span>
                  <ChevronDown className="h-4 w-4 text-purple-400" />
                </button>
              </div>
              {/* Edit button on the right */}
              <div>
                <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            {/* </div> */}
          </div>

          <div className="flex-1 p-4 mt-[30%]">
            <div className="border-2 rounded-lg p-2 bg-white">
              <img
                src={meeting}
                alt="Scenic mountain landscape with pink sunset"
                className="w-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;