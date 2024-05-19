import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import categoriesSlice from './categories/categoriesSlice'
import productsSlice from './products/productsSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		user: userSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
	devTools: true,
})
