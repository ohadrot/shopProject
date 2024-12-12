// features/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Array of products
    loading: false, // Loading state
    error: null, // Error state
  },
  reducers: {
    addProduct: (state, action) => {
        const index = state.items.findIndex((product)=>{return product.Name== action.payload.Name})
        if(index == -1)
            state.items = [...state.items,{...action.payload,Quantity: 1}];
        else
            state.items[index].Quantity++;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addProduct, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;