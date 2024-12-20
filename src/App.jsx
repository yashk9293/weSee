import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MapperAiDashboard from './components/MapperAiDashboard'
import NewChatPage from './components/NewChatPage'
import IntegrationsPage from './components/IntegrationsPage'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/mapper-ai" element={<MapperAiDashboard />} />
          <Route path="/new-chat" element={<NewChatPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App