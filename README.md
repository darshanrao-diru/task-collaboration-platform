# Task Collaboration Platform

A full-stack SaaS application for team task management with real-time updates, role-based access control, and Kanban board views.

## Features

- 🔐 **Authentication**: JWT-based auth with role-based access control (Admin, Manager, Member)
- 📊 **Kanban Board**: Drag-and-drop task management with multiple views
- 🔄 **Real-time Updates**: WebSocket integration for instant task updates across teams
- 👥 **Team Collaboration**: Invite team members, assign tasks, add comments
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🎨 **Dark Mode**: Built-in dark/light theme support
- ⚡ **Optimistic UI**: Instant feedback on user actions

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.io
- **State Management**: Zustand
- **Auth**: NextAuth.js with JWT

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Setup environment variables:
\`\`\`bash
cp .env.example .env.local
# Edit .env.local with your database credentials
\`\`\`

3. Setup database:
\`\`\`bash
npm run db:push
\`\`\`

4. Start development server:
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

## Project Structure

```
├── pages/
│   ├── api/              # API routes & WebSocket handlers
│   ├── auth/            # Authentication pages
│   ├── dashboard/       # Main app pages
│   └── index.tsx        # Home page
├── components/
│   ├── auth/            # Auth components
│   ├── tasks/           # Task-related components
│   ├── board/           # Kanban board components
│   └── layout/          # Layout components
├── lib/
│   ├── auth.ts          # Auth utilities
│   ├── api.ts           # API client
│   └── db.ts            # Database utilities
├── prisma/
│   └── schema.prisma    # Database schema
└── styles/              # Global styles
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Tasks
- `GET /api/tasks` - Get user's tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `POST /api/tasks/:id/comments` - Add comment

### Teams
- `GET /api/teams` - Get user's teams
- `POST /api/teams` - Create new team
- `POST /api/teams/:id/members` - Add team member

## Database Schema

Key tables:
- `User` - User accounts
- `Team` - Team workspaces
- `Task` - Tasks with status (TODO, IN_PROGRESS, DONE)
- `Comment` - Task comments
- `TeamMember` - Team membership with roles
- `Activity` - Activity log for audit trail

## Development

Run type checking:
\`\`\`bash
npm run type-check
\`\`\`

Run linting:
\`\`\`bash
npm run lint
\`\`\`

Open Prisma Studio:
\`\`\`bash
npm run db:studio
\`\`\`

## Deployment

Deploy to Vercel:
\`\`\`bash
vercel deploy
\`\`\`

## License

MIT
