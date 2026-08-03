import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <div className="page center">
      <h2>403 — Access denied</h2>
      <p>
        You don&apos;t have permission to view this page with your current
        role.
      </p>
      <Link to="/dashboard" className="btn primary">
        Back to dashboard
      </Link>
    </div>
  )
}