import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart:cartSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;