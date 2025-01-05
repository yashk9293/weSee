import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/SideBar'
import MainContent from './components/MainContent'
import IntegrationsPage from './components/IntegrationsPage'
import HomePage from './components/HomePage'
import user from './assets/sidebar/user.png'
import HandleStream from './components/HandleStream'
import Homev2Page from './components/Homev2Page'
import MeetingsPage from './components/Meeting'

function App() {
  const [currentUser] = useState({
    name: 'Harsh Khanna',
    role: 'Employee',
    avatar: user
  })

  return (
    <Router>
      <MainApp currentUser={currentUser} />
    </Router>
  )
}

function MainApp({ currentUser }) {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Conditionally render Sidebar */}
      {location.pathname !== '/meetings' && <Sidebar user={currentUser} />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/ai-agent" element={<Homev2Page />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/playground" element={<MeetingsPage />} />
      </Routes>
    </div>
  )
}

export default App
