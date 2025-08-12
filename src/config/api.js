// API Configuration
const API_CONFIG = {
  // Local development
  development: {
    baseURL: 'http://localhost:5000/api'
  },
  // Production (deployed)
  production: {
    baseURL: 'https://cinema-backend-api.onrender.com/api' // This will be your Render URL
  }
};

// Get current environment
const isProduction = process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost';

// Export the appropriate configuration
export const API_BASE_URL = isProduction 
  ? API_CONFIG.production.baseURL 
  : API_CONFIG.development.baseURL;

console.log('🌐 Using API URL:', API_BASE_URL); 