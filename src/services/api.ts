
import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: "https://adshub-backend.vercel.app",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Project interfaces based on your schema
export interface Project {
  _id?: string;
  title: string;
  description: string;
  img: string;
  url: string;
  tags: string[];
  category: string;
}

// Contact interface based on your schema
export interface Contact {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  project_brief: string;
  budget: number;
  status: boolean;
}

// Filters interface
export interface Filters {
  IndustryFilters: string[];
  TechStacksFilters: string[];
}

// Pagination and filter parameters
export interface ProjectFilters {
  page?: number;
  limit?: number;
  category?: string;
  tags?: string[];
  search?: string;
}

// Auth API
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  logout: () => {
    localStorage.removeItem('admin_token');
  },
};

// Projects API
export const projectsAPI = {
  getALLAdmin: () => api.get<Project[]>('/api/projects/admin'),
  getAll: () => api.get<Project[]>('/api/projects'),
  getById: (id: string) => api.get<Project>(`/api/projects/${id}`),
  getFiltered: (filters: ProjectFilters) => {
    const params = new URLSearchParams();
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());
    if (filters.category && filters.category !== 'All') params.append('category', filters.category);
    if (filters.tags && filters.tags.length > 0) {
      filters.tags.forEach(tag => {
        if (tag !== 'All') params.append('tags', tag);
      });
    }
    if (filters.search) params.append('search', filters.search);
    
    return api.get<{
      projects: Project[];
      totalCount: number;
      currentPage: number;
      totalPages: number;
    }>(`/api/projects/v1/filtered?${params.toString()}`);
  },
  getFilters: () => api.get<Filters>('/api/filters'),
  create: (project: Omit<Project, '_id'>) => api.post<Project>('/api/projects', project),
  update: (id: string, project: Partial<Project>) => api.put<Project>(`/api/projects/${id}`, project),
  delete: (id: string) => api.delete(`/api/projects/${id}`),
};

// Contacts API
export const contactsAPI = {
  getAll: () => api.get<Contact[]>('/api/contacts'),
  getById: (id: string) => api.get<Contact>(`/api/contacts/${id}`),
  updateStatus: (id: string, status: boolean) => api.patch(`/api/contacts/${id}/status`, { status }),
  delete: (id: string) => api.delete(`/api/contacts/${id}`),
  create: (data: {
    name: string;
    email: string;
    phone: string;
    project_brief: string;
    budget: number;
  }) => api.post<Contact>('/api/contacts', data),
};

export default api;
