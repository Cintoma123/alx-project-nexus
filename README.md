# CampusVote - Secure Campus Election Platform

![CampusVote Logo](https://img.shields.io/badge/CampusVote-Electronic--Voting-blue?style=for-the-badge&logo=vote&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.0+-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

CampusVote is a secure and user-friendly digital polling and voting platform designed to modernize campus elections for universities, colleges, and departmental associations. Built as a full-stack application, the platform simulates real-world electronic voting workflows — from authentication and candidate management to ballot casting and live result tracking.

## 🚀 Features

### 🔐 Security & Authentication
- **Role-based Access Control**: Admins manage elections; students authenticate to vote
- **JWT Authentication**: Secure token-based authentication system
- **One-Vote System**: Prevents duplicate or fraudulent voting using server-side verification
- **Email Domain Validation**: Only university email addresses are accepted

### 🗳️ Election Management
- **Election Creation**: Admins can create elections with custom titles and descriptions
- **Voting Timelines**: Set specific start and end dates for elections
- **Candidate Management**: Add, edit, and manage candidate profiles with photos and bios
- **Election Status Tracking**: Real-time status updates (upcoming, active, completed)

### 📊 Analytics & Results
- **Real-time Vote Results**: Live analytics with interactive charts and percentage breakdowns
- **Vote Distribution**: Visual representation of voting patterns
- **Election Statistics**: Comprehensive reporting on voter turnout and results
- **Audit Trail**: Complete logging of all voting activities

### 🎨 User Experience
- **Modern UI/UX**: Fully responsive interface built with Next.js and Tailwind CSS
- **Mobile-First Design**: Optimized for all devices (desktop, tablet, mobile)
- **Intuitive Navigation**: Clean, professional interface with smooth transitions
- **Accessibility**: WCAG compliant design patterns

### 🛠️ Technical Features
- **TypeScript**: Type-safe development for better code quality
- **API-First Architecture**: RESTful API built with clean separation of concerns
- **State Management**: Zustand for efficient client-side state management
- **Form Validation**: React Hook Form with Zod schema validation
- **DevOps Ready**: Dockerized with CI/CD pipeline integration support

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 16.0+ (App Router)
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 4.0+
- **State Management**: Zustand 5.0+
- **Forms**: React Hook Form 7.0+ with Zod validation
- **HTTP Client**: Axios 1.13+

### Backend (Planned)
- **Framework**: Django Rest Framework
- **Language**: Python 3.11+
- **Database**: PostgreSQL
- **Authentication**: JWT with Django Simple JWT
- **API Documentation**: Swagger/OpenAPI

### DevOps & Deployment
- **Containerization**: Docker
- **Version Control**: Git
- **CI/CD**: GitHub Actions (planned)
- **Hosting**: Vercel (frontend), Railway/Heroku (backend)

## 📋 Prerequisites

- Node.js 20.9.0 or later
- npm or yarn package manager
- Git for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Cintoma123/alx-project-nexus.git
cd alx-project-nexus/frontend-ui
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Add any environment variables if needed
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Build for Production
```bash
npm run build
npm start
```

## 📖 Usage

### For Students/Voters
1. **Registration**: Create an account using your university email
2. **Email Verification**: Verify your email address
3. **Authentication**: Log in with your credentials
4. **Browse Elections**: View available elections on your dashboard
5. **Cast Vote**: Select your preferred candidate and submit your vote
6. **View Results**: Monitor live results and analytics

### For Administrators
1. **Admin Login**: Use admin credentials to access admin panel
2. **Create Elections**: Set up new elections with details and timelines
3. **Manage Candidates**: Add candidate profiles and information
4. **Monitor Progress**: Track voting progress and voter turnout
5. **View Analytics**: Access comprehensive election results and statistics

### Demo Credentials
- **Admin Account**: admin@campus.edu / admin123
- **User Account**: user@campus.edu / user123
- **Note**: Only @campus.edu emails are accepted in the system

## 📁 Project Structure

```
frontend-ui/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard pages
│   │   └── api/               # API routes (if needed)
│   ├── components/            # Reusable React components
│   │   ├── AdminLayout.tsx    # Admin dashboard layout
│   │   ├── DashboardLayout.tsx # User dashboard layout
│   │   └── Navbar.tsx         # Navigation component
│   └── lib/                   # Utility libraries
│       ├── api/               # API client functions
│       ├── context/           # React context providers
│       ├── store/             # Zustand stores
│       └── validations/       # Form validation schemas
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Quality
- **ESLint**: Configured for Next.js with TypeScript support
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (recommended)

### Testing
```bash
npm run test         # Run test suite (when implemented)
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report
```

## 🔒 Security Features

- **Input Validation**: All user inputs validated with Zod schemas
- **CSRF Protection**: Built-in Next.js CSRF protection
- **HTTPS Only**: Secure connections enforced
- **Rate Limiting**: API rate limiting (backend implementation)
- **Audit Logging**: Complete audit trail of all actions
- **Data Encryption**: Sensitive data encrypted at rest and in transit

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📈 Roadmap

### Phase 1: Core Features (Current)
- ✅ Basic authentication system
- ✅ Election and candidate management
- ✅ Voting functionality
- ✅ Real-time results display
- ✅ Responsive UI/UX

### Phase 2: Backend Integration
- 🔄 Django REST Framework API
- 🔄 Database integration (PostgreSQL)
- 🔄 JWT authentication backend
- 🔄 Email verification system

### Phase 3: Advanced Features
- 🔄 Multi-election support
- 🔄 Advanced analytics and reporting
- 🔄 Mobile app development
- 🔄 Integration with student information systems

### Phase 4: DevOps & Production
- 🔄 Docker containerization
- 🔄 CI/CD pipeline setup
- 🔄 Cloud deployment (AWS/GCP)
- 🔄 Monitoring and logging

## 📞 Support & Contact

For questions, bug reports, or feature requests, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Heroicons
- Charts and analytics components
- University community for inspiration and feedback

---

**CampusVote** - Democratizing campus elections through secure, transparent, and accessible digital voting technology. 🗳️✨
