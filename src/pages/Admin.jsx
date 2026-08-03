import { useAuth } from '../hooks/useAuth'

const USER_ROWS = [
  { id: 1, name: 'Alice Admin', email: 'admin@example.com', role: 'admin' },
  { id: 2, name: 'Eddie Editor', email: 'editor@example.com', role: 'editor' },
  { id: 3, name: 'Vera Viewer', email: 'viewer@example.com', role: 'viewer' },
]

export default function Admin() {
  const { user } = useAuth()

  return (
    <div className="page">
      <h2>Admin panel</h2>
      <p>
        Signed in as <strong>{user.name}</strong> (
        <span className={`role-badge ${user.role}`}>{user.role}</span>). Only
        admins can reach this page.
      </p>
      <div className="card">
        <h3>User management</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {USER_ROWS.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={`role-badge ${u.role}`}>{u.role}</span>
                </td>
                <td>
                  <button type="button" className="btn small">
                    Edit
                  </button>{' '}
                  <button type="button" className="btn small danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}