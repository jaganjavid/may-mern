import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getProducts: builder.query({
            query:() => ({
                url:PRODUCT_URL
            })
        }),
        getProductDetails:builder.query({
            query:(productId) => ({
                url:`${PRODUCT_URL}/${productId}`
            }) 
        })
    })
});


export const {useGetProductsQuery,useGetProductDetailsQuery} = productsApiSlice;