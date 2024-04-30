import React from 'react'
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
const useAuthCheck = () => {
    const { isSignedIn, userId } = useAuth();
    const validateLogin = () => {
        if (!isSignedIn) {
            toast.error("Please Sign-In", {position: "top-right"});
            return false;
        }
        else{
            return true
        }
    }
  return (
    {
        validateLogin
    }
  )
}

export default useAuthCheck
