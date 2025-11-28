'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const navigationItems = [
    {
      name: 'Products',
      dropdown: [
        { name: 'Features', href: '/products/features' },
        { name: 'Pricing', href: '/products/pricing' },
        { name: 'Security', href: '/products/security' },
        { name: 'Integrations', href: '/products/integrations' },
      ],
    },
    {
      name: 'Support',
      dropdown: [
        { name: 'Documentation', href: '/support/documentation' },
        { name: 'Help Center', href: '/support/help-center' },
        { name: 'Contact Us', href: '/support/contact-us' },
        { name: 'Status', href: '/support/status' },
      ],
    },
    {
      name: 'About Us',
      href: '/about-us',
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  const handleLogin = () => {
    router.push('/auth/login')
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              CampusVote
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          <div className="py-1">
                            {item.dropdown.map((subItem) => (
                              <button
                                key={subItem.href}
                                onClick={() => handleNavigation(subItem.href)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href!)}
                      className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.href}
                            onClick={() => handleNavigation(subItem.href)}
                            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-sm w-full text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href!)}
                    className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full mt-4"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
