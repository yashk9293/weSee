import { HelpCircle } from 'lucide-react'
import Sidebar from './Sidebar'

import { FaGoogleDrive, FaDropbox, FaConfluence, FaGlobe, FaBoxOpen } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SlCamrecorder } from "react-icons/sl";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'Google Drive',
      icon: <FaGoogleDrive size={40} />,
      description: 'Ask your docs, sheets, presentations, and files anything. Limited to your 1,000 most recent files in the Free tier.',
      color: 'bg-[#1FA463]'
    },
    {
      name: 'Notion',
      icon: <RiNotionFill size={40} />,
      description: 'Chat with your databases and docs. Limited to your 50 most recent pages in the Free tier.',
      color: 'bg-black'
    },
    {
      name: 'Dropbox',
      icon: <FaDropbox size={40} />,
      description: 'Access and question your stored files.',
      color: 'bg-[#0061FF]'
    },
    {
      name: 'Confluence',
      icon: <FaConfluence size={40} />,
      description: 'Collaborate and find all your work in one place. Limited to 1,000 of your most recent pages in the Free tier.',
      color: 'bg-[#0052CC]'
    },
    {
      name: 'Microsoft SharePoint',
      icon: <FaRegShareFromSquare size={40} />,
      description: 'Find and access all of your SharePoint content. Limited to your 1,000 most recent files in the Free tier.',
      color: 'bg-[#0078D4]'
    },
    {
      name: 'Meeting recorder',
      icon: <SlCamrecorder size={40} />,
      description: 'Record, transcribe, and unlock knowledge from your meetings in Google Meet, Zoom, or Microsoft Teams.',
      color: 'bg-[#4A5759]'
    },
    {
      name: 'Website',
      icon: <FaGlobe size={40} />,
      description: 'License to enterprise to index more pages. Limited to 100 pages.',
      color: 'bg-[#24292E]'
    },
    {
      name: 'Box',
      icon: <FaBoxOpen size={40} />,
      description: 'Access your files and ask any questions for quick retrieval.',
      color: 'bg-[#0061D5]'
    }
  ]

  const additionalIntegrations = [
    {
      name: 'Outlook Email',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#0078D4]'
    },
    {
      name: 'Salesforce',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#00A1E0]'
    },
    {
      name: 'Salesforce Sandbox',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#00A1E0]'
    },
    {
      name: 'Google Actions',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Teams',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#6264A7]'
    },
    {
      name: 'Asana',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Figma',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Trello',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Mispanel',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Loom',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Pitch',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'GitHub',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Airtable',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Gmail',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'HubSpot',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Zendesk',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Jira',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Fluidworks',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Zoho',
      icon: '/placeholder.svg?height=32&width=32',
      color: 'bg-[#4285F4]'
    }
  ]

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="flex justify-between items-center px-6 py-3">
            <h1 className="text-xl font-semibold">Integrations</h1>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </button>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-1">Available integrations</h2>
              <p className="text-gray-500">Browse and connect your data sources</p>
            {/* </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <button
                  key={index}
                  className="bg-white rounded-lg p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => console.log(`Clicked ${integration.name}`)}
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
                    {typeof integration.icon === 'string' ? (
                      <img
                        src={integration.icon}
                        alt={integration.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integration.icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{integration.description}</p>
                  <span className="text-sm text-gray-600 hover:text-gray-900">View</span>
                </button>
              ))}
            </div>
          </div>

          <div>
              <h2 className="text-lg font-semibold mb-1">Don't see what you need?</h2>
              <p className="text-gray-500 mb-6">Let us know which integrations you would like to connect</p>

              <div className="flex flex-wrap gap-4">
                {additionalIntegrations.map((integration, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[200px] border border-gray-200"
                  >
                    <div className={`w-8 h-8 rounded-lg ${integration.color} flex items-center justify-center`}>
                      <img
                        src={integration.icon}
                        alt=""
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-medium">{integration.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
