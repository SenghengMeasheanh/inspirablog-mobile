import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '../services/api'
import { queryKeys } from '../services/queryClient'
import type { BlogFilters, BlogPost, CreatePostData, PaginatedResponse } from '../types'

// Fetch blog posts with filters
export function usePosts(filters?: BlogFilters) {
  return useQuery({
    queryKey: queryKeys.blog.posts(filters),
    queryFn: async (): Promise<PaginatedResponse<BlogPost>> => {
      const params = new URLSearchParams()

      if (filters?.category) params.append('category', filters.category)
      if (filters?.search) params.append('search', filters.search)
      if (filters?.page) params.append('page', filters.page.toString())
      if (filters?.limit) params.append('limit', filters.limit.toString())
      if (filters?.tags?.length) {
        for (const tag of filters.tags) {
          params.append('tags', tag)
        }
      }

      const queryString = params.toString()
      const endpoint = `/posts${queryString ? `?${queryString}` : ''}`

      return apiClient.get<PaginatedResponse<BlogPost>>(endpoint)
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Fetch single blog post
export function usePost(id: string) {
  return useQuery({
    queryKey: queryKeys.blog.post(id),
    queryFn: (): Promise<BlogPost> => apiClient.get<BlogPost>(`/posts/${id}`),
    enabled: !!id,
  })
}

// Create new post mutation
export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreatePostData): Promise<BlogPost> =>
      apiClient.post<BlogPost>('/posts', data),
    onSuccess: (newPost) => {
      // Invalidate and refetch posts list
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.posts() })

      // Add the new post to the cache
      queryClient.setQueryData(queryKeys.blog.post(newPost.id), newPost)
    },
  })
}

// Update post mutation
export function useUpdatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<CreatePostData>
    }): Promise<BlogPost> => apiClient.patch<BlogPost>(`/posts/${id}`, data),
    onSuccess: (updatedPost) => {
      // Update the specific post in cache
      queryClient.setQueryData(queryKeys.blog.post(updatedPost.id), updatedPost)

      // Invalidate posts list to ensure consistency
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.posts() })
    },
  })
}

// Delete post mutation
export function useDeletePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string): Promise<void> => apiClient.delete(`/posts/${id}`),
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: queryKeys.blog.post(deletedId) })

      // Invalidate posts list
      queryClient.invalidateQueries({ queryKey: queryKeys.blog.posts() })
    },
  })
}

// Fetch blog categories
export function useCategories() {
  return useQuery({
    queryKey: queryKeys.blog.categories(),
    queryFn: (): Promise<string[]> => apiClient.get<string[]>('/categories'),
    staleTime: 1000 * 60 * 30, // 30 minutes - categories don't change often
  })
}

// Fetch blog tags
export function useTags() {
  return useQuery({
    queryKey: queryKeys.blog.tags(),
    queryFn: (): Promise<string[]> => apiClient.get<string[]>('/tags'),
    staleTime: 1000 * 60 * 30, // 30 minutes
  })
}
