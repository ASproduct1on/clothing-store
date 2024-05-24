import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../features/user/userSlice'
import styles from '../../styles/User.module.css'
import UserSignupForm from './UserSignupForm'

const UserForm = () => {
	const dispatch = useDispatch()
	const { showForm } = useSelector(({ user }) => user)

	const closeForm = () => dispatch(toggleForm(false))

	return showForm ? (
		<>
			<div className={styles.overlay} onClick={closeForm} />
			<UserSignupForm closeForm={closeForm} />
		</>
	) : (
		<></>
	)
}

export default UserForm
