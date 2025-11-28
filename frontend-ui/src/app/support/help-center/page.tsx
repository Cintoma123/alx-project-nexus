import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions and get the support you need to run successful elections.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">
                Everything you need to know to set up your first election and get started with CampusVote.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Browse Articles →</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Privacy</h3>
              <p className="text-gray-600 mb-4">
                Learn about our security measures, data protection, and compliance standards.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Troubleshooting</h3>
              <p className="text-gray-600 mb-4">
                Common issues and their solutions to keep your elections running smoothly.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Get Help →</button>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">How to Create Your First Election</h4>
                  <p className="text-sm text-gray-600">A step-by-step guide to setting up your election from start to finish.</p>
                </a>
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Managing Voter Lists</h4>
                  <p className="text-sm text-gray-600">Learn how to import, organize, and manage your voter database.</p>
                </a>
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Election Security Best Practices</h4>
                  <p className="text-sm text-gray-600">Essential security measures to protect your election integrity.</p>
                </a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Understanding Real-time Results</h4>
                  <p className="text-sm text-gray-600">How to monitor and interpret live election results and analytics.</p>
                </a>
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Voting Setup</h4>
                  <p className="text-sm text-gray-600">Configure mobile-friendly voting options for your campus community.</p>
                </a>
                <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Exporting Election Data</h4>
                  <p className="text-sm text-gray-600">How to export results and analytics for reporting and compliance.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
