import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: { value: [] },
    reducers: {
        switchProductsState: (state, action) => {
        state.value = action.payload;
      },
    },
});

export const { switchProductsState } = productsSlice.actions;
