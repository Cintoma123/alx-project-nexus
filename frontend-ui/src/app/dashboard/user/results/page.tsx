'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/context/AuthProvider';

// Mock completed elections data
const mockCompletedElections = [
  {
    id: '3',
    title: 'Sports Committee Election',
    description: 'Elect members for the Sports Committee',
    endDate: '2024-12-15',
    totalVotes: 189,
    winner: 'David Wilson',
    winnerVotes: 67,
    candidates: [
      { id: '1', name: 'David Wilson', votes: 67, percentage: 35 },
      { id: '2', name: 'Emma Brown', votes: 58, percentage: 31 },
      { id: '3', name: 'Frank Miller', votes: 42, percentage: 22 },
      { id: '4', name: 'Grace Lee', votes: 22, percentage: 12 },
    ],
  },
  {
    id: '4',
    title: 'Library Committee Election 2024',
    description: 'Choose representatives for the Library Committee',
    endDate: '2024-11-30',
    totalVotes: 156,
    winner: 'Helen Taylor',
    winnerVotes: 52,
    candidates: [
      { id: '1', name: 'Helen Taylor', votes: 52, percentage: 33 },
      { id: '2', name: 'Ian Johnson', votes: 48, percentage: 31 },
      { id: '3', name: 'Julia Martinez', votes: 35, percentage: 22 },
      { id: '4', name: 'Kevin Anderson', votes: 21, percentage: 14 },
    ],
  },
];

export default function ResultsPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [elections, setElections] = useState(mockCompletedElections);

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
          <p className="mt-4 text-gray-600">Loading election results...</p>
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Election Results</h1>
              <p className="mt-2 text-sm text-gray-500">
                View results from completed elections.
              </p>
            </div>
          </div>

          {elections.length === 0 ? (
            <div className="mt-8 bg-white shadow rounded-lg p-12">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Completed Elections</h3>
                <p className="text-gray-500">Election results will appear here once elections are completed.</p>
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-8">
              {elections.map((election) => (
                <div key={election.id} className="bg-white shadow rounded-lg overflow-hidden">
                  {/* Election Header */}
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{election.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">{election.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>Ended: {new Date(election.endDate).toLocaleDateString()}</span>
                          <span>Total Votes: {election.totalVotes}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Winner</div>
                        <div className="text-lg font-semibold text-green-600">{election.winner}</div>
                        <div className="text-sm text-gray-600">{election.winnerVotes} votes</div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Final Results</h3>
                    <div className="space-y-4">
                      {election.candidates
                        .sort((a, b) => b.votes - a.votes)
                        .map((candidate, index) => (
                        <div key={candidate.id} className="flex items-center space-x-4">
                          <div className="flex-shrink-0 w-8 text-center">
                            {index === 0 ? (
                              <div className="text-yellow-500 text-lg">🏆</div>
                            ) : (
                              <span className="text-gray-500 font-medium">#{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900">{candidate.name}</span>
                              <span className="text-sm text-gray-600">
                                {candidate.votes} votes ({candidate.percentage}%)
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full transition-all duration-300 ${
                                  index === 0 ? 'bg-yellow-400' : 'bg-blue-600'
                                }`}
                                style={{ width: `${candidate.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
