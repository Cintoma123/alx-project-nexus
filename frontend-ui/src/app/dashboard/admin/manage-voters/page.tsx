'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/lib/context/AuthProvider';

export default function ManageVotersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const electionId = searchParams.get('election');
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
          <p className="mt-4 text-gray-600">Loading...</p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Manage Voters</h1>
              <p className="mt-2 text-sm text-gray-500">
                Upload and manage eligible voters for Election ID: {electionId}
              </p>
            </div>
            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              ← Back
            </button>
          </div>

          <div className="mt-8 bg-white shadow rounded-lg p-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🗂️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Manage Voters Feature</h3>
              <p className="text-gray-500">This feature will allow admins to upload voter lists and manage voter eligibility.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
