import React, { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useUser } from '@clerk/clerk-react'
import { getAllBookings, getAllFav } from "../utils/api";
import UserDetailContext from "../components/context/UserDetailsContext";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useUser();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.primaryPhoneNumber.phoneNumber),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails.bookings]);

  return { data, isError, isLoading, refetch };
};

export default useBookings;