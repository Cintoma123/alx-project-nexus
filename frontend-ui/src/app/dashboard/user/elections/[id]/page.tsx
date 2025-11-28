'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/context/AuthProvider';

// Mock candidates data
const mockCandidates = [
  {
    id: '1',
    name: 'Alice Johnson',
    position: 'Student Council President',
    description: 'Experienced leader with 3 years in student government. Focus on academic excellence and student welfare.',
    image: '/api/placeholder/150/150',
    votes: 89,
  },
  {
    id: '2',
    name: 'Bob Smith',
    position: 'Student Council President',
    description: 'Tech enthusiast promoting digital innovation in campus life and online learning initiatives.',
    image: '/api/placeholder/150/150',
    votes: 67,
  },
  {
    id: '3',
    name: 'Carol Davis',
    position: 'Student Council President',
    description: 'Environmental activist committed to sustainable campus practices and green initiatives.',
    image: '/api/placeholder/150/150',
    votes: 45,
  },
];

// Mock election data
const mockElection = {
  id: '1',
  title: 'Student Council President 2025',
  description: 'Elect the next Student Council President who will represent student interests and lead campus initiatives.',
  startDate: '2025-01-15',
  endDate: '2025-01-30',
  status: 'active',
  totalVotes: 201,
};

export default function ElectionDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [election, setElection] = useState(mockElection);
  const [candidates, setCandidates] = useState(mockCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'user')) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, user, isLoading, router]);

  // Check if user has already voted (mock logic)
  useEffect(() => {
    // In real app, check with backend
    const votedElections = JSON.parse(localStorage.getItem('votedElections') || '[]');
    if (votedElections.includes(params.id)) {
      setHasVoted(true);
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading election details...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'user') {
    return null;
  }

  const handleVote = async () => {
    if (!selectedCandidate) return;

    setIsVoting(true);
    try {
      // Mock voting delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Update local state
      setCandidates(prev => prev.map(candidate =>
        candidate.id === selectedCandidate
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      ));

      // Mark as voted
      setHasVoted(true);
      const votedElections = JSON.parse(localStorage.getItem('votedElections') || '[]');
      votedElections.push(params.id);
      localStorage.setItem('votedElections', JSON.stringify(votedElections));

      // Show success message
      alert('Vote submitted successfully!');

    } catch (error) {
      alert('Failed to submit vote. Please try again.');
    } finally {
      setIsVoting(false);
    }
  };

  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Election Header */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{election.title}</h1>
                <p className="mt-2 text-gray-600">{election.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>
                    <span className="font-medium">Start Date:</span> {new Date(election.startDate).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">End Date:</span> {new Date(election.endDate).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">Total Votes:</span> {totalVotes}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {election.status}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => router.back()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                ← Back to Elections
              </button>
            </div>
          </div>

          {/* Voting Section */}
          {!hasVoted && election.status === 'active' ? (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Cast Your Vote</h2>
              <p className="text-sm text-gray-600 mb-6">
                Select a candidate to vote for. You can only vote once in this election.
              </p>

              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedCandidate === candidate.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedCandidate(candidate.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="text-lg font-medium text-gray-900">{candidate.name}</h3>
                          <input
                            type="radio"
                            name="candidate"
                            value={candidate.id}
                            checked={selectedCandidate === candidate.id}
                            onChange={() => setSelectedCandidate(candidate.id)}
                            className="ml-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{candidate.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={handleVote}
                  disabled={!selectedCandidate || isVoting}
                  className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                    !selectedCandidate || isVoting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isVoting ? 'Submitting Vote...' : 'Submit Vote'}
                </button>
              </div>
            </div>
          ) : hasVoted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <div className="text-2xl mr-3">✅</div>
                <div>
                  <h3 className="text-lg font-medium text-green-800">Vote Submitted Successfully</h3>
                  <p className="text-sm text-green-700">Thank you for participating in this election.</p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Current Results */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current Results</h2>
            <div className="space-y-4">
              {candidates.map((candidate) => {
                const percentage = totalVotes > 0 ? Math.round((candidate.votes / totalVotes) * 100) : 0;
                return (
                  <div key={candidate.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{candidate.name}</h3>
                          <p className="text-sm text-gray-600">{candidate.votes} votes ({percentage}%)</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
