# Simple SSO

A simple Single Sign-On demo built with **React + Vite** that shows email/password login with **role-based access control (RBAC)**.

## Features

- Login page with email + password (mock authentication)
- Role-based access control — routes are protected per role
- Unauthorized redirects to a 403 page when a role is not allowed
- Nav links are hidden for routes the user cannot access
- Session persists in `sessionStorage`
- Global state managed with a single **GlobalContext** (provider + hook in one file)

## Demo accounts

| Role    | Email                | Password   | Access                            |
| ------- | -------------------- | ---------- | --------------------------------- |
| admin   | admin@gmail.com    | admin123   | Dashboard, Editor, Admin          |
| editor  | editor@gmail.com   | editor123  | Dashboard, Editor                 |
| viewer  | viewer@gmail.com   | viewer123  | Dashboard only                    |

## Routes

| Path            | Allowed roles                 |
| --------------- | ----------------------------- |
| `/login`        | public                        |
| `/dashboard`    | admin, editor, viewer         |
| `/editor`       | admin, editor                 |
| `/admin`        | admin                         |
| `/unauthorized` | public (403 page)             |

## Project structure

```
src/
├── Context/
│   └── GlobalContext/
│       └── GlobalContext.jsx   # createContext + useGlobalContext + GlobalContextProvider
├── data/
│   └── users.js                # mock users + role permissions
├── hooks/
│   └── useAuth.js              # re-exports useGlobalContext
├── components/
│   ├── Layout.jsx              # nav with role-filtered links
│   └── RequireRole.jsx         # route guard (login redirect / 403)
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Editor.jsx
│   ├── Admin.jsx
│   └── Unauthorized.jsx
├── App.jsx                     # route definitions with role guards
└── main.jsx                    # BrowserRouter + GlobalContextProvider
```

## How access control works

1. `src/data/users.js` defines mock users and a `ROLE_PERMISSIONS` map.
2. `RequireRole` (`src/components/RequireRole.jsx`) wraps routes and checks the user's role.
3. Logged-out users are redirected to `/login`; logged-in users without the required role go to `/unauthorized`.
4. The nav in `Layout.jsx` only renders links the current role can access.

## Getting started

```bash
yarn install
yarn dev
```

## Scripts

```bash
yarn dev      # start dev server
yarn build    # production build
yarn lint     # eslint
yarn preview  # preview production build
```
