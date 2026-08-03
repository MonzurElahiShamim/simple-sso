import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { hasAccess } from '../data/users'

export default function RequireRole({ roles }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!hasAccess(user.role, roles)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}