'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    router.push('/auth/register')
  }

  const handleTryDemo = () => {
    router.push('/auth/login')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Secure & Transparent
                <span className="block text-blue-600">Campus Elections</span>
                Made Easy
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Revolutionize your campus democracy with our secure, transparent, and user-friendly voting platform.
                Experience fair elections like never before.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={handleTryDemo}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg"
              >
                Try Demo
              </button>
            </div>
          </div>

          {/* Animated Illustration */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main voting box animation */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform transition-transform duration-300 hover:scale-105">
                <div className="space-y-6">
                  {/* Animated progress bars */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Candidate A</span>
                      <span className="text-sm font-bold text-blue-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full animate-pulse" style={{width: '65%'}}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Candidate B</span>
                      <span className="text-sm font-bold text-green-600">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full animate-pulse" style={{width: '35%'}}></div>
                    </div>
                  </div>

                  {/* Voting icons */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
