import React, { useContext, useEffect, useRef } from 'react'
import UserDetailContext from '../components/context/UserDetailsContext'
import { useQuery } from 'react-query'
import { useUser } from '@clerk/clerk-react'
import { getAllFav } from '../utils/api'

const useFavourites = () => {
    const { userDetails, setUserDetails } = useContext(UserDetailContext)
    const queryRef = useRef()
    const { user } = useUser()
    const { data, isLoading, isError, reftech } = useQuery({
        queryKey: "allFavourties",
        queryFn: () => getAllFav(user?.primaryPhoneNumber.phoneNumber),
        onSuccess: (data) => setUserDetails((prev) => ({ ...prev, favourites: data })),
        enabled: user !== undefined,
        staleTime: 30000
    })

    queryRef.current = reftech;
    useEffect(() => {
        queryRef.current && queryRef.current();
    }, [userDetails.favourites  ])

    return { data, isLoading, isError, reftech }
}

export default useFavourites
