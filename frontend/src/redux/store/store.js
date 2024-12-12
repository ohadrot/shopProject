import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productsListsSlice';

const store = configureStore({
  reducer: {
    productReducer,
  },
});

export default store;