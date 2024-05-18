import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import styles from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes.js'

const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={Logo} alt='Stuff' />
				</Link>
			</div>
			<div className={styles.rights}>
				Developed by 'Skeha'
				<a href='' target='_blank' rel='noreferrer'>
					Skeha
				</a>
			</div>
			<div className={styles.socials}>
				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`/sprite.svg#facebook`} />
					</svg>
				</a>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`/sprite.svg#instagram`} />
					</svg>
				</a>
				<a href='https://youtube.com' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`/sprite.svg#youtube`} />
					</svg>
				</a>
			</div>
		</section>
	)
}

export default Footer
