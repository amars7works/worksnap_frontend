import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { IsUserLoggedIn } from './Networks/Auth'
import { getLocalAuthState } from './LocalStorage'
import CustomNavigation from './SideNavbar/SideNavbar';

export const EmployerAuthRoute = ({ component: Component, ...args }) => (
    // Employer Authenticated Route
    <Route  {...args} 
            render={(props) => {
                IsUserLoggedIn()
                const { user_status, is_superuser } = getLocalAuthState()
                props = {
                        ...props, 
                        CustomNavigation: CustomNavigation
                        }
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
                    IsUserLoggedIn()
                    const { user_status, is_superuser } = getLocalAuthState()
                    props = {
                            ...props, 
                            CustomNavigation: CustomNavigation
                            }
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

export const PublicRoute = ({component: Component, ...args }) => {
const { employeeRoute, employerRoute } = args
return(
    <Route  {...args}
            render={
                (props) => {
                    IsUserLoggedIn()
                    const { user_status, is_superuser } = getLocalAuthState()
                    if(user_status) {
                        console.log('Im here')
                        return(<Redirect to={{
                            pathname: is_superuser ? employerRoute : employeeRoute
                        }} />)
                    }
                    // added Initial routes to the props
                    props = {
                             ...props, 
                             employerInitialRoute: employerRoute, 
                             employeeInitialRoute: employeeRoute
                            }
                    
                    return(
                        <Component {...props} />                
                    )
                }
            }
    />
)}