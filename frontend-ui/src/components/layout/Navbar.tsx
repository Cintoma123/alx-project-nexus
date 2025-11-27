'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="text-xl font-bold text-blue-600">
                                CampusVote
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-700">
                                    Welcome, {user.name}
                                </span>
                                {user.role === 'ADMIN' && (
                                    <Link href="/admin">
                                        <Button variant="ghost" size="sm">
                                            Dashboard
                                        </Button>
                                    </Link>
                                )}
                                {user.role === 'STUDENT' && (
                                    <Link href="/student">
                                        <Button variant="ghost" size="sm">
                                            Vote
                                        </Button>
                                    </Link>
                                )}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={logout}
                                    className="flex items-center gap-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="ghost" size="sm">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm">Register</Button>
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn('sm:hidden', isMenuOpen ? 'block' : 'hidden')}>
                <div className="space-y-1 pb-3 pt-2">
                    {user ? (
                        <>
                            <div className="px-4 py-2 text-base font-medium text-gray-700">
                                Welcome, {user.name}
                            </div>
                            {user.role === 'ADMIN' && (
                                <Link
                                    href="/admin"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Dashboard
                                </Link>
                            )}
                            {user.role === 'STUDENT' && (
                                <Link
                                    href="/student"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Vote
                                </Link>
                            )}
                            <button
                                onClick={logout}
                                className="block w-full text-left border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
