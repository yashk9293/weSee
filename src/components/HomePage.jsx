import { ChevronDown, Edit, Paperclip, Image, AtSign } from "lucide-react";
import { IoArrowUpCircleSharp } from "react-icons/io5";

import logo from "../assets/logo.png";
import searchImg from "../assets/search_img.png";

export default function MainContent() {
  return (
    <div className="flex-1 overflow-auto">
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

      <main className="p-6">
        <div className="max-w-6xl mx-auto">
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

        <div className="max-w-4xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente hic neque dolorem quaerat dicta! Veniam, pariatur! Voluptate itaque quos iste, totam mollitia saepe eius illo. Optio a eum qui.
        </div>

        {/*Input Search Field */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-gray-50 rounded-lg p-4 shadow-md fixed bottom-3 left-1/2 transform -translate-x-1/3 w-full max-w-4xl">
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
                placeholder="Managemente の AI エージェントに質問してみましょう。"
                className="bg-gray-50 w-full mt-2 px-4 py-2 rounded outline-none pr-10"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-300 cursor-pointer">
                <IoArrowUpCircleSharp className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
