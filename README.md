# Pong Game Frontend

This project is a Single Page Application that works with a JWT token-based authentication system. It uses a component-based architecture following modern best practices.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── base.component.ts    # Base component class
│   ├── layout/             # Layout components
│   │   └── sidebar.component.ts
│   ├── ui/                 # UI components
│   │   └── login-form.component.ts
│   └── index.ts            # Component exports
├── core/                # Core system files
│   ├── app-manager.ts      # Component lifecycle manager
│   └── index.ts            # Core exports
├── services/            # API services
│   ├── api.service.ts      # HTTP API operations
│   └── index.ts            # Service exports
├── templates/           # HTML templates
│   ├── home.template.ts    # Home page template
│   ├── login.template.ts   # Login page template
│   └── index.ts            # Template exports
├── views/               # Page views
│   ├── home.ts             # Home page
│   └── login.ts            # Login page
├── main.ts              # Application entry point
└── router.ts            # Routing management
```

## ✨ Features

- 🔐 JWT token-based authentication
- 📱 Responsive design (Tailwind CSS)
- 🚀 Modern SPA architecture
- 🔒 Protected routes
- 💾 LocalStorage token storage
- 🧩 Component-based architecture
- 🔄 Automatic component lifecycle management
- 📦 Modular code organization

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open `http://localhost:5173` in your browser

## Usage

### Logging In
1. Fill in the username and password fields on the main page
2. Click the "Login" button
3. After successful login, the JWT token is saved to localStorage
4. You will be automatically redirected to the home page

### Logging Out
1. Click the "Logout" button in the top menu
2. Token and user information are cleared
3. You will be redirected to the login page

## API Integration

The application works with the backend API at `localhost:4000`:

- **POST** `/login` - User login
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "jwt_token" }`

## Technologies

- **TypeScript** - Type safety
- **Vite** - Fast development environment
- **Tailwind CSS** - Styling framework
- **Vanilla JS** - Pure JavaScript (no framework used)

## Project Structure

```
src/
├── main.ts          # Application entry point
├── router.ts        # SPA router
├── utils/
│   └── api.ts       # API helper functions
└── views/
    ├── login.ts     # Login page
    └── home.ts      # Home page
```

## Security

- JWT token'lar localStorage'da saklanır
- Korumalı rotalar için otomatik yönlendirme
- API isteklerinde Authorization header'ı otomatik eklenir 