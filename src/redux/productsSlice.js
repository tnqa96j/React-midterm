import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productitems: [], // 所有產品數據
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productitems = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.productitems;

export default productsSlice.reducer;