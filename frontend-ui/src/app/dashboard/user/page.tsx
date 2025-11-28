'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/context/AuthProvider';

export default function UserDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'user')) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'user') {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Student Dashboard</h1>
          <p className="mt-2 text-sm text-gray-500">
            Welcome to your CampusVote dashboard. Here you can participate in campus elections and view results.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Active Elections */}
            <Link
              href="/dashboard/user/elections"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">🗳️</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Elections
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Vote in current elections
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* Your Votes */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">✅</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Your Votes
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        0 votes cast
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Election Results */}
            <Link
              href="/dashboard/user/results"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">📊</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Election Results
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        View completed elections
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* Profile */}
            <Link
              href="/dashboard/user/profile"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">👤</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Profile
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Manage your account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
