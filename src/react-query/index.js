import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from "../api";

export const useProducts = () => {
    const { data, isLoading } = useQuery([], getProducts)
    return { data, isLoading };
};

export const useProductById = (productId) => {
    const { data, isLoading } = useQuery([productId], getProductById)
    return { data, isLoading };
}


