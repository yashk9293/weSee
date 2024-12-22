import { ChevronDown, Edit, Share, HelpCircle, Paperclip, Image, AtSign } from 'lucide-react'
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { useState } from 'react';
import ActionButton from './ActionButton'

import logo from '../assets/logo.png';
import searchImg from '../assets/search_img.png'


export default function MainContent() {
  const [activeBox, setActiveBox] = useState('PlayGround');

  const actions = [
    { label: '💰会社の資産一覧', onClick: () => {} },
    { label: '📝ファイルをアップロード', onClick: () => {} },
    { label: '📅カレンダー', onClick: () => {} },
    { label: '💻外部サービスに接続する', onClick: () => {} },
    { label: '🌄Themeを変更', onClick: () => {} },
    { label: '👼🏻最初の質問をする', onClick: () => {} },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          {/* Centering AI Agent */}
          <div className="flex-1 flex justify-center">
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
              <span className="text-purple-400 font-semibold">AI Agent</span>
              <ChevronDown className="h-4 w-4 text-purple-400" />
            </button>
          </div>
          {/* Edit button on the right */}
          <div>
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <Edit className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>


      <main className="p-6">
        <div>
          <div className="max-w-6xl mx-auto">
            <div className="mb-2 ml-12">
              <img 
                src={logo} 
                alt="Asset Management AI Agent Logo" 
                className="w-8 h-8" 
              />
            </div>
            <p className="text-2xl text-gray-400 mb-8 ml-12">本日は何をサポートしたらよいでしょうか？</p>

            <div className="flex flex-wrap gap-3 mb-8 text-purple-400 justify-center">
              {actions.map((action, index) => (
                <ActionButton key={index} {...action} />
              ))}
            </div>
          </div>

          <div className='max-w-5xl mx-auto'>
            <div className="mb-4">
              <span className="inline-flex items-center px-2 py-1 rounded text-sm">
                <span className="mr-2">⚡</span>
                こんな使え方ができます
              </span>
            </div>

            <div className="flex justify-center space-x-6 pt-0 p-8">
              {/* Play Ground Box */}
              <div className={`w-1/3 p-5 rounded-lg relative cursor-pointer transition-all duration-300 ${
                activeBox === 'PlayGround' ? 'bg-gradient-to-b from-blue-500 to-purple-500 text-white'
                  : 'bg-gradient-to-b from-gray-100 to-white text-gray-400'}`}
                  onClick={() => setActiveBox('PlayGround')}>
                <h3 className="text-center">プレイグラウンド</h3>
                <h2 className="text-2xl font-bold mb-4 text-center">PLAY GROUND®</h2>
                <p className="text-sm leading-relaxed mb-4">
                  プレイグラウンド内の作業効率化機能については、Managementseの検索エンジンでリクイックと起動!
                </p>
                <p className="text-sm leading-relaxed mb-14">
                  面倒な複数のツールへの記載格納も、PLAY GROUND機能一本にお任せください!
                </p>
                <button className={`font-semibold px-6 py-1 rounded-full border absolute bottom-6 right-6 ${activeBox === 'PlayGround' ? 'text-white' : 'text-gray-400 bg-gray-200'}`}>
                  使ってみる
                </button>
              </div>

              {/* Inte-grate APP Box */}
              <div className={`w-1/3 p-5 rounded-lg relative cursor-pointer transition-all duration-300 ${
                activeBox === 'IntegrateApp' ? 'bg-gradient-to-b from-blue-500 to-purple-500 text-white'
                  : 'bg-gradient-to-b from-gray-100 to-white text-gray-400'}`}
                  onClick={() => setActiveBox('IntegrateApp')}>
                <h3 className="text-center">外部サービスに接続</h3>
                <h2 className="text-2xl font-bold mb-4 text-center">Inte-•-grate APP</h2>
                <p className="text-sm leading-relaxed mb-4">
                  外部のアプリへの接続して、より作業の効率化を目指しましょう。
                </p>
                <p className="text-sm leading-relaxed mb-14">
                  メールやCADデータ、ファイル等の格納もIntegrate Appでオールインワン!
                </p>
                <button className={`font-semibold px-6 py-1 rounded-full border absolute bottom-6 right-6 ${activeBox === 'IntegrateApp' ? 'text-white' : 'text-gray-400 bg-gray-200'}`}>
                  使ってみる
                </button>
              </div>


              {/* AI Agent Box */}
              <div className={`w-1/3 p-5 rounded-lg relative cursor-pointer transition-all duration-300 ${
                activeBox === 'AIAgent' ? 'bg-gradient-to-b from-blue-500 to-purple-500 text-white'
                  : 'bg-gradient-to-b from-gray-100 to-white text-gray-400'}`}
                  onClick={() => setActiveBox('AIAgent')}>
                <h3 className="text-center">カンタン作業効率化 AIエージェント</h3>
                <h2 className="text-2xl font-bold mb-4 text-center">AI Agent®</h2>
                <p className="text-sm leading-relaxed mb-4">
                  あらゆるファイルやデータは、全部Managementeへアップロードしましょう。
                </p>
                <p className="text-sm leading-relaxed mb-14">
                  資料のpファイルやデータを簡単に簡単に、よりセキュアに保存することができます。
                </p>
                <button className={`font-semibold px-6 py-1 rounded-full border absolute bottom-6 right-6 ${activeBox === 'AIAgent' ? 'text-white' : 'text-gray-400 bg-gray-200'}`}>
                  使ってみる
                </button>
              </div>
            </div>
          </div>

          {/*Input Search Field */}
          <div className='max-w-5xl mx-auto'>
            <div className="bg-gray-50 rounded-lg p-4 shadow-md fixed bottom-4 left-1/2 transform -translate-x-1/3 w-full max-w-4xl">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
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
                </div>
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
        </div>
      </main>
    </div>
  )
}

