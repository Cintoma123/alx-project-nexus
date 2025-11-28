'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/lib/context/AuthProvider';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    Fullname: '',
    email: '',
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'user')) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, user, isLoading, router]);

  useEffect(() => {
    if (user) {
      setFormData({
        Fullname: user.Fullname || '',
        email: user.email || '',
      });
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'user') {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In real app, update profile via API
      // For now, just show success
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      alert('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      Fullname: user?.Fullname || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
              <p className="mt-2 text-sm text-gray-500">
                Manage your account information and settings.
              </p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="bg-white shadow rounded-lg">
            {/* Profile Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {user?.Fullname?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{user?.Fullname}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Student
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="px-6 py-6">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="Fullname" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Fullname"
                      id="Fullname"
                      disabled={!isEditing}
                      value={formData.Fullname}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        !isEditing ? 'bg-gray-50 text-gray-500' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      disabled={!isEditing}
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        !isEditing ? 'bg-gray-50 text-gray-500' : 'bg-white'
                      }`}
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Your university email address cannot be changed.
                  </p>
                </div>

                {/* User ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      disabled
                      value={user?.id || ''}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      disabled
                      value="Student"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    onClick={handleCancel}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isSaving
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    }`}
                  >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Account Actions */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Account Actions</h3>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Sign Out</h4>
                  <p className="text-sm text-gray-500">Sign out of your account on this device.</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Voting History */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Voting History</h3>
            </div>
            <div className="px-6 py-4">
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🗳️</div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">No Voting History</h4>
                <p className="text-gray-500">
                  Your voting history will appear here once you participate in elections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
