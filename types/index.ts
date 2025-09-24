// API Response types
export interface ApiResponse<T> {
  data: T | T[] | null
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  message: string
  status: number
  code?: string
}
