import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function StatusPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time status of CampusVote services and infrastructure.
            </p>
          </div>

          {/* Overall Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
              <div>
                <h2 className="text-lg font-semibold text-green-800">All Systems Operational</h2>
                <p className="text-green-700">CampusVote is running normally. All services are operational.</p>
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Service Status</h3>
            </div>

            <div className="divide-y divide-gray-200">
              {/* Voting Platform */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Voting Platform</h4>
                      <p className="text-sm text-gray-600">Core voting functionality</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>

              {/* Real-time Results */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Results</h4>
                      <p className="text-sm text-gray-600">Live result updates and analytics</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>

              {/* API Services */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">API Services</h4>
                      <p className="text-sm text-gray-600">REST API and integrations</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>

              {/* Authentication */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Authentication</h4>
                      <p className="text-sm text-gray-600">User login and verification</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>

              {/* Database */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Database</h4>
                      <p className="text-sm text-gray-600">Data storage and retrieval</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Uptime Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <h4 className="font-semibold text-gray-900 mb-1">30-Day Uptime</h4>
              <p className="text-sm text-gray-600">Last 30 days</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.95%</div>
              <h4 className="font-semibold text-gray-900 mb-1">90-Day Uptime</h4>
              <p className="text-sm text-gray-600">Last 3 months</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
              <h4 className="font-semibold text-gray-900 mb-1">Yearly Uptime</h4>
              <p className="text-sm text-gray-600">Last 12 months</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
