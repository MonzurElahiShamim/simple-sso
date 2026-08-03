import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import RequireRole from './components/RequireRole'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Editor from './pages/Editor'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<RequireRole roles={['admin', 'editor', 'viewer']} />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route element={<RequireRole roles={['admin', 'editor']} />}>
        <Route element={<Layout />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
      </Route>

      <Route element={<RequireRole roles={['admin']} />}>
        <Route element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App