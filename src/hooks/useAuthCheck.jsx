import React from 'react'
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const useAuthCheck = () => {
    const { isSignedIn, userId } = useAuth();
    const navigate = useNavigate();
    const validateLogin = () => {
        if (!isSignedIn) {
            toast.error("Please Sign-In", {position: "top-right"});
            navigate("/sign-in")
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
