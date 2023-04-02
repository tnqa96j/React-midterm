import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = menuSlice.actions;

export default menuSlice.reducer;