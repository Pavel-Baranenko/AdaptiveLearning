import { create } from 'zustand';
import { persist } from 'zustand/middleware';



export const useAuthStore = create()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,

      saveUser: (userData) => set({ isAuth: true, user: userData }),

      logout: () => set({ isAuth: false, user: null }),

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null
        }))
    }),
    {
      name: 'auth-storage'
    }
  )
);