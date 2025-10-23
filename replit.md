# Contact Form Application

## Overview

A modern, responsive contact form application built with React, Express, and TypeScript. The application provides a user-friendly interface for visitors to submit contact inquiries with built-in form validation, dark/light theme support, and a clean, professional design system based on shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured with HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application)
- **TailwindCSS** for utility-first styling with custom design tokens

**Component Architecture**
- **shadcn/ui** component library (Radix UI primitives) providing accessible, customizable UI components
- Component structure follows the "New York" style variant with custom theming
- Path aliases configured for clean imports (`@/components`, `@/lib`, `@/hooks`)

**State Management**
- **React Hook Form** with Zod resolver for form state and validation
- **TanStack Query (React Query)** for server state management and API interactions
- Local context for theme management (light/dark mode)

**Design System**
- Custom color palette with HSL values for both light and dark modes
- Typography using Inter font family from Google Fonts
- Consistent spacing scale and border radius system
- CSS custom properties for dynamic theming

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for REST API endpoints
- ESM (ES Modules) configuration throughout the codebase
- Development uses `tsx` for TypeScript execution

**API Design**
- RESTful endpoints for contact form submissions
- POST `/api/contact` - Create new contact submission
- GET `/api/contact` - Retrieve all contact submissions
- JSON request/response format with proper error handling

**Validation Layer**
- **Zod** schemas for runtime type validation
- Shared validation between frontend and backend via `@shared/schema.ts`
- User-friendly error messages using `zod-validation-error`

**Development Features**
- Request/response logging middleware
- Custom error handling and status codes
- Vite integration for SSR development mode

### Data Storage

**Database**
- **PostgreSQL** configured via Neon Database serverless driver
- **Drizzle ORM** for type-safe database queries and schema management
- Schema defined in `shared/schema.ts` for full-stack type sharing

**Storage Abstraction**
- `IStorage` interface pattern for data layer abstraction
- In-memory storage implementation (`MemStorage`) for development/testing
- Database schemas defined using Drizzle's table definitions

**Database Schema**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_submissions` table: Contact form entries (id, name, email, subject, message, createdAt)
- UUID generation using PostgreSQL's `gen_random_uuid()`
- Timestamp tracking with automatic `defaultNow()` for creation dates

### External Dependencies

**UI Component Library**
- **Radix UI** - Complete suite of accessible, unstyled UI primitives (dialogs, dropdowns, forms, etc.)
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Type-safe component variants
- **tailwind-merge** & **clsx** - Utility for merging Tailwind classes

**Form Management**
- **react-hook-form** - Performance-optimized form state management
- **@hookform/resolvers** - Integration layer for validation libraries
- **zod** - Schema validation for both client and server
- **drizzle-zod** - Automatic Zod schema generation from Drizzle tables

**Database & ORM**
- **@neondatabase/serverless** - Serverless PostgreSQL driver optimized for edge/serverless environments
- **drizzle-orm** - Lightweight TypeScript ORM
- **drizzle-kit** - CLI tools for migrations and schema management

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting in Replit environment
- **@replit/vite-plugin-cartographer** - Development tooling for Replit
- **@replit/vite-plugin-dev-banner** - Development environment indicators

**Build & Tooling**
- **esbuild** - Fast JavaScript bundler for server-side code
- **vite** - Frontend build tool and dev server
- **TypeScript** - Static type checking across the entire stack
- **PostCSS** with Autoprefixer - CSS processing pipeline

**Design Assets**
- Google Fonts (Inter) - Primary typography
- Custom generated hero image stored in `attached_assets/generated_images/`