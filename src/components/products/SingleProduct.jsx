import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes.js'
import Product from './Product.jsx'

const SingleProduct = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME)
		}
	}, [isFetching, isLoading, isSuccess])

	return !data ? (
		<section className='preloader'>Loading...</section>
	) : (
		<>
			<Product {...data} />
		</>
	)
}

export default SingleProduct
