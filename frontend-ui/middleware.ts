import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define public paths that don't require authentication
  const publicPaths = [
    '/',
    '/auth/login',
    '/auth/register',
    '/auth/reset-password',
    '/auth/verify-otp'
  ];

  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Check for auth token (when backend is ready, this will be from cookies/headers)
  // For now, since we're using localStorage with zustand persist, we can't check in middleware
  // This middleware will be updated when backend authentication is implemented

  // If accessing protected route without auth, redirect to login
  // For now, we'll handle auth checks in the components themselves
  // This middleware serves as a placeholder for future server-side auth checks

  if (!isPublicPath) {
    // TODO: Check for valid JWT token
    // If no token or invalid token, redirect to /auth/login
    // If valid token, allow access
    // Also check user role for admin routes
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
