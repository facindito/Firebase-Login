import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.js'

export const context = createContext()

export const useAuth = () => {
  const authContext = useContext(context)
  return authContext
}

export function AuthProvider({ children }) {
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  return <context.Provider value={{ signup }}>{children}</context.Provider>
}
