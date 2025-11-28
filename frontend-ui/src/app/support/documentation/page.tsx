import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, API references, and resources to help you get the most out of CampusVote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Getting Started */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of setting up and configuring your first election with CampusVote.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Account Setup</li>
                <li>• Creating Your First Election</li>
                <li>• Voter Registration</li>
                <li>• Election Configuration</li>
              </ul>
            </div>

            {/* API Reference */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Complete technical documentation for integrating with CampusVote's REST API.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Authentication</li>
                <li>• Election Management</li>
                <li>• Voter Operations</li>
                <li>• Results & Analytics</li>
              </ul>
            </div>

            {/* Best Practices */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Expert recommendations for running successful, secure, and accessible elections.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Security Guidelines</li>
                <li>• Accessibility Standards</li>
                <li>• Election Planning</li>
                <li>• Troubleshooting</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Setting Up Elections</h4>
                <p className="text-sm text-gray-600">Step-by-step guide to create and configure elections</p>
              </a>
              <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Voter Management</h4>
                <p className="text-sm text-gray-600">How to add, import, and manage voter lists</p>
              </a>
              <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Security Features</h4>
                <p className="text-sm text-gray-600">Understanding encryption and verification</p>
              </a>
              <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Results & Analytics</h4>
                <p className="text-sm text-gray-600">Accessing and interpreting election results</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
