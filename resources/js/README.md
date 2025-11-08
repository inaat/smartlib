# SmartLib - Distributed React Application Structure

This project has been restructured into a role-based distributed architecture with separate modules for **Student**, **Librarian**, and **SuperAdmin** roles.

## 📁 Folder Structure

```
resources/js/src/
├── student/                 # Student role module
│   ├── components/          # Student-specific components
│   ├── pages/              # Student pages
│   ├── services/           # Student API services (studentApi.ts)
│   ├── types/              # Student-specific types
│   ├── contexts/           # Student contexts
│   ├── hooks/              # Student custom hooks
│   └── StudentApp.tsx      # Student app entry point
│
├── librarian/              # Librarian role module
│   ├── components/         # Librarian-specific components
│   ├── pages/             # Librarian pages
│   ├── services/          # Librarian API services (librarianApi.ts)
│   ├── types/             # Librarian-specific types
│   ├── contexts/          # Librarian contexts
│   ├── hooks/             # Librarian custom hooks
│   └── LibrarianApp.tsx   # Librarian app entry point
│
├── superadmin/            # SuperAdmin role module
│   ├── components/        # SuperAdmin-specific components
│   ├── pages/            # SuperAdmin pages
│   ├── services/         # SuperAdmin API services (superadminApi.ts)
│   ├── types/            # SuperAdmin-specific types
│   ├── contexts/         # SuperAdmin contexts
│   ├── hooks/            # SuperAdmin custom hooks
│   └── SuperAdminApp.tsx # SuperAdmin app entry point
│
├── shared/               # Shared resources across all roles
│   ├── components/       # Shared components (Auth, etc.)
│   ├── types/           # Shared TypeScript types
│   ├── services/        # Shared services (api.ts, authApi.ts)
│   ├── utils/           # Utility functions
│   ├── contexts/        # Shared contexts (AuthContext, AppContext)
│   └── mockData.ts      # Mock data for development
│
├── App.tsx              # Main app with role-based routing
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🚀 Features

### Role-Based Routing
The main `App.tsx` automatically routes users to their appropriate module based on their role:
- **Students** → `/dashboard` (StudentApp)
- **Librarians** → `/admin` (LibrarianApp)
- **SuperAdmin/Admin** → `/admin` (SuperAdminApp)

### Separate API Services
Each role has its own API service file with role-specific endpoints:
- `student/services/studentApi.ts` - Student endpoints
- `librarian/services/librarianApi.ts` - Librarian endpoints
- `superadmin/services/superadminApi.ts` - SuperAdmin endpoints
- `shared/services/authApi.ts` - Authentication endpoints (shared)
- `shared/services/api.ts` - Axios instance (shared)

### Component Organization
Components are organized by role, making it easy to:
- Find and maintain role-specific functionality
- Avoid code conflicts between different roles
- Scale the application by role
- Share common components via the `shared` folder

## 🔐 Authentication Flow

1. User logs in via `/login` (shared Auth component)
2. `AuthContext` stores user data and role
3. `App.tsx` checks user role and routes to appropriate module
4. Protected routes ensure users can only access their authorized areas

## 📝 Usage

### Student Features
- Dashboard with quick actions
- Browse and book library seats
- Search and reserve books
- View and register for events
- QR code check-in
- Profile and loyalty program

### Librarian Features
- Library management for assigned library
- Seat management and bookings
- User approval and management
- Book inventory management
- Booking oversight
- Analytics for their library

### SuperAdmin Features
- System-wide dashboard and analytics
- Multiple library management
- Create/edit/delete libraries
- Manage all users and roles
- Global settings and configuration
- Seat section management
- Full system oversight

## 🛠️ Development

### Path Aliases

The project uses `@` alias for cleaner imports:
```typescript
// Instead of: import api from '../../shared/services/api'
// Use: import api from '@/shared/services/api'

// Instead of: import { User } from '../../../shared/types'
// Use: import { User } from '@/shared/types'
```

**Alias Configuration:**
- TypeScript: `tsconfig.json` - `"@/*": ["./resources/js/src/*"]`
- Vite: `vite.config.js` - `alias: { '@': '/resources/js/src' }`

### Adding New Features

**For Student Features:**
1. Add components to `student/components/`
2. Add API calls to `student/services/studentApi.ts`
3. Add routes to `student/StudentApp.tsx`
4. Import using `@/student/...` or `@/shared/...`

**For Librarian Features:**
1. Add components to `librarian/components/`
2. Add API calls to `librarian/services/librarianApi.ts`
3. Add routes to `librarian/LibrarianApp.tsx`
4. Import using `@/librarian/...` or `@/shared/...`

**For SuperAdmin Features:**
1. Add components to `superadmin/components/`
2. Add API calls to `superadmin/services/superadminApi.ts`
3. Add routes to `superadmin/SuperAdminApp.tsx`
4. Import using `@/superadmin/...` or `@/shared/...`

**For Shared Features:**
1. Add components to `shared/components/`
2. Add types to `shared/types/`
3. Import from shared folder using `@/shared/...`

### Import Examples

```typescript
// Importing shared types
import { User, Library, Seat } from '@/shared/types';

// Importing shared services
import api from '@/shared/services/api';
import { authAPI } from '@/shared/services/authApi';

// Importing role-specific services
import { studentAPI } from '@/student/services/studentApi';
import { librarianAPI } from '@/librarian/services/librarianApi';
import { superadminAPI } from '@/superadmin/services/superadminApi';

// Importing components
import Dashboard from '@/student/components/Dashboard/Dashboard';
import LoginForm from '@/shared/components/Auth/LoginForm';
```

### API Configuration

Update API base URL in `.env`:
```
VITE_API_URL=http://localhost:8000/api
```

## 🔗 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Laravel** - Backend API

## 📦 Build

```bash
# Development
npm run dev

# Production build
npm run build
```

## 🎯 Benefits of This Structure

1. **Separation of Concerns** - Each role has its own isolated module
2. **Maintainability** - Easy to find and update role-specific code
3. **Scalability** - Add new roles or features without affecting others
4. **Code Organization** - Clear structure for large teams
5. **Performance** - Can implement code-splitting per role
6. **Security** - Role-based access control at the routing level
7. **Development Speed** - Multiple developers can work on different roles simultaneously
