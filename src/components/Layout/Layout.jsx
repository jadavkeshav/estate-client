import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ClerkProvider, useAuth, useUser } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom";
import UserDetailContext from '../context/UserDetailsContext'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api.js'


const Layout = () => {
    const { user } = useUser();
    const { isSignedIn, userId } = useAuth();
    const { setUserDetails } = useContext(UserDetailContext)

    const { mutate } = useMutation({
        mutationKey: [user?.primaryPhoneNumber.phoneNumber],
        mutationFn: () => createUser(user?.primaryPhoneNumber.phoneNumber)
    })

    useEffect(() => {
        isSignedIn && mutate()
    }, [isSignedIn])

    return (
        <>

            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout
