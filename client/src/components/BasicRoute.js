//Dashboard cannot be accessed unless Logged in

import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const BasicRoute = ({ children, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => !authenticated ? (children) : (
                    <Navigate to="/login" replace state={{ from: location }} />
                )
            }
        />
    )
}

const mapStateToProps = ({ session }) => ({
    authenticated: session.authenticated
})


export default connect(mapStateToProps)(BasicRoute);