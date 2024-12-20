import { useState } from 'react'
import { ChevronDown, Share2, HelpCircle, Plus, FileText, Copy } from 'lucide-react'
import Sidebar from './Sidebar'

export default function NewChatPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentChats = [
    {
      icon: "navy",
      name: "Demo-Appcues Benchmar...",
      date: "Today",
    },
    {
      icon: "gray",
      name: "Demo - Sana AI Security W...",
      date: "Today",
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
            <header className="bg-white border-b sticky top-0 z-10">
            <div className="flex justify-between items-center px-6 py-3">
                <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100">
                    <span className="text-gray-600 ">@campaigns.csv</span>
                    {/* <Copy className="h-4 w-4 text-gray-400" /> */}
                </div>
                </div>
                <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
                    <span>Assistant</span>
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
                    <HelpCircle className="h-4 w-4" />
                    <span>Help</span>
                </button>
                </div>
            </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center bg-white rounded-lg p-4 shadow-sm mb-6 w-44 border border-gray-200">
                {/* <div className="flex items-center gap-3 bg-gray-800"> */}
                <div className="w-7 h-7 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <div className="p-2">
                    <h6 className="font-medium">campaigns.csv</h6>
                    <p className="text-sm text-gray-500">Today 12:24 pm</p>
                </div>
                {/* </div> */}
            </div>

            <h1 className="text-2xl font-semibold mb-8">
                What are the key components of the "Market Research" task under
                "Competitive targeting"?
            </h1>

            {/* <div className="flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-gray-900"></div>
            </div> */}
            </main>

            <div className="fixed bottom-0 left-64 right-0">
            <div className="max-w-5xl mx-auto px-6 py-4">

            {/* <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    placeholder="Search recent chats..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div> */}

            {/* <div className="space-y-1">
                {recentChats.map((chat, index) => (
                    <button
                    key={index}
                    className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-lg"
                    >
                    <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded bg-${chat.icon}-100 flex items-center justify-center`}>
                        <FileText className={`h-3 w-3 text-${chat.icon}-500`} />
                        </div>
                        <span className="text-sm">{chat.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{chat.date}</span>
                    </button>
                ))}
            </div> */}

            <div className="bg-white rounded-full p-4 shadow-md mb-4 border border-gray-200">
                <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Plus className="h-5 w-5" />
                    </button>
                    <div className="bg-gray-200 px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
                    <span>@campaigns.csv</span>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder=""
                    className="flex-1 bg-transparent outline-none"
                />
                </div>
            </div>
            </div>
            {/* <footer className="p-4 border-t border-gray-300 flex justify-between">
                <div className="text-sm text-gray-500">Demo - campaigns.csv</div>
                <div className="text-sm text-gray-500">Processing done 12:24PM</div>
                </footer> */}
            </div>
        </div>
    </div>
  );
}

