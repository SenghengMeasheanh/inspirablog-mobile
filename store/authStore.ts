import * as SecureStore from 'expo-secure-store'
import { create } from 'zustand'
import { type PersistStorage, persist } from 'zustand/middleware'

const secureStorage: PersistStorage<any> = {
  getItem: async (key) => {
    const value = await SecureStore.getItemAsync(key)
    return value ? JSON.parse(value) : null
  },
  setItem: async (key, value) => {
    await SecureStore.setItemAsync(key, JSON.stringify(value))
  },
  removeItem: async (key) => {
    await SecureStore.deleteItemAsync(key)
  },
}

interface AppState {
  user: any | null
  token: string | null
  setUser: (user: any) => void
  setToken: (token: string | null) => void
  clearLocalCredential: () => void
}

export const useAuthStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      clearLocalCredential: () => {
        set({ user: null, token: null })
      },
    }),
    {
      name: 'app-storage',
      storage: secureStorage,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
)
