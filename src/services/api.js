import { API_BASE_URL } from '../config/api';

export const apiService = {
  // Get all movies
  getMovies: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/movies`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  // Get movie by ID
  getMovieById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/movies/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching movie:', error);
      throw error;
    }
  },

  // Get all blogs
  getBlogs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Get blog by ID
  getBlogById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      if (!response.ok) {
        throw new Error('Backend is not responding');
      }
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }
}; 