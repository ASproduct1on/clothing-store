import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../features/user/userSlice'
import styles from '../../styles/User.module.css'

const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
	const dispatch = useDispatch()
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		const isNotEmpty = Object.values(values).every(val => val)
		console.log('send!')
		if (!isNotEmpty) return

		dispatch(loginUser(values))
		closeForm()
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.close} onClick={closeForm}>
				<svg className='icon'>
					<use xlinkHref={`/sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Log in</div>

			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.group}>
					<input
						type='email'
						placeholder='Your email'
						name='email'
						value={values.email}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>

				<div className={styles.group}>
					<input
						type='password'
						placeholder='Your password'
						name='password'
						value={values.password}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>

				<div
					className={styles.link}
					onClick={() => toggleCurrentFormType('signup')}
				>
					Create an account
				</div>

				<button type='submit'>Enter to account</button>
			</form>
		</div>
	)
}

export default UserLoginForm
