'use client'

import { useEffect, useState } from 'react'

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('final-cta')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Your Election Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of educational institutions already using CampusVote to conduct fair, transparent, and secure elections.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free setup & training</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-white bg-opacity-20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    </section>
  )
}
