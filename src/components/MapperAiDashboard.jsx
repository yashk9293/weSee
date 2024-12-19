import { useState } from 'react'
import { ChevronDown, Edit, HelpCircle, Search, Paperclip, Image, AtSign, ArrowUp } from 'lucide-react'

import pdfLogo from '../assets/pdf.png';
import wordLogo from '../assets/word.jpeg';
import excelLogo from '../assets/excel.jpeg';

export default function MapperAiDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const files = [
    { name: 'Retail_Store_FloorMap_GroundFloor.svg', type: 'excel' },
    { name: 'FloorPlan_Level1_MainHall.dwg', type: 'doc' },
    { name: 'HVAC_System_Design_Block_D.pdf', type: 'pdf' },
  ]

  const tasks = [
    { name: 'Image Recognition and Data Extraction' },
    { name: 'Floor Plan Digitization' },
    { name: 'Auto-Categorization' },
    { name: '3D Model Generation' },
    { name: 'Automated Reporting' },
  ]

  const suggestedQuestions = [
    'Can you scan and extract details from this floor plan?',
    'How can I integrate this blueprint into my asset management system?',
    'Does this floor plan meet building code standards?',
  ]

  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <span>Mapper AI</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <Edit className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </button>
          </div>
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded-lg">
            Overview
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="flex max-w-6xl mx-auto">
          {/* Left Side: Overview */}
          <div className="w-2/3 pr-6 border-r border-gray-300">
            <div className="bg-white p-8 rounded-lg shadow text-center mb-6" style={{ height: '500px' }}>
              <div className="bg-navy-900 inline-block p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">FloorMap AI Agent</h2>
              <p className="text-gray-600 mb-4">
                Designed to simplify, scan, and <br />streamline your asset data management.
              </p>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">WeSee AI Testing</span>
                <span className="border border-gray-300 rounded-full px-2 py-0.5 text-sm">+1</span>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Added
              </button>
            </div>
            {/* Input Field */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <Image className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-200 rounded">
                    <AtSign className="h-5 w-5" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Ask Me Anything!"
                  className="flex-1 bg-transparent outline-none"
                />
                <button className="p-2 hover:bg-gray-200 rounded">
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Overview */}
          <div className="w-1/3 space-y-6 pl-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Floor Maps & Blueprints"
                className="w-full pl-10 pr-4 py-2 border rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              {files.map((file, index) => {
                let logoSrc = ''; // Default logo URL
                let altText = '';

                // Determine the logo based on the file type
                if (file.type === 'pdf') {
                  logoSrc = pdfLogo; // Replace with your PDF logo path
                  altText = 'PDF Logo';
                } else if (file.type === 'doc') {
                  logoSrc = wordLogo; // Replace with your Word logo path
                  altText = 'Word Logo';
                } else if (file.type === 'excel') {
                  logoSrc = excelLogo; // Replace with your Excel logo path
                  altText = 'Excel Logo';
                }

                return (
                  <div key={index} className="flex items-center mb-2">
                    <img
                      src={logoSrc}
                      alt={altText}
                      className="w-6 h-6 mr-2"
                    />
                    <span>{file.name}</span>
                  </div>
                );
              })}
              <div className="text-sm text-gray-500">10 files</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Tasks</h3>
            <div className="grid grid-cols-2 gap-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-full text-center shadow-sm hover:bg-gray-200 transition cursor-pointer"
                >
                  {task.name}
                </div>
              ))}
              <div className="col-span-2 text-center">
                <button className="text-gray-500 hover:text-gray-700 font-medium transition">... View all</button>
              </div>
            </div>
          </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suggested questions</h3>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded text-sm">{question}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
