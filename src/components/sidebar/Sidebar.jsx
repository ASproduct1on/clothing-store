import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/Sidebar.module.css'

const Sidebar = () => {
	const { list } = useSelector(({ categories }) => categories)

	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>
				<nav>
					<ul className={styles.menu}>
						{list?.map(({ id, name }) => (
							<li className='' key={id}>
								<NavLink
									className={({ isActive }) =>
										`${styles.link} ${isActive ? styles.active : ''}`
									}
									to={`/categories/${id}`}
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className={styles.footer}>
				<a href='/help' target='_blank' className={styles.link}>
					Help
				</a>
				<a href='/terms' target='_blank' className={styles.link}>
					Terms & Conditions
				</a>
			</div>
		</section>
	)
}

export default Sidebar
