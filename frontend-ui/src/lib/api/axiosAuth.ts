import axios from 'axios';

// Create axios instance with base configuration
const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api', // Placeholder for backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
axiosAuth.interceptors.request.use(
  (config) => {
    // Get token from localStorage (when backend is ready, this might be from cookies)
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth-storage') : null;

    if (token) {
      try {
        const parsed = JSON.parse(token);
        if (parsed.state?.token) {
          config.headers.Authorization = `Bearer ${parsed.state.token}`;
        }
      } catch (error) {
        console.error('Error parsing auth token:', error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh and errors
axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't already tried to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // TODO: Implement token refresh logic when backend is ready
        // const refreshToken = getRefreshToken();
        // const response = await axios.post('/auth/refresh', { refreshToken });
        // const { token } = response.data;

        // Update token in storage
        // updateAuthToken(token);

        // Retry the original request with new token
        // originalRequest.headers.Authorization = `Bearer ${token}`;
        // return axiosAuth(originalRequest);

        // For now, just reject since backend isn't ready
        console.warn('Token expired - refresh logic not implemented yet');
      } catch (refreshError) {
        // Refresh failed, redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/auth/login';
        }
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (error.response?.status === 403) {
      console.error('Forbidden - insufficient permissions');
    }

    if (error.response?.status >= 500) {
      console.error('Server error - please try again later');
    }

    return Promise.reject(error);
  }
);

// Helper functions for token management (to be implemented when backend is ready)
export const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  try {
    const token = localStorage.getItem('auth-storage');
    if (token) {
      const parsed = JSON.parse(token);
      return parsed.state?.token || null;
    }
  } catch {
    return null;
  }
  return null;
};

export const updateAuthToken = (newToken: string) => {
  if (typeof window === 'undefined') return;
  try {
    const existing = localStorage.getItem('auth-storage');
    if (existing) {
      const parsed = JSON.parse(existing);
      parsed.state.token = newToken;
      localStorage.setItem('auth-storage', JSON.stringify(parsed));
    }
  } catch (error) {
    console.error('Error updating auth token:', error);
  }
};

export const clearAuthToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth-storage');
};

export default axiosAuth;
