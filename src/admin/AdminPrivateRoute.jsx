import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminPrivateRoute = ({dbUser}) => {

    const isAdmin = dbUser && dbUser.user && dbUser.user.role === "admin";

    console.log('APR', isAdmin)

    if (isAdmin) {
        return <Outlet/>
    }else{
        return <h1>page not found</h1>
    }
}

export default AdminPrivateRoute
