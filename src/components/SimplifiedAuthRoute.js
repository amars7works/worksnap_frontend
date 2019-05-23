import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { IsUserLoggedIn } from './Networks/Auth'

export const EmployerAuthRoute = ({ component: Component, ...args }) => (
    // Employer Authenticated Route
    <Route  {...args} 
            render={(props) => {

                const { user_status, is_superuser } = IsUserLoggedIn()
                return( user_status && is_superuser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                ))
            }
    } />
)

export const EmployeeAuthRoute = ({component: Component, ...args }) => (
    <Route {...args}
           render={
               (props) => {
                    const { user_status, is_superuser } = IsUserLoggedIn()
                    return(
                        user_status && !is_superuser ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={{ pathname: '/' }} />
                        ) 
                    )
               }
           }
    />
)

export const PublicRoute = ({component: Component, ...args }) => (
    <Route  {...args}
            render={
                (props) => {
                    const { user_status, is_superuser } = IsUserLoggedIn()
                    let path
                    if(user_status) {
                        path= is_superuser ? '/frd/approve/' : '/frd/requests/'
                    }                    
                    return(
                        !user_status && !is_superuser ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={{
                                pathname: path
                            }} />
                        )
                    )
                }
            }
    />
)