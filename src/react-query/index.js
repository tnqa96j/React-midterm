import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts, getProductsByCategory, getProductsBySubCategory } from "../api";

export const useProducts = () => {
    const { data, isLoading } = useQuery([], getProducts);
    return { data, isLoading };
};

export const useProductsByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getProductsByCategory);
    return { data, isLoading };
};

export const useProductsBySubCategory = (subCategory) => {
    const { data, isLoading } = useQuery([subCategory], getProductsBySubCategory);
    return { data, isLoading };
}

export const useProductById = (productId) => {
    const { data, isLoading } = useQuery([productId], getProductById);
    return { data, isLoading };
};

export const useProductsByuseInfiniteQuery = () => {
    const {
      data,
      isLoading,
      isFetchingNextPage,
      fetchNextPage,
      hasNextPage,
    } = useInfiniteQuery('myQuery', fetchMyData, {
      getNextPageParam: (lastPage) => lastPage.after,
    });
  
    return { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage };
  };





