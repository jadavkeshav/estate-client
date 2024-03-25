import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../utils/myAuth';
import { fetchUserDetails } from '../utils/api';
import { useUser } from '@clerk/clerk-react';

const AdminPrivateRoute = () => {
    const { user } = useUser()
    const myuser = fetchUserDetails(user?.primaryPhoneNumber.phoneNumber)   
    console.log(myuser)

}

export default AdminPrivateRoute
