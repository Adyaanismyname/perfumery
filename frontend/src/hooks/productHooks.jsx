import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getFeaturedProducts } from "../api/productAPI";


export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useFeaturedProducts = () => {
    return useQuery({
        queryKey: ["featuredProducts"],
        queryFn: getFeaturedProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}






