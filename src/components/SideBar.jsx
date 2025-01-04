import { HomeIcon, Unplug , FileIcon, MessageSquareIcon } from 'lucide-react'
import { PiGlobeSimpleFill } from "react-icons/pi";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineLiveHelp } from "react-icons/md";
import { Link } from "react-router-dom";

import img2 from '../assets/sidebar/img2.png';
import img3 from '../assets/sidebar/img3.png';
// import globe from '../assets/sidebar/globe.png';

function Sidebar({ user }) {
  const navItems = [
    { icon: HomeIcon, label: 'ホーム', to: '/home', active: true },
    { icon: PiGlobeSimpleFill , label: 'プレイグラウンド', to: '/ai', rotate: true },
    { icon: Unplug , label: '外部サービス接続', to: '/integrations', rotate: true },
    { icon: FileIcon, label: 'ファイル', to: '/meetings' },
  ]

  return (
    <div className="w-80 border-r border-gray-200  flex flex-col">
      <div className="mb-0 p-4">
      <Link to="/">
        <h1 className="text-2xl font-semibold text-purple-400">Managemente®</h1>
      </Link>
        
      </div>
      
      <nav className="flex-1 space-y-2 font-medium p-4 border-b">   {/*border-b*/}
        {/* <NavItem icon={<HomeIcon size={20} />} text="ホーム" active />
        <NavItem icon={<LayersIcon size={20} />} text="プレイグラウンド" />
        <NavItem icon={<LinkIcon size={20} />} text="外部サービス接続" />
        <NavItem icon={<FileIcon size={20} />} text="ファイル" /> */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-full ${
              item.active ? 'bg-gray-200 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className={`h-5 w-5 mr-2 ${item.rotate ? 'rotate-45' : ''}`} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className='flex flex-col gap-4 overflow-y-auto p-4'>
        <div>
          <button className="flex justify-center items-center font-semibold w-full mb-4 px-3 py-2 hover:bg-gray-100 rounded-full border border-purple-400 text-purple-400">
          + 新しいチャットを追加
          </button>
        </div>

        <div className='flex flex-col mt-2'>
          <button className="w-full py-2 px-4 rounded-lg border border-gray-100 text-gray-400 mb-4 flex items-center justify-center gap-2">
            <div>
              <MessageSquareIcon size={16} />
            </div>
            <div className="text-left">
              <span>請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。</span>
            </div>
          </button>

          <button className="w-full py-2 px-4 rounded-lg border border-gray-100 text-purple-600 mb-4 flex items-center justify-center gap-2">
            <div>
              <MessageSquareIcon size={16} />
            </div>
            <div className="text-left">
              <span>請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。</span>
            </div>
          </button>

          <button className="w-full py-2 px-4 rounded-lg border border-gray-100 text-gray-400 mb-4 flex items-center justify-center gap-2">
            <div>
              <MessageSquareIcon size={16} />
            </div>
            <div className="text-left">
              <span>請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。</span>
            </div>
          </button>

          <button className="w-full py-2 px-4 rounded-lg border border-gray-100 text-gray-400 mb-4 flex items-center justify-center gap-2">
            <div>
              <MessageSquareIcon size={16} />
            </div>
            <div className="text-left">
              <span>請求2024_3110の内容を確認したいが、どのカテゴリに属しているかを教えよ。</span>
            </div>
          </button>

          <button className='flex items-center justify-center gap-2'>
            <div className='text-gray-500'><span>もっと読み込む</span></div>
            <div className='text-gray-500'><MdKeyboardArrowDown size={16}/></div>
          </button>
        </div>

        <div className='mt-2'>
          <div className="border-gray-200 ">
            <NavItem icon={<IoSettingsOutline className="w-5 h-5 mr-2"/>} text="設定" />
          </div>
          <div className="border-gray-200">
            <NavItem icon={<MdOutlineLiveHelp className="w-5 h-5 mr-2"/>} text="ヘルプ" />
          </div>
        </div>
      </div>

      <div className="border-t mt-2 flex items-center gap-3 p-4 hover:bg-gray-100">
        <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-medium text-gray-700">{user.name}</div>
          <div className="text-sm font-semibold text-gray-400">{user.role}</div>
        </div>
        <div className="ml-auto">
          <LuChevronsUpDown className="text-gray-500"/>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, text, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-full ${
        active ? 'bg-gray-200 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}

export default Sidebar

