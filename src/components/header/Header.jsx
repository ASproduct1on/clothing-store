import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice.js'
import { toggleForm } from '../../features/user/userSlice.js'
import Avatar from '../../images/avatar.jpg'
import Logo from '../../images/logo.svg'
import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes.js'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [searchValue, setSearchValue] = useState('')
	const { currentUser } = useSelector(({ user }) => user)

	const [values, setValues] = useState({ name: 'Guest', avatar: Avatar })

	const { data, isLoading } = useGetProductsQuery({ title: searchValue })

	useEffect(() => {
		if (!currentUser) return

		setValues(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true))
		} else {
			navigate(ROUTES.PROFILE)
		}
	}

	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	}

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={Logo} alt='Stuff' />
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div
						className={styles.avatar}
						style={{ backgroundImage: `url(${values.avatar})` }}
					/>
					<div className={styles.username}>{values.name}</div>
				</div>
				<form className={styles.form}>
					<div className={styles.icon}>
						<svg className='icon'>
							<use xlinkHref={`/sprite.svg#search`} />
						</svg>
					</div>
					<div className={styles.input}>
						<input
							type='search'
							name='search'
							placeholder='search'
							autoComplete='off'
							onChange={handleSearch}
							value={searchValue}
						/>
					</div>

					{searchValue && (
						<div className={styles.box}>
							{isLoading
								? 'Loading'
								: !data.length
								? 'No results'
								: data.map(({ title, images, id }) => {
										return (
											<Link
												key={id}
												onClick={() => setSearchValue('')}
												to={`/products/${id}`}
											>
												<div
													className={styles.image}
													style={{ backgroundImage: `url(${images[0]})` }}
												/>

												<div className={styles.title}>{title}</div>
											</Link>
										)
								  })}
						</div>
					)}
				</form>
				<div className={styles.account}>
					<Link to={ROUTES.HOME} className={styles.favourites}>
						<svg className={styles['icon-fav']}>
							<use xlinkHref={`/sprite.svg#heart`} />
						</svg>
					</Link>

					<Link to={ROUTES.CART} className={styles.cart}>
						<svg className={styles['icon-cart']}>
							<use xlinkHref={`/sprite.svg#bag`} />
						</svg>

						<span className={styles.count}>2</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
