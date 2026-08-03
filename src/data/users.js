export const USERS = [
  {
    id: 1,
    name: 'Alice Admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Eddie Editor',
    email: 'editor@gmail.com',
    password: 'editor123',
    role: 'editor',
  },
  {
    id: 3,
    name: 'Vera Viewer',
    email: 'viewer@gmail.com',
    password: 'viewer123',
    role: 'viewer',
  },
]

export const ROLE_PERMISSIONS = {
  admin: ['dashboard', 'editor', 'admin'],
  editor: ['dashboard', 'editor'],
  viewer: ['dashboard'],
}

export const hasAccess = (role, allowedRoles) =>
  allowedRoles.some((r) => r === role)