import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth, useUser } from '@clerk/clerk-react'
import UserDetailContext from '../context/UserDetailsContext'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api.js'


const Layout = () => {

    const { user } = useUser();
    const { isSignedIn, userId } = useAuth();
    const { setUserDetails, userDetails } = useContext(UserDetailContext)
    const { mutate } = useMutation({
        mutationKey: [user?.primaryPhoneNumber.phoneNumber],
        mutationFn: () => createUser(user?.primaryPhoneNumber.phoneNumber, user.firstName + " " +user.lastName),
        onSuccess: (data) => {
            if (data && data.user) {
                setUserDetails({
                    favourites: data.user.favResidenciesID || [],
                    bookings: data.user.bookedVisits || [],
                    token: data.token || null
                });
            } else {
                toast.error("Something went wrong, please try again");
            }

        }
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
