import axios from "axios"

const API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    withCredentials: true, // This ensures cookies are sent with requests
})


const getAllProducts = async () => {
    try {
        console.log('Making API call to:', `${API_BASE_URL}/products/get-all-products`);
        const res = await api.get("/products/get-all-products");
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

const getFeaturedProducts = async () => {
    try {
        console.log('Making API call to:', `${API_BASE_URL}/products/get-featured-products`);
        const res = await api.get("/products/get-featured-products");
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

const getProductById = async (productId) => {
    try {
        console.log('Making API call to:', `${API_BASE_URL}/products/${productId}`);
        const res = await api.get(`/products/${productId}`);
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

const getProductsByCategory = async (categoryId) => {
    try {
        console.log('Making API call to:', `${API_BASE_URL}/products/category/${categoryId}`);
        const res = await api.get(`/products/category/${categoryId}`);
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}


export { getAllProducts, getFeaturedProducts, getProductById, getProductsByCategory };
export default getAllProducts;

