import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './Auth'

const ProtectedRoute = ({component: Component, ...allProps}) =>{
 
    return (
        <Route {...allProps} render={(props) => {
            
            if(auth.isAuthenticated()){
                return <Component {...allProps} />

            }
            else
            {
                return <Redirect 
                to={{  pathname: '/'}} />
            }
            
        }} />
     )
}
export default ProtectedRoute;