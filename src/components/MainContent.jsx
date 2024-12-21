import { ChevronDown, Edit, Share, HelpCircle, Paperclip, Image, AtSign, Printer } from 'lucide-react'
import ActionButton from './ActionButton'
import FeatureCard from './FeatureCard'

import blueprintImage from '../assets/blueprint.png';
import image from '../assets/main/img.png';
import excel from '../assets/main/excel.png';
import gmail from '../assets/main/gmail.png';
import img1 from '../assets/main/img1.png';
import img2 from '../assets/main/img2.png';
import img3 from '../assets/main/img3.png';


export default function MainContent() {
  const actions = [
    { label: 'Create Work Order', onClick: () => {} },
    { label: 'Edit a PM Template', onClick: () => {} },
    { label: 'Inspections', onClick: () => {} },
    { label: 'Notifications', onClick: () => {} },
    { label: 'Create Purchase Order', onClick: () => {} },
  ]

  const features = [
    {
      title: 'Commercial onboarding call',
      image: image,
      subtitle: 'Demo - Sana AI Sales Onboar..',
      date: 'Today',
      type: 'video'
    },
    {
      title: 'Simplify your workflow—upload data from anyware in any format, and let our AI add it in system.',
      icons: [
        excel,
        gmail,
        img1,
        img2,
        img3,
      ],
      type: 'upload'
    },
    {
      title: 'Turn floor maps and blueprints into organized data—our AI does it all for you!',
      image: blueprintImage,
      type: 'blueprint'
    }
  ]

  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center px-6 py-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
            <span>Asset Agent</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <Edit className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <Share className="h-4 w-4" />
              <span>Invite</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Hello, I'm your Asset Management AI Agent</h1>
          <p className="text-2xl text-gray-400 mb-8">How can I help you today?</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {actions.map((action, index) => (
              <ActionButton key={index} {...action} />
            ))}
          </div>

          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-sm">
              <span className="mr-2">⭐</span>
              Suggested
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
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
                <button className="p-2 hover:bg-gray-200 rounded">
                  <Printer className="h-5 w-5" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Ask anything about Eptura Asset, use @ to find from files"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

