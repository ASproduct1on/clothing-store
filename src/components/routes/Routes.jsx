import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import SingleCategories from '../categories/SingleCategories'
import Home from '../home/Home'
import SingleProduct from '../products/SingleProduct'
import Profile from '../profile/Profile'
const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategories />} />
		</Routes>
	)
}

export default AppRoutes
