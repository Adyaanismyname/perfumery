import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // This ensures cookies are sent with requests
});

// Admin Authentication APIs
export const adminAuthAPI = {
  login: (email) => api.post("/admin/login-admin", { email }),
  verifyOTP: (email, otp) => api.post("/admin/verify-otp", { email, otp }),
  logout: () => api.post("/admin/logout"),
};

export default api;







