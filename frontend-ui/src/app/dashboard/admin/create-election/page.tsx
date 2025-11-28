'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import { useAuth } from '@/lib/context/AuthProvider';

export default function CreateElectionPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      alert('Election created successfully!');
      router.push('/dashboard/admin/manage-elections');
    } catch (error) {
      alert('Failed to create election. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Create Election</h1>
              <p className="mt-2 text-sm text-gray-500">
                Set up a new election for students to participate in.
              </p>
            </div>
            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              ← Back
            </button>
          </div>

          <div className="mt-8 bg-white shadow rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              {/* Election Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Election Title *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="e.g., Student Council President 2025"
                  />
                </div>
              </div>

              {/* Election Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    id="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Describe the election and what students will be voting for..."
                  />
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date & Time *
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    name="startDate"
                    id="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().slice(0, 16)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  When voting will begin for this election.
                </p>
              </div>

              {/* End Date */}
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  End Date & Time *
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    name="endDate"
                    id="endDate"
                    required
                    value={formData.endDate}
                    onChange={handleInputChange}
                    min={formData.startDate || new Date().toISOString().slice(0, 16)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  When voting will end for this election.
                </p>
              </div>

              {/* Election Settings */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Election Settings</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="anonymous"
                      name="anonymous"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                      Anonymous voting (recommended for fair elections)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="requireVerification"
                      name="requireVerification"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="requireVerification" className="ml-2 block text-sm text-gray-900">
                      Require email verification for voting
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {isSubmitting ? 'Creating Election...' : 'Create Election'}
                </button>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="text-2xl">ℹ️</div>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Next Steps</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>After creating the election:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Add candidates to the election</li>
                    <li>Upload or add eligible voters</li>
                    <li>Review and publish the election</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
