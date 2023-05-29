import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getProductById,
  getProducts,
  getProductsByCategory,
  getProductsBySubCategory,
  login,
  register,
  getUserInfo,
  toggleFavoriteProduct,
  updateUserInfo,
  UploadPhoto,
  logout,
  writeComment,
  getComments,
  getFavoriteProducts
} from "../api";

export const useProducts = () => {
  return useQuery([], getProducts);
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
  const { data, isLoading } = useQuery(["productId", productId], getProductById);
  return { data, isLoading };
};



export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};


export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useUploadPhoto = () => {
  const queryClient = useQueryClient();
  return useMutation(UploadPhoto, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useToggleFavoriteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleFavoriteProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["uid"]);
    },
  });
};

export const useWriteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(writeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["uid"]);
      queryClient.invalidateQueries(["comments"]);
    },
  });
};

export const useGetComments = (productId) => {
  console.log("useGetComments" + productId)
  const { data, isLoading } = useQuery(["comments", productId], getComments);
  return { data, isLoading };
}

export const useGetFavoriteProducts = (id) => {
  console.log("uid=" + id)
  const { data, isLoading } = useQuery([id], getFavoriteProducts);
  return { data, isLoading };
};




