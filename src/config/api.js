// API Configuration
const API_CONFIG = {
  // Local development
  development: {
    baseURL: 'http://localhost:5000/api'
  },
  // Production (deployed) - from environment variable
  production: {
    baseURL: process.env.REACT_APP_API_BASE_URL 
  }
};

// Get current environment
const isProduction = process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost';

// Export the appropriate configuration
export const API_BASE_URL = isProduction 
  ? API_CONFIG.production.baseURL 
  : API_CONFIG.development.baseURL;

