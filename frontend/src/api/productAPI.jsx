import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
})


const getAllProducts = async () => {
    try {
        console.log('Making API call to:', `${import.meta.env.VITE_BASE_URL}/api/products/get-all-products`);
        const res = await api.get("/api/products/get-all-products");
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

const getFeaturedProducts = async () => {
    try {
        console.log('Making API call to:', `${import.meta.env.VITE_BASE_URL}/api/products/get-featured-products`);
        const res = await api.get("/api/products/get-featured-products");
        console.log('API Response:', res.data);
        return res.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}


export { getAllProducts, getFeaturedProducts };
export default getAllProducts;

