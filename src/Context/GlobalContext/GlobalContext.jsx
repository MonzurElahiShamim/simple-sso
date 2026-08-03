import { createContext, useContext, useState } from 'react'
import { ROLE_PERMISSIONS, USERS } from '../../data/users'

const GlobalContext = createContext({})

export function useGlobalContext() {
  return useContext(GlobalContext)
}

export function GlobalContextProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('sso-user')
    return stored ? JSON.parse(stored) : null
  })
  const [count, setCount] = useState(0)

  const canAccess = (route) =>
    user ? ROLE_PERMISSIONS[user.role]?.includes(route) : false

  const login = (email, password) => {
    const found = USERS.find(
      (u) => u.email === email.toLowerCase().trim() && u.password === password,
    )
    if (!found) return false
    const session = {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
    }
    sessionStorage.setItem('sso-user', JSON.stringify(session))
    setUser(session)
    return true
  }

  const logout = () => {
    sessionStorage.removeItem('sso-user')
    setUser(null)
  }

  return (
    <GlobalContext.Provider
      value={{
        open,
        setOpen,
        user,
        canAccess,
        login,
        logout,
        count,
        increment: () => setCount((c) => c + 1),
        decrement: () => setCount((c) => c - 1),
        reset: () => setCount(0),
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}