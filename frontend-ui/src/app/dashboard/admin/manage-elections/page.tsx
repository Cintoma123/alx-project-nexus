'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/lib/context/AuthProvider';

// Mock elections data
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
    candidates: 0,
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

export default function ManageElectionsPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [elections, setElections] = useState(mockElections);

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
          <p className="mt-4 text-gray-600">Loading elections...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'admin') {
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

  const handleDeleteElection = (electionId: string) => {
    if (confirm('Are you sure you want to delete this election? This action cannot be undone.')) {
      setElections(prev => prev.filter(e => e.id !== electionId));
      alert('Election deleted successfully');
    }
  };

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Manage Elections</h1>
              <p className="mt-2 text-sm text-gray-500">
                View, edit, and manage all elections.
              </p>
            </div>
            <Link
              href="/dashboard/admin/create-election"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              + Create Election
            </Link>
          </div>

          {elections.length === 0 ? (
            <div className="mt-8 bg-white shadow rounded-lg p-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🗳️</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Elections Created</h3>
                <p className="text-gray-500 mb-6">Get started by creating your first election.</p>
                <Link
                  href="/dashboard/admin/create-election"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium"
                >
                  Create Election
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {elections.map((election) => (
                    <li key={election.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              <p className="text-lg font-medium text-gray-900 truncate">
                                {election.title}
                              </p>
                              <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(election.status)}`}>
                                {election.status}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600 truncate">
                              {election.description}
                            </p>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                              <span className="mr-4">
                                Start: {new Date(election.startDate).toLocaleDateString()}
                              </span>
                              <span className="mr-4">
                                End: {new Date(election.endDate).toLocaleDateString()}
                              </span>
                              <span className="mr-4">
                                Candidates: {election.candidates}
                              </span>
                              <span>
                                Total Votes: {election.totalVotes}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Link
                              href={`/dashboard/admin/add-candidates?election=${election.id}`}
                              className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-md text-sm font-medium"
                            >
                              Add Candidates
                            </Link>
                            <Link
                              href={`/dashboard/admin/manage-voters?election=${election.id}`}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
                            >
                              Manage Voters
                            </Link>
                            <Link
                              href={`/dashboard/admin/results?election=${election.id}`}
                              className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-md text-sm font-medium"
                            >
                              View Results
                            </Link>
                            <button
                              onClick={() => handleDeleteElection(election.id)}
                              className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
