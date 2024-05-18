import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import Home from '../home/Home'
import SingleProduct from '../products/SingleProduct'
const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
		</Routes>
	)
}

export default AppRoutes
