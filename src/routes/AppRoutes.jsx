import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import UserProfile from '../components/Profile/UserProfile'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import { authContext } from '../store/authContext'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
	const authCtx = useContext(authContext)

	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				{/* {!authCtx.isLoggedIn && (
					<Route path='/auth'>
						<AuthPage />
					</Route>
				)} */}
				<PrivateRoute
					path={'/auth'}
					component={<AuthPage />}
					when={!authCtx.isLoggedIn}
					to={'/'}
				/>
				<PrivateRoute
					path={'/profile'}
					component={<UserProfile />}
					when={authCtx.isLoggedIn}
					to={'/auth'}
				/>
			</Switch>
		</Layout>
	)
}

export default AppRoutes
