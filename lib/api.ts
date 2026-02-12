import { API_CONFIG, API_ENDPOINTS } from './constants'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface FetchOptions extends RequestInit {
  data?: any
}

class APIClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    method: HttpMethod = 'GET',
    options?: FetchOptions
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options?.headers,
    }

    const config: RequestInit = {
      method,
      headers,
      ...options,
    }

    if (options?.data && method !== 'GET') {
      config.body = JSON.stringify(options.data)
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error(`API Request Error: ${method} ${endpoint}`, error)
      throw error
    }
  }

  // News endpoints
  async getNews(params?: { category?: string; page?: number; limit?: number }) {
    const queryParams = new URLSearchParams()
    if (params?.category) queryParams.append('category', params.category)
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    
    const endpoint = `${API_ENDPOINTS.getNews}${queryParams.toString() ? `?${queryParams}` : ''}`
    return this.request(endpoint, 'GET')
  }

  async getNewsDetail(id: string) {
    return this.request(API_ENDPOINTS.getNewsDetail(id), 'GET')
  }

  // Achievements endpoints
  async getAchievements(params?: { category?: string; year?: number }) {
    const queryParams = new URLSearchParams()
    if (params?.category) queryParams.append('category', params.category)
    if (params?.year) queryParams.append('year', params.year.toString())
    
    const endpoint = `${API_ENDPOINTS.getAchievements}${queryParams.toString() ? `?${queryParams}` : ''}`
    return this.request(endpoint, 'GET')
  }

  async getAchievementCategories() {
    return this.request(API_ENDPOINTS.getAchievementCategories, 'GET')
  }

  // Gallery endpoints
  async getGallery(params?: { category?: string }) {
    if (params?.category) {
      return this.request(API_ENDPOINTS.getGalleryByCategory(params.category), 'GET')
    }
    return this.request(API_ENDPOINTS.getGallery, 'GET')
  }

  // Poll endpoints
  async getActivePoll() {
    return this.request(API_ENDPOINTS.getActivePoll, 'GET')
  }

  async getPollHistory() {
    return this.request(API_ENDPOINTS.getPollHistory, 'GET')
  }

  async submitVote(pollId: string, optionId: string) {
    return this.request(API_ENDPOINTS.submitVote, 'POST', {
      data: { pollId, optionId },
    })
  }

  // Contact endpoints
  async submitContactForm(data: {
    name: string
    email: string
    subject: string
    message: string
  }) {
    return this.request(API_ENDPOINTS.submitContactForm, 'POST', { data })
  }

  // Staff endpoints
  async getStaff(params?: { role?: string }) {
    if (params?.role) {
      return this.request(API_ENDPOINTS.getStaffByRole(params.role), 'GET')
    }
    return this.request(API_ENDPOINTS.getStaff, 'GET')
  }
}

export const apiClient = new APIClient(API_CONFIG.baseURL)

export default apiClient
