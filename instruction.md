Hi cline final stage remember make a reponsive dashboard page for both admin and user
remember the backend api is not yet ready 
4. Dashboard Implementation Order (follow this to finish fast)
STEP 1 — Create Dashboard Layout

DashboardLayout.tsx

AdminLayout.tsx

Include sidebar + top navbar

Wrap children

STEP 2 — Implement Auth Protection

Middleware to block unauthenticated users

Check token on each page load

Redirect login → dashboard when authenticated

STEP 3 — Setup Axios With JWT

Create axiosAuth.ts

Add interceptors

Auto-refresh access token when expired

STEP 4 — Build Student Dashboard Pages

Dashboard home

Elections list

Election details + vote

Profile

STEP 5 — Build Admin Pages

Admin home

Create election

Add candidates

Upload/add voters

Manage elections

View results

@/frontend-ui hi cline implement this CampusVote
Empowering campus democracy with secure, transparent, and accessible voting solutions for educational institutions worldwide.

Product
Features
Pricing
Security
Integrations
Support
Documentation
Help Center
Contact Us
Status

Hi cline for my navigation bar i need only products support About and the login which already 
then under Product
Features
Pricing
Security
Integrations have 
Support
Documentation
Help Center
Contact Us
Status
© 2024 CampusVote. All rights reserved.

🔷 Instruction to Code AI Agent (Use This Exactly):

"Generate a Next.js App Router navigation system with dropdown menus.
The navigation should include Products, Support, About Us, and Login.
Products must have: Features, Pricing, Security, Integrations.
Support must have: Documentation, Help Center, Contact Us, Status.
For each item, create a standalone page under the /app directory using this route structure:

/products/features

/products/pricing

/products/security

/products/integrations

/support/documentation

/support/help-center

/support/contact-us

/support/status

Also create /about-us and /login.
Navigation bar and footer must link to the same routes.
When I click an item from either the navigation dropdown or the footer, it should display the correct page.
Keep the implementation responsive and use Tailwind CSS for styling."


@/frontend-ui HI cline i want u to Generate and worka Next.js App Router navigation system with dropdown menus.
The navigation should include Products, Support, About Us, and Login.
Products must have: Features, Pricing, Security, Integrations.
Support must have: Documentation, Help Center, Contact Us, Status.
For each item, create a standalone page under the /app directory using this route structure:

/products/features

/products/pricing

/products/security

/products/integrations

/support/documentation

/support/help-center

/support/contact-us

/support/status

Also create /about-us and /login.{login button have already exists}
Navigation bar and footer must link to the same routes.
When I click an item from either the navigation dropdown or the footer, it should display the correct page.
Keep the implementation responsive and use Tailwind CSS for styling."