import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import MapperAiDashboard from './components/MapperAiDashboard'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/mapper-ai" element={<MapperAiDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App