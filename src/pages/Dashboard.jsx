import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/GlobalContext/GlobalContext.jsx'

export default function Dashboard() {
  const { user, open, setOpen } = useGlobalContext()

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>
        Welcome back, <strong>{user.name}</strong>! You are signed in with the{' '}
        <span className={`role-badge ${user.role}`}>{user.role}</span> role.
      </p>

      <div className="cards">
        <div className="card">
          <h3>What you can do</h3>
          <ul>
            <li>View your profile and role</li>
            <li>{user.role === 'admin' && 'Manage users & settings (Admin)'}</li>
            <li>
              {(user.role === 'admin' || user.role === 'editor') &&
                'Create and edit content (Editor)'}
            </li>
            <li>
              {user.role === 'viewer' &&
                'Only view content — edit & admin pages are locked'}
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>Available routes</h3>
          <ul>
            <li>
              <Link to="/dashboard">/dashboard</Link> — everyone
            </li>
            {(user.role === 'admin' || user.role === 'editor') && (
              <li>
                <Link to="/editor">/editor</Link> — editor & admin
              </li>
            )}
            {user.role === 'admin' && (
              <li>
                <Link to="/admin">/admin</Link> — admin only
              </li>
            )}
          </ul>
        </div>
        <div className="card">
          <h3>Panel</h3>
          <p>
            useContext demo — panel is currently{' '}
            <strong>{open ? 'OPEN' : 'CLOSED'}</strong>
          </p>
          <div className="card-actions">
            <button
              type="button"
              className="btn primary"
              onClick={() => setOpen(true)}
            >
              Open
            </button>
            <button type="button" className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
            <button type="button" className="btn" onClick={() => setOpen((o) => !o)}>
              Toggle
            </button>
          </div>
          {open && (
            <p className="panel-note">The panel is visible while open is true.</p>
          )}
        </div>
      </div>
    </div>
  )
}