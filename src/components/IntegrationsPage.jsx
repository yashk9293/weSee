import { ChevronDown, Edit, Share, HelpCircle, Paperclip, Image, AtSign } from 'lucide-react'
// import Sidebar from './SideBar'

import sharepoint from '../assets/integrations/sharepoint.svg';
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
import slack from '../assets/integrations/img4.png';
import cad from '../assets/integrations/cad.png';
import autodesk from '../assets/integrations/autodesk.png';
import archibus from '../assets/integrations/archibus.png';
import outlook from '../assets/integrations/outlook.png';
import zoom from '../assets/integrations/zoom.png';
import gmeet from '../assets/integrations/gmeet.png';

import { FaGlobe } from "react-icons/fa";
import { SlCamrecorder } from "react-icons/sl";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'Google Drive',
      icon: drive,
      description: 'Enhance your productivity by uploading documents from Google Drive and utilizing Al- powered tools to interactively query their content.',
      color: 'bg-[#1FA463]'
    },
    {
      name: 'Slack',
      icon: slack,
      description: 'Integrate Al agents into Slack workspace to enhance collaboration, communication and productivity with intelligent, context-aware assistance.',
      color: 'bg-black'
    },
    {
      name: 'CAD',
      icon: cad,
      description: 'Integrating Al agents into CAD and BIM workflows enhances design efficiency, automates repetitive tasks, and improves decision-making.',
      color: 'bg-[#0061FF]'
    },
    {
      name: 'Autodesk',
      icon: autodesk,
      description: 'Al automates repetitive design tasks, allowing designers to focus on creativity and innovation, allowing for more imaginative work.',
      color: 'bg-[#0052CC]'
    },
    {
      name: 'Microsoft SharePoint',
      icon: sharepoint,
      description: 'Find and access all of your content on SharePoint, prioritize most current & relevant content. Limited to your 1,000 most recent files in the Free tier.',
      color: 'bg-[#0078D4]'
    },
    {
      name: 'Meeting recorder',
      icon: gmeet,
      description: 'Record, transcribe, analyze and easily access key insights and unlock knowledge from your meetings in Google Meet, Zoom, and Microsoft Teams.',
      color: 'bg-[#4A5759]'
    },
    {
      name: 'Website',
      icon: <FaGlobe size={24} />,
      description: 'Enhance your website by integrating Al chatbots to automate responses and service offerings, improving customer engagement and operational efficiency.',
      color: 'bg-[#24292E]'
    },
    {
      name: 'Archibus',
      icon: archibus,
      description: 'Explore insights on the future of Integrated Workplace Management Systems (IWMS) and Al integration with Archibus for better workplace efficiency.',
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
    <div className="flex-1 overflow-auto">
      {/* <Sidebar user={currentUser}/> */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white  sticky top-0 z-10">
          <div className="flex justify-between items-center px-6 py-3">
            {/* Centering AI Agent */}
            <div className="flex-1 flex justify-center">
              <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-full">
                <span className="text-purple-400 font-semibold">Inte-•-grate APP</span>
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

        <main className="p-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              {/* <h2 className="text-lg font-semibold mb-1">Available integrations</h2>
              <p className="text-gray-500">Browse and connect your data sources</p> */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* {integrations.map((integration, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
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
                    <p className="text-sm text-gray-500 mb-16">{integration.description}</p>
                    <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                  </button>
                ))} */}
                <button
                  key={0}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[0].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[0].icon === 'string' ? (
                      <img
                        src={integrations[0].icon}
                        alt={integrations[0].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[0].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[0].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[0].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={1}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[1].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[1].icon === 'string' ? (
                      <img
                        src={integrations[1].icon}
                        alt={integrations[1].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[1].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[1].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[1].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={2}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[2].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[2].icon === 'string' ? (
                      <img
                        src={integrations[2].icon}
                        alt={integrations[2].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[2].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[2].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[2].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={3}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[3].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[3].icon === 'string' ? (
                      <img
                        src={integrations[3].icon}
                        alt={integrations[3].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[3].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[3].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[3].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={4}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[4].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[4].icon === 'string' ? (
                      <div className='flex space-x-2'>
                        <img
                          src={integrations[4].icon}
                          alt={integrations[4].name}
                          className="w-6 h-6"
                        />
                        <img
                          src={outlook}
                          alt='outlook'
                          className="w-6 h-6"
                        />
                      </div>
                    ) : (
                      <div className="text-black">{integrations[4].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[4].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[4].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={5}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[5].name}`)}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[5].icon === 'string' ? (
                      <div className='flex space-x-2'>  
                        <img
                          src={integrations[5].icon}
                          alt={integrations[5].name}
                          className="w-6 h-6"
                        />
                        <img
                          src={zoom}
                          alt='zoom'
                          className="w-6 h-6"
                        />
                        <img
                          src={teams}
                          alt='teams'
                          className="w-6 h-6"
                        />
                      </div>
                    ) : (
                      <div className="text-black">{integrations[5].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[5].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[5].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={6}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[6].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[6].icon === 'string' ? (
                      <img
                        src={integrations[6].icon}
                        alt={integrations[6].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[6].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[6].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[6].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>

                <button
                  key={7}
                  className="bg-gray-100 rounded-3xl relative p-4 text-left transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                  onClick={() => console.log(`Clicked ${integrations[7].name}`)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center mb-4">
                    {typeof integrations[7].icon === 'string' ? (
                      <img
                        src={integrations[7].icon}
                        alt={integrations[7].name}
                        className="w-6 h-6"
                      />
                    ) : (
                      <div className="text-black">{integrations[7].icon}</div>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{integrations[7].name}</h3>
                  <p className="text-sm text-gray-500 mb-16">{integrations[7].description}</p>
                  <span className="bg-blue-500 px-6 py-1 rounded-full text-sm font-semibold text-white hover:text-gray-900 absolute bottom-4 right-6">接続</span>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-1">Don't see what you need?</h2>
              <p className="text-gray-500 mb-6">Let us know which integrations you would like to connect</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalIntegrations.map((integration, index) => (
                  <button
                    key={index}
                    className="bg-white rounded-lg p-4 text-left border transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
