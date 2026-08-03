import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { USERS } from '../data/users'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  const from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!login(email, password)) {
      setError('Invalid email or password.')
    } else {
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className='text-center'>Sign in</h1>
        {/* <p className="login-sub">Sign in to access your account</p> */}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn primary">
          Sign in
        </button>
        <button type=" " className="btn secondary">
          Log in using SSO
        </button>
      </form>

      <div className="demo-box">
        <h2>Demo accounts</h2>
        <table className="demo-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.id}>
                <td>
                  <span className={`role-badge ${u.role}`}>{u.role}</span>
                </td>
                <td>{u.email}</td>
                <td>
                  <code>{u.password}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="demo-note">
          admin can see everything · editor can upload content · viewer is
          read-only
        </p>
      </div>
    </div>
  )
}