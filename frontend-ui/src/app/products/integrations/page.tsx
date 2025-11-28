import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate CampusVote with your existing campus systems and tools for a unified experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Integration 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Information Systems</h3>
              <p className="text-gray-600 mb-4">
                Integrate with SIS platforms like Banner, PeopleSoft, and Colleague to automatically sync student data and voter rolls.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Banner</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">PeopleSoft</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Colleague</span>
              </div>
            </div>

            {/* Integration 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Systems</h3>
              <p className="text-gray-600 mb-4">
                Connect with Microsoft 365, Google Workspace, or custom SMTP servers for automated notifications and reminders.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Microsoft 365</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Google Workspace</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">SMTP</span>
              </div>
            </div>

            {/* Integration 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Platforms</h3>
              <p className="text-gray-600 mb-4">
                Export voting data to Tableau, Power BI, or Google Analytics for comprehensive election analysis and reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Tableau</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Power BI</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Google Analytics</span>
              </div>
            </div>

            {/* Integration 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Identity Providers</h3>
              <p className="text-gray-600 mb-4">
                Single sign-on integration with Okta, Azure AD, or Shibboleth for seamless authentication across campus systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Okta</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Azure AD</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Shibboleth</span>
              </div>
            </div>

            {/* Integration 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Communication Tools</h3>
              <p className="text-gray-600 mb-4">
                Integrate with Slack, Microsoft Teams, or Discord for real-time election updates and voter engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Slack</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Teams</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Discord</span>
              </div>
            </div>

            {/* Integration 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API & Webhooks</h3>
              <p className="text-gray-600 mb-4">
                RESTful API and webhook support for custom integrations with any campus system or third-party application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">REST API</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Webhooks</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
