import { useAuth, useUser } from "@clerk/clerk-react";
import useAuthCheck from "../hooks/useAuthCheck";
import { useContext, useEffect, useState } from "react";
import UserDetailContext from "../components/context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "./api";

export const getUser = () => {
    const { user } = useUser();
    const { validateLogin } = useAuthCheck();
    const { isSignedIn } = useAuth()
    const { userDetails } = useContext(UserDetailContext)
    const [myuser, setMyUser] = useState("");
    const { mutate } = useMutation({
        mutationKey: [user?.primaryPhoneNumber.phoneNumber],
        mutationFn: () => createUser(user?.primaryPhoneNumber.phoneNumber, user.firstName + " " + user.lastName),
        onSuccess: (data) => {
            if (data && data.user) {
                setMyUser(data);
            } else {
                toast.error("Something went wrong, please try again");
            }

        }
    })
    useEffect(() => {
        isSignedIn && mutate()
    }, [isSignedIn])
    console.log("jhonsena", myuser.user.role)

    return{
        userDetails
    }

}