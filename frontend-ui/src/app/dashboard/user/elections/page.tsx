'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/context/AuthProvider';

// Mock election data since backend is not ready
const mockElections = [
  {
    id: '1',
    title: 'Student Council President 2025',
    description: 'Elect the next Student Council President',
    startDate: '2025-01-15',
    endDate: '2025-01-30',
    status: 'active',
    candidates: 3,
    totalVotes: 245,
  },
  {
    id: '2',
    title: 'Faculty Representative Election',
    description: 'Choose your faculty representatives',
    startDate: '2025-02-01',
    endDate: '2025-02-15',
    status: 'upcoming',
    candidates: 5,
    totalVotes: 0,
  },
  {
    id: '3',
    title: 'Sports Committee Election',
    description: 'Elect members for the Sports Committee',
    startDate: '2024-12-01',
    endDate: '2024-12-15',
    status: 'ended',
    candidates: 4,
    totalVotes: 189,
  },
];

export default function ElectionsPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [elections, setElections] = useState(mockElections);

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
          <p className="mt-4 text-gray-600">Loading elections...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'user') {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ended':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const activeElections = elections.filter(e => e.status === 'active');
  const upcomingElections = elections.filter(e => e.status === 'upcoming');

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Elections</h1>
              <p className="mt-2 text-sm text-gray-500">
                Participate in active elections and view upcoming ones.
              </p>
            </div>
          </div>

          {/* Active Elections */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Active Elections</h2>
            {activeElections.length === 0 ? (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗳️</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Elections</h3>
                  <p className="text-gray-500">There are currently no active elections to vote in.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activeElections.map((election) => (
                  <div key={election.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">{election.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(election.status)}`}>
                          {election.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{election.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex justify-between">
                          <span>Candidates:</span>
                          <span>{election.candidates}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Votes:</span>
                          <span>{election.totalVotes}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ends:</span>
                          <span>{new Date(election.endDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/dashboard/user/elections/${election.id}`}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center block"
                        >
                          Vote Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Elections */}
          <div className="mt-12">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Elections</h2>
            {upcomingElections.length === 0 ? (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Elections</h3>
                  <p className="text-gray-500">Check back later for upcoming elections.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingElections.map((election) => (
                  <div key={election.id} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">{election.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(election.status)}`}>
                          {election.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{election.description}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex justify-between">
                          <span>Candidates:</span>
                          <span>{election.candidates}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Starts:</span>
                          <span>{new Date(election.startDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          disabled
                          className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed"
                        >
                          Voting Not Started
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
