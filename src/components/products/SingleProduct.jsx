import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetProductQuery } from '../../features/api/apiSlice'
import { getRelatedProducts } from '../../features/products/productsSlice.js'

import { ROUTES } from '../../utils/routes.js'

import Product from './Product.jsx'
import Products from './Products.jsx'

const SingleProduct = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const navigate = useNavigate()
	const { related, list } = useSelector(({ products }) => products)

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME)
		}
	}, [isFetching, isLoading, isSuccess])

	useEffect(() => {
		if (!data || !list.length) return

		dispatch(getRelatedProducts(data.category.id))
	}, [data, dispatch, list.length])

	return !data ? (
		<section className='preloader'>Loading...</section>
	) : (
		<>
			<Product {...data} />
			<Products products={related} amount={5} title='Related products' />
		</>
	)
}

export default SingleProduct
