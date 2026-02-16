# Aleena's Developer Portfolio

A modern, fully responsive developer portfolio built with Next.js 14, TypeScript, and TailwindCSS. Features a beautiful UI with smooth animations, dark/light theme support, and a functional contact form with backend integration.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client
- **next-themes** - Dark/light theme support

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Zod** - Schema validation
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero-section.tsx   # Hero section
│   ├── about-section.tsx  # About section
│   ├── projects-section.tsx # Projects section
│   ├── tech-stack-section.tsx # Tech stack section
│   ├── contact-section.tsx # Contact section
│   ├── footer.tsx         # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility libraries
│   ├── utils.ts          # Utility functions
│   └── mongodb.ts        # MongoDB connection
├── models/               # Database models
│   └── Contact.ts        # Contact model
├── backend/              # Express backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Backend models
│   ├── routes/          # API routes
│   ├── server.js        # Server entry point
│   └── package.json    # Backend dependencies
├── public/              # Static assets
├── .env.example         # Environment variables template
├── package.json         # Frontend dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud instance)
- Git

### 1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd backend
npm install
```

### 4. Set up environment variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your configuration
# For frontend:
NEXT_PUBLIC_APP_URL=http://localhost:3000

# For backend:
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 5. Start MongoDB
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas for cloud instance
```

### 6. Run the application

**Start the backend server:**
```bash
cd backend
npm run dev
```

**Start the frontend development server:**
```bash
# In a new terminal
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Features

### ✨ Core Features
- **Responsive Design** - Mobile-first approach with beautiful layouts on all devices
- **Dark/Light Theme** - System preference detection with manual toggle
- **Smooth Animations** - Framer Motion powered micro-interactions
- **SEO Optimized** - Meta tags, semantic HTML, and structured data
- **Type Safety** - Full TypeScript implementation

### 🎨 Design Elements
- **Glassmorphism Effects** - Modern glass-like UI elements
- **Gradient Accents** - Beautiful color gradients throughout
- **Premium Typography** - Clean, readable font hierarchy
- **Hover States** - Interactive feedback on all clickable elements
- **Loading States** - Smooth transitions and loading indicators

### 📧 Contact System
- **Form Validation** - Client and server-side validation
- **Rate Limiting** - Protection against spam submissions
- **MongoDB Storage** - Persistent contact message storage
- **Error Handling** - Comprehensive error management
- **Success Feedback** - User-friendly success messages

### 🚀 Performance
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - Components load as needed
- **Minified Assets** - Production-ready optimization

## 🎯 Sections

### 1. Hero Section
- Animated introduction with name and title
- Call-to-action buttons for contact and CV download
- Social media links with hover effects
- Animated background elements

### 2. About Section
- Personal introduction and story
- Skills progress bars with animations
- Experience timeline with company details
- Professional journey visualization

### 3. Projects Section
- Featured projects showcase
- Project cards with descriptions and tech stacks
- GitHub and live demo links
- Star ratings and featured badges

### 4. Tech Stack Section
- Technology grid with icons
- Hover animations and descriptions
- Categorized by frontend, backend, and tools
- Always learning section with trending technologies

### 5. Contact Section
- Functional contact form with validation
- Contact information display
- Social media integration
- Form submission with success/error states

### 6. Footer
- Quick navigation links
- Social media links
- Back to top functionality
- Copyright information

## 🔧 Configuration

### TailwindCSS Customization
The project uses a custom TailwindCSS configuration with:
- Custom color palette for dark/light themes
- Extended animations and transitions
- Responsive breakpoints
- Custom utility classes

### Theme Configuration
Dark/light theme support through:
- `next-themes` package
- CSS custom properties
- System preference detection
- Smooth theme transitions

### API Configuration
Backend API features:
- RESTful endpoints
- Request validation with Zod
- Error handling middleware
- Rate limiting for protection
- CORS configuration

## 📦 Deployment

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Backend (Heroku/Railway)
```bash
# Example for Heroku
heroku create your-app-name
git push heroku main
```

### Environment Variables for Production
- Set all variables from `.env.example` in your hosting platform
- Update MongoDB URI to production instance
- Configure CORS for your domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Contact

- **Portfolio**: [https://your-portfolio-url.com](https://your-portfolio-url.com)
- **Email**: aleena@example.com
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using modern web technologies
