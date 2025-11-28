'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/lib/context/AuthProvider';

export default function AdminDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'admin')) {
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

  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage campus elections, monitor voting activity, and oversee system operations.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Create Election */}
            <Link
              href="/dashboard/admin/create-election"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">➕</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Create Election
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Set up new elections
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* Manage Elections */}
            <Link
              href="/dashboard/admin/manage-elections"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">⚙️</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Manage Elections
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Edit and control elections
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* Add Candidates */}
            <Link
              href="/dashboard/admin/add-candidates"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">👥</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Add Candidates
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Manage election candidates
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* Manage Voters */}
            <Link
              href="/dashboard/admin/manage-voters"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">🗂️</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Manage Voters
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Upload and manage voters
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* View Results */}
            <Link
              href="/dashboard/admin/results"
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
                        View Results
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Election results and analytics
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>

            {/* System Analytics */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">📈</div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        System Analytics
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        Coming Soon
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
