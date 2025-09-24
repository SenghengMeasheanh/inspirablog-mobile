import { create } from 'zustand'

interface UIState {
  isDrawerOpen: boolean
  theme: 'light' | 'dark'
  fontSize: 'small' | 'medium' | 'large'
  notifications: {
    enabled: boolean
    sound: boolean
  }
}

interface UIStore extends UIState {
  // Drawer actions
  openDrawer: () => void
  closeDrawer: () => void
  toggleDrawer: () => void

  // Theme actions
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void

  // Settings actions
  setFontSize: (size: 'small' | 'medium' | 'large') => void
  setNotifications: (enabled: boolean) => void
  setNotificationSound: (sound: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  // Initial state
  isDrawerOpen: false,
  theme: 'light',
  fontSize: 'medium',
  notifications: {
    enabled: true,
    sound: true,
  },

  // Drawer actions
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  // Theme actions
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  // Settings actions
  setFontSize: (fontSize) => set({ fontSize }),
  setNotifications: (enabled) =>
    set((state) => ({
      notifications: { ...state.notifications, enabled },
    })),
  setNotificationSound: (sound) =>
    set((state) => ({
      notifications: { ...state.notifications, sound },
    })),
}))
