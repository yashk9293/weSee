import { HelpCircle } from 'lucide-react'
import Sidebar from './Sidebar'

import sharepoint from '../assets/integrations/sharepoint.svg';
import box from '../assets/integrations/box.svg';
import confluence from '../assets/integrations/confluence.svg';
import dropbox from '../assets/integrations/dropbox.svg';
import notion from '../assets/integrations/notion.svg';
import drive from '../assets/integrations/drive.svg';

import outlookEmail from '../assets/integrations/outlookEmail.svg';
import Salesforce from '../assets/integrations/Salesforce.svg';
import Sandbox from '../assets/integrations/Sandbox.svg';
import google from '../assets/integrations/google.svg';
import teams from '../assets/integrations/teams.svg';
import figma from '../assets/integrations/figma.svg';
import trello from '../assets/integrations/trello.svg';
import mixpanel from '../assets/integrations/mixpanel.svg';
import loom from '../assets/integrations/loom.svg';
import pitch from '../assets/integrations/pitch.svg';
import github from '../assets/integrations/github.svg';
import airtable from '../assets/integrations/airtable.svg';
import gmail from '../assets/integrations/gmail.svg';
import hubspot from '../assets/integrations/hubspot.svg';
import zendesk from '../assets/integrations/zendesk.svg';
import jira from '../assets/integrations/jira.svg';
import zoho from '../assets/integrations/zoho.svg';
import asana from '../assets/integrations/asana.svg';
import fluidworks from '../assets/integrations/fluidworks.png';

import { FaGoogleDrive, FaDropbox, FaConfluence, FaGlobe, FaBoxOpen } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SlCamrecorder } from "react-icons/sl";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'Google Drive',
      icon: drive,
      description: 'Ask your docs, sheets, presentations, and files anything. Limited to your 1,000 most recent files in the Free tier.',
      color: 'bg-[#1FA463]'
    },
    {
      name: 'Notion',
      icon: notion,
      description: 'Chat with your databases and docs. Limited to your 50 most recent pages in the Free tier.',
      color: 'bg-black'
    },
    {
      name: 'Dropbox',
      icon: dropbox,
      description: 'Secure cloud based file storage hosting service, access and question your stored files.',
      color: 'bg-[#0061FF]'
    },
    {
      name: 'Confluence',
      icon: confluence,
      description: 'Collaborate and find all your work in one place. Limited to 1,000 of your most recent pages in the Free tier.',
      color: 'bg-[#0052CC]'
    },
    {
      name: 'Microsoft SharePoint',
      icon: sharepoint,
      description: 'Find and access all of your SharePoint content. Limited to your 1,000 most recent files in the Free tier.',
      color: 'bg-[#0078D4]'
    },
    {
      name: 'Meeting recorder',
      icon: <SlCamrecorder size={30} />,
      description: 'Record, transcribe, and unlock knowledge from your meetings in Google Meet, Zoom, or Microsoft Teams.',
      color: 'bg-[#4A5759]'
    },
    {
      name: 'Website',
      icon: <FaGlobe size={30} />,
      description: 'License to enterprise to index more pages. Limited to 100 pages.',
      color: 'bg-[#24292E]'
    },
    {
      name: 'Box',
      icon: box,
      description: 'Access your files and ask any questions for quick retrieval.',
      color: 'bg-[#0061D5]'
    }
  ]

  const additionalIntegrations = [
    {
      name: 'Outlook Email',
      icon: outlookEmail,
      color: 'bg-[#0078D4]'
    },
    {
      name: 'Salesforce',
      icon: Salesforce,
      color: 'bg-[#00A1E0]'
    },
    {
      name: 'Salesforce Sandbox',
      icon: Sandbox,
      color: 'bg-[#00A1E0]'
    },
    {
      name: 'Google Actions',
      icon: google,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Teams',
      icon: teams,
      color: 'bg-[#6264A7]'
    },
    {
      name: 'Asana',
      icon: asana,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Figma',
      icon: figma,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Trello',
      icon: trello,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Mixpanel',
      icon: mixpanel,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Loom',
      icon: loom,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Pitch',
      icon: pitch,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'GitHub',
      icon: github,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Airtable',
      icon: airtable,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Gmail',
      icon: gmail,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'HubSpot',
      icon: hubspot,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Zendesk',
      icon: zendesk,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Jira',
      icon: jira,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Fluidworks',
      icon: fluidworks,
      color: 'bg-[#4285F4]'
    },
    {
      name: 'Zoho',
      icon: zoho,
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

              {/* <div className="flex flex-wrap gap-4">
                {additionalIntegrations.map((integration, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[200px] border border-gray-200">
                    <div className={`w-8 h-8 rounded-lg ${integration.color} flex items-center justify-center`}>
                      <img
                        src={integration.icon}
                        alt=""
                        className="w-6 h-6"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-medium">{integration.name}</span>
                  </button>
                ))}
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalIntegrations.map((integration, index) => (
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
                  <span className="text-sm text-gray-600 hover:text-gray-900">I want this!</span>
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
