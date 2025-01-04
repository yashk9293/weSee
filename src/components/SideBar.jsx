import { useState } from 'react';
import { HomeIcon, LayersIcon, LinkIcon, FileIcon, MessageSquareIcon } from 'lucide-react';
import { LuChevronsUpDown } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import img2 from '../assets/sidebar/img2.png';
import img3 from '../assets/sidebar/img3.png';

function Sidebar({ user }) {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active menu item
  const [activeChat, setActiveChat] = useState(null); // Track the active chat

  const navItems = [
    { icon: HomeIcon, label: 'ホーム', to: '/' },
    { icon: LayersIcon, label: 'プレイグラウンド', to: '/ai-agent' },
    { icon: LinkIcon, label: '外部サービス接続', to: '/integrations' },
    { icon: FileIcon, label: 'ファイル', to: '/meetings' },
  ];

  const chatItems = [
    '請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。',
    '請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。',
    '請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。',
    '請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。',
  ];

  return (
    <div className="w-80 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-purple-400">Managemente®</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 font-medium p-4 border-b">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            onClick={() => setActiveIndex(index)} // Update active index on click
            className={`flex items-center gap-3 px-3 py-2 rounded-full ${
              activeIndex === index ? 'bg-gray-200 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Chat Section */}
      <div className="flex flex-col gap-4 overflow-y-auto p-4">
        <button className="flex justify-center items-center font-semibold w-full px-3 py-2 hover:bg-gray-100 rounded-full border border-purple-400 text-purple-400">
          + 新しいチャットを追加
        </button>

        <div className="flex flex-col mt-2">
          {chatItems.map((chat, index) => (
            <button
              key={index}
              onClick={() => setActiveChat(index)} // Update active chat index
              className={`w-full py-2 px-4 rounded-lg border ${
                activeChat === index
                  ? 'border-purple-400 text-purple-600'
                  : 'border-gray-100 text-gray-400 hover:bg-gray-100'
              } flex items-center justify-center gap-2`}
            >
              <MessageSquareIcon size={16} />
              <div className="text-left">
                <span>{chat}</span>
              </div>
            </button>
          ))}

          <button className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700">
            <span>もっと読み込む</span>
            <MdKeyboardArrowDown size={16} />
          </button>
        </div>
      </div>

      {/* Settings & Help */}
      <div className="p-4">
        <NavItem icon={<img src={img2} alt="設定" className="w-5 h-5" />} text="設定" />
        <NavItem icon={<img src={img3} alt="ヘルプ" className="w-5 h-5" />} text="ヘルプ" />
      </div>

      {/* User Info */}
      <div className="border-t mt-2 flex items-center gap-3 p-4 hover:bg-gray-100">
        {user?.avatar && <img src={user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />}
        <div>
          <div className="font-medium text-gray-700">{user?.name || 'ゲスト'}</div>
          <div className="text-sm font-semibold text-gray-400">{user?.role || '未定'}</div>
        </div>
        <LuChevronsUpDown className="ml-auto text-gray-500" />
      </div>
    </div>
  );
}

function NavItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-full text-gray-600 hover:bg-gray-100">
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default Sidebar;
