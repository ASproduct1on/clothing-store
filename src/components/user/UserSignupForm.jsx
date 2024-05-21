import styles from '../../styles/UserSignupForm.module.css'

const UserSignupForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: '',
	})

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	}
	return (
		<div className={styles.wrap}>
			<div className={styles.close}>
				<svg className='icon'>
					<use xlinkHref={`/sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Sign up</div>

			<form className={styles.form}>
				<div className={styles.group}>
					<input
						type=''
						placeholder=''
						name=''
						value={values.email}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.group}>
					<input
						type=''
						placeholder=''
						name=''
						value={values.name}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.group}>
					<input
						type=''
						placeholder=''
						name=''
						value={values.password}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.group}>
					<input
						type=''
						placeholder=''
						name=''
						value={values.avatar}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.link}>I already have an account</div>

				<button type='submit'>Create an account</button>
			</form>
		</div>
	)
}

export default UserSignupForm
