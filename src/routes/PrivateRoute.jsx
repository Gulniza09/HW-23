import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ path, component, to, when }) => {
	return (
		<div>
			<Route
				path={path}
				render={() => {
					return when === true ? component : <Redirect to={to} />
				}}
			/>
		</div>
	)
}

export default PrivateRoute
