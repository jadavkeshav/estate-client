import React, { useContext, useEffect, useRef } from 'react'
import UserDetailContext from '../components/context/UserDetailsContext'
import { useQuery } from 'react-query'
import { useAuth, useUser } from '@clerk/clerk-react'
import { getAllFav } from '../utils/api'

const useFavourites = () => {
    const { userDetails, setUserDetails } = useContext(UserDetailContext)
    const queryRef = useRef()
    const { user } = useUser()
    const {isSignedIn} = useAuth()
    console.log("sig", isSignedIn)
    const { data, isLoading, isError, reftech } = useQuery({
        queryKey: "allFavourties",
        queryFn: () => getAllFav(user?.primaryPhoneNumber.phoneNumber),
        onSuccess: (data) => setUserDetails((prev) => ({ ...prev, favourites: data })),
        enabled: user !== undefined,
        staleTime: 30000
    })

    queryRef.current = reftech;
    useEffect(() => {
        if (isSignedIn && user !== undefined) {
            queryRef.current && queryRef.current();
        }
    }, [isSignedIn , user])

    return { data, isLoading, isError, reftech }
}

export default useFavourites
