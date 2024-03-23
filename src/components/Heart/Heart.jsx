import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck'
import { useMutation } from 'react-query'
import { useUser } from '@clerk/clerk-react'
import UserDetailContext from '../context/UserDetailsContext'
import { checkFav, updateFavourites } from '../../utils/common.js'
import { toFav } from "../../utils/api.js"
const Heart = ({ id }) => {
    const [heartColor, setHeartColor] = useState('white')
    const { validateLogin } = useAuthCheck()
    const { user } = useUser()
    const { userDetails: { favourites }, setUserDetails } = useContext(UserDetailContext)


    useEffect(() => {
        setHeartColor(checkFav(id, favourites));
    }, [favourites, id]);

    const { mutate } = useMutation({
        mutationFn: () => toFav(id, user?.primaryPhoneNumber.phoneNumber),
        onSuccess: (data) => {
            if (data && data.favourites) {
                setUserDetails((prev) => ({
                    ...prev,
                    favourites: data.favourites
                }));
                setHeartColor((prevColor) => checkFav(id, data.favourites));
            }
        }
    });
    const handleLike = () => {
        if (validateLogin()) {
            mutate();
            setHeartColor(prev => prev === "#fa3e5f" ? "white" : "#fa3e5f");
        }
    }


    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation()
            handleLike()
        }} />
    )
}

export default Heart
