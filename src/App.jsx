import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import AppRoutes from './components/routes/Routes.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { getCategories } from './features/categories/categoriesSlice.js'
import { getProducts } from './features/products/productsSlice.js'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts())
	}, [dispatch])

	return (
		<div>
			<Header />
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}

export default App
