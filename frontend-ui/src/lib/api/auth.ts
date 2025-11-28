import axios from 'axios';

// Mock API functions since backend is not ready yet
export const authAPI = {
  // Login with email and password
  login: async (email: string, password: string) => {
    // Mock response - replace with actual API call when backend is ready
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    // Mock validation
    if (email === 'admin@campus.edu' && password === 'admin123') {
      return {
        user: {
          id: '1',
          email: 'admin@campus.edu',
          Fullname: 'Admin User',
          role: 'admin' as const
        },
        token: 'mock-admin-token-12345'
      };
    }

    if (email === 'user@campus.edu' && password === 'user123') {
      return {
        user: {
          id: '2',
          email: 'user@campus.edu',
          Fullname: 'Regular User',
          role: 'user' as const
        },
        token: 'mock-user-token-12345'
      };
    }

    throw new Error('Invalid credentials');
  },

  // Register new user
  register: async (email: string, password: string, name: string) => {
    // Mock response
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if email is university domain
    if (!email.endsWith('@campus.edu')) {
      throw new Error('Only university email addresses are allowed');
    }

    // Mock successful registration
    return {
      message: 'Registration successful. Please check your email for OTP verification.',
      email
    };
  },

  // Verify OTP
  verifyOtp: async (otp: string) => {
    // Mock response
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (otp === '123456') {
      return {
        message: 'OTP verified successfully',
        verified: true
      };
    }

    throw new Error('Invalid OTP');
  },

  // Resend OTP
  resendOtp: async (email: string) => {
    // Mock response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'OTP sent successfully',
      email
    };
  },

  // Reset password
  resetPassword: async (email: string) => {
    // Mock response
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Password reset email sent successfully'
    };
  },

  // Google OAuth login
  googleLogin: async (credential: string) => {
    // Mock response for Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock Google credential validation
    return {
      user: {
        id: '3',
        email: 'student@campus.edu',
        Fullname: 'Student User',
        role: 'user' as const
      },
      token: 'mock-google-token-12345'
    };
  }
};

// When backend is ready, replace mock functions with actual API calls like:
// export const authAPI = {
//   login: async (email: string, password: string) => {
//     const response = await axios.post('/api/auth/login', { email, password });
//     return response.data;
//   },
//   // ... other methods
// };
