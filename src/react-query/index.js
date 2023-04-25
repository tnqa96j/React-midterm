import { useQuery } from '@tanstack/react-query'
import {  getProducts } from "../api";

export const useProducts = () => {
    const { data, isLoading } = useQuery([], getProducts)
    return { data, isLoading };
};



