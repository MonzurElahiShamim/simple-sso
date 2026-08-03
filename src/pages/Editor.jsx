import { useAuth } from '../hooks/useAuth'

export default function Editor() {
  const { user } = useAuth()

  return (
    <div className="page">
      <h2>Editor</h2>
      <p>
        Signed in as <strong>{user.name}</strong> (
        <span className={`role-badge ${user.role}`}>{user.role}</span>).
      </p>
      <div className="card">
        <h3>Draft content</h3>
        <textarea
          className="editor-area"
          placeholder="Write your draft here… (editor & admin only)"
          rows={6}
        />
        <div className="card-actions">
          <button type="button" className="btn primary">
            Save draft
          </button>
          <button type="button" className="btn">
            Preview
          </button>
        </div>
      </div>
    </div>
  )
}