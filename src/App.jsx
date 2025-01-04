import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/SideBar'
import MainContent from './components/MainContent'
import IntegrationsPage from './components/IntegrationsPage'
import HomePage from './components/HomePage'

import user from './assets/sidebar/user.png'
import HandleStream from './components/HandleStream'
import Homev2Page from './components/Homev2Page'

function App() {
  const [currentUser] = useState({
    name: 'Alex Kapawski',
    role: 'Employee',
    avatar: user
  })

  return (
    <Router>
      <div className="flex h-screen bg-white text-gray-900">
        <Sidebar user={currentUser} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/ai-agent" element={<Homev2Page />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

