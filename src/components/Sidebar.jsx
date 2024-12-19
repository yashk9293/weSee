import { Home, FileText, Video, File, Share2, History, Settings, Plus, X, BarChart2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { icon: Home, label: 'Home', to: '/', active: true },
    { icon: FileText, label: 'Templates', to: '/templates' },
    { icon: Video, label: 'Meetings', to: '/meetings' },
    { icon: File, label: 'Files', to: '/files' },
    { icon: Share2, label: 'Shared with me', to: '/shared' },
    { icon: History, label: 'History', to: '/history' },
    { icon: BarChart2, label: 'Mapper AI', to: '/mapper-ai' },
  ]

  const collections = [
    { label: 'Customers', color: 'bg-red-500' },
    { label: 'Vendors', color: 'bg-blue-500' },
    { label: 'Employees', color: 'bg-green-500' }
  ]

  return (
    <div className={`w-64 bg-white h-full flex flex-col border-r ${isOpen ? '' : 'hidden'}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <Link to="/" className="text-xl font-semibold">
          iSquared
        </Link>
        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4 border-b">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
          <Plus className="h-5 w-5 mr-2" />
          New chat
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`flex items-center w-full px-3 py-2 mb-1 rounded ${
              item.active ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-2" />
            {item.label}
          </Link>
        ))}

        <div className="mt-8">
          <h2 className="px-3 text-sm font-semibold text-gray-500 mb-2">Collections</h2>
          {collections.map((collection, index) => (
            <button
              key={index}
              className="flex items-center w-full px-3 py-2 mb-1 hover:bg-gray-50 rounded"
            >
              <span className={`h-2 w-2 rounded-full mr-2 ${collection.color}`}></span>
              {collection.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded">
          <Settings className="h-5 w-5 mr-2" />
          Settings
        </button>
        <div className="mt-4 px-3">
          <div className="text-sm text-gray-600">100 credits left today</div>
          <div className="text-xs text-gray-400">Invite peers to refill</div>
        </div>
      </div>
    </div>
  )
}