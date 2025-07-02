# RemoteJobs - Job Board Platform

A modern, responsive job board platform built with Next.js 14, React, and Tailwind CSS, specifically designed for remote tech roles.

## 🚀 Features

### Core Functionality
- **Home Page (/)**: Browse all available job openings with search and filtering capabilities
- **Job Details Page (/jobs/[id])**: Detailed view of individual job postings with full descriptions, requirements, and benefits
- **Admin Post Job Page (/admin/post)**: Simple form interface for posting new job opportunities

### Enhanced Features
- **Search & Filtering**: Filter jobs by title, company, location, and job type (Remote/Hybrid/On-site)
- **Dark Mode Toggle**: Seamless light/dark theme switching with system preference detection
- **Form Validation**: Comprehensive client-side validation with helpful error messages
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **State Management**: React hooks and Context API
- **Data Storage**: In-memory storage with mock data (easily replaceable with real API)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-board-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/post/        # Admin job posting page
│   ├── jobs/[id]/         # Dynamic job detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── JobCard.tsx        # Job listing card
│   └── SearchFilters.tsx  # Search and filter interface
├── contexts/              # React Context providers
│   └── ThemeContext.tsx   # Dark/light theme management
├── lib/                   # Utility functions and data
│   └── jobs.ts            # Job data management
├── types/                 # TypeScript type definitions
│   └── job.ts             # Job-related interfaces
└── README.md
```

## 🎨 Design Decisions

### Architecture
- **App Router**: Chose Next.js 14's App Router for better performance and developer experience
- **Component-Based**: Modular component architecture for maintainability and reusability
- **TypeScript**: Full type safety throughout the application
- **Context API**: Lightweight state management for theme switching

### Styling
- **Tailwind CSS**: Utility-first approach for rapid development and consistent design
- **Custom Design System**: Extended Tailwind with custom colors, animations, and spacing
- **Dark Mode**: System-aware theme switching with manual override capability
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes

### User Experience
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Loading States**: Skeleton screens and loading indicators for better perceived performance
- **Form Validation**: Real-time validation with clear error messaging
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation support

## 🔄 Data Management

Currently uses in-memory storage with mock data for simplicity. The data layer is abstracted in `lib/jobs.ts`, making it easy to replace with:

- REST API integration
- GraphQL endpoints
- Database connections (PostgreSQL, MongoDB, etc.)
- External job board APIs

## 🚀 Deployment

The application is ready for deployment on various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Future Improvements

Given more time, I would implement:

### Backend & Database
- **Real Database**: PostgreSQL with Prisma ORM for data persistence
- **Authentication**: User accounts for job seekers and employers
- **API Routes**: RESTful API endpoints for job management
- **File Uploads**: Resume and company logo upload functionality

### Enhanced Features
- **Advanced Search**: Full-text search with Elasticsearch or similar
- **Job Applications**: Built-in application system with status tracking
- **Email Notifications**: Automated alerts for new jobs and applications
- **Analytics Dashboard**: Job posting performance and application metrics
- **Payment Integration**: Paid job posting tiers with Stripe

### Performance & SEO
- **Static Generation**: ISR for job listings to improve performance
- **SEO Optimization**: Meta tags, structured data, and sitemap generation
- **Image Optimization**: Automatic image compression and WebP conversion
- **Caching Strategy**: Redis for API response caching

### Testing & Quality
- **Unit Tests**: Jest and React Testing Library
- **E2E Tests**: Playwright for critical user journeys
- **Performance Monitoring**: Web Vitals tracking and optimization
- **Error Tracking**: Sentry integration for production monitoring

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.