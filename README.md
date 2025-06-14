# 🎥 SnapCast - Video Sharing & Recording Platform

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-38B2AC)
![Drizzle](https://img.shields.io/badge/Drizzle-0.43.1-orange)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.2.8-purple)

## 📋 Overview

SnapCast is a modern video sharing and recording platform built with cutting-edge web technologies. Create, share and manage video content directly from your browser with features like screen recording, instant sharing, and comprehensive video management.

<div align="center">
  <img src="public/assets/preview.png" alt="Platform Preview" width="80%" />
</div>

## ✨ Key Features

- **Screen Recording** - Record your screen with audio support
- **Video Upload** - Upload and share video content
- **Google Authentication** - Secure sign-in with Google
- **Video Management** - Organize your video library
- **Public/Private Videos** - Control video visibility
- **User Profiles** - Personalized user spaces
- **Responsive Design** - Works on all modern devices
- **Video Analytics** - Track video views and engagement

## 🚀 Tech Stack

### Frontend
- Next.js 15 with App Router
- React 19 
- TypeScript 5.8
- TailwindCSS 4.1
- Better Auth Client

### Backend
- Drizzle ORM
- PostgreSQL
- Better Auth
- Xata Client

### Development
- Biome for linting/formatting
- Turbopack for fast builds
- Environment variables management

## 🗂️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── (root)/            # Main app routes
│   │   ├── profile/       # User profiles
│   │   ├── upload/        # Video upload
│   │   └── video/         # Video pages
│   └── api/               # API routes
├── components/            # React components
│   ├── FileInput.tsx      # File upload component
│   ├── FormField.tsx      # Form input component
│   ├── Header.tsx         # Page header
│   ├── Navbar.tsx         # Navigation bar
│   └── VideoCard.tsx      # Video preview card
├── lib/                   # Utility functions
│   ├── auth.ts            # Auth configuration
│   ├── auth.client.ts     # Client-side auth
│   └── hooks/             # Custom React hooks
├── drizzle/               # Database setup
│   ├── db.ts             # Database client
│   └── schema.ts         # Database schema
└── constants/            # App constants
```

## ⚙️ Installation

1. **Clone and Install**

```bash
git clone https://github.com/your-username/snapcast.git
cd snapcast
pnpm install
```

2. **Environment Setup**

Create `.env` file based on `.env.example`:

```env
# Auth Configuration
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Database
XATA_API_KEY=""
DATABASE_URL_POSTGRES=""
```

3. **Start Development Server**

```bash
pnpm dev
```

## 🛣️ Routes

- `/` - Home page with video grid
- `/sign-in` - Authentication page
- `/upload` - Video upload form
- `/profile/[id]` - User profiles
- `/video/[videoId]` - Video details

## 💅 Features & Components

### Authentication
- Google OAuth integration
- Protected routes with middleware
- Session management

### Video Management
- Video upload with preview
- Thumbnail generation
- Public/private visibility
- Video metadata editing

### User Interface
- Responsive navbar
- Grid layout for videos
- Form components
- File upload handling

## 🧪 Development

### Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linting
```

### Database Schema

```typescript
// Main tables
user        # User information
session     # Auth sessions
account     # Connected accounts
video       # Video content
verification # Email verification
```

## 📱 Responsive Breakpoints

- Mobile: 320px+
- Tablet: 768px+
- Laptop: 1024px+
- Desktop: 1280px+
- Large: 1536px+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

<p align="center">Built with ❤️ using Next.js 15 and React 19</p>