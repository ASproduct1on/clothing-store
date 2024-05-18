import { Link } from 'react-router-dom'
import Avatar from '../../images/avatar.jpg'
import Logo from '../../images/logo.svg'
import styles from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes.js'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={Logo} alt='Stuff' />
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.user}>
					<div
						className={styles.avatar}
						styles={{ backgroundImage: `url(${Avatar})` }}
					/>
					<div className={styles.username}>Guest</div>
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
							onChange={() => {}}
							value=''
						/>
					</div>
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
						{/* {!!cart.length && (
							<span className={styles.count}>{cart.length}</span>
						)} */}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
