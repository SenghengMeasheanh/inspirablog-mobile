import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors except 408, 429
        if (
          error?.status >= 400 &&
          error?.status < 500 &&
          ![408, 429].includes(error.status)
        ) {
          return false
        }
        // Retry up to 3 times for other errors
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: false,
    },
  },
})

// Query Keys Factory
export const queryKeys = {
  // Auth
  auth: {
    user: () => ['auth', 'user'] as const,
    profile: () => ['auth', 'profile'] as const,
  },

  // Blog
  blog: {
    all: () => ['blog'] as const,
    posts: (filters?: any) => ['blog', 'posts', filters] as const,
    post: (id: string) => ['blog', 'posts', id] as const,
    categories: () => ['blog', 'categories'] as const,
    tags: () => ['blog', 'tags'] as const,
    search: (query: string) => ['blog', 'search', query] as const,
  },

  // User
  user: {
    all: () => ['user'] as const,
    profile: (id: string) => ['user', 'profile', id] as const,
    posts: (id: string) => ['user', 'posts', id] as const,
    favorites: () => ['user', 'favorites'] as const,
  },
} as const
