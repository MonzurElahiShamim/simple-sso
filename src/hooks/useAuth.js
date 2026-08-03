import { useGlobalContext } from '../Context/GlobalContext/GlobalContext.jsx'

export function useAuth() {
  return useGlobalContext()
}