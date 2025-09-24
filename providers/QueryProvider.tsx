import { type QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import { queryClient } from '../src/services/queryClient'

interface QueryProviderProps {
  children: React.ReactNode
  client?: QueryClient
}

export function QueryProvider({ children, client = queryClient }: QueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
