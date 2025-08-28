import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Test APIs
export const testAPI = {
  healthCheck: () => api.get("/health"),
  testDatabase: () => api.get("/admin/test-db"),
  getDatabaseInfo: () => api.get("/admin/db-info"),
};

export default api;







