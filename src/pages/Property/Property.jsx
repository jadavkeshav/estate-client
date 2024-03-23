import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from "react-query"
import { useLocation } from "react-router-dom"
import { getProperty, removeBooking } from '../../utils/api';
import { PuffLoader } from "react-spinners"
import { AiFillHeart, AiFillLayout, AiTwotoneCar } from 'react-icons/ai';
import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md"
import './Property.css'
import Map from '../../components/Map/Map.jsx';
import useAuthCheck from '../../hooks/useAuthCheck.jsx';
import { useUser } from '@clerk/clerk-react';
import BookingModal from '../../components/BookingModal/BookingModal.jsx';
import UserDetailContext from '../../components/context/UserDetailsContext.js';
import { toast } from 'react-toastify';
const Property = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))

    const [modalOpened, setModalOpened] = useState(false)
    const { validateLogin } = useAuthCheck()
    const { user } = useUser();
    const userPhoneNumber = user?.primaryPhoneNumber.phoneNumber;
    console.log("ph", userPhoneNumber)

    const { userDetails: { bookings }, setUserDetails } = useContext(UserDetailContext)
    const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
        mutationFn: () => removeBooking(id, user?.primaryPhoneNumber.phoneNumber),
        onSuccess: () => {
            setUserDetails((prev) => ({
                ...prev,
                bookings: prev.bookings.filter((booking) => booking?.id !== id)
            }))
            toast.success("Booking Cancelled", { position: "bottom-right" })
        }
    })
    console.log("yoyo",bookings.some((booking) => booking.id === id))
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        )
    }
    if (isError) {
        <div className="wrapper">
            <div className="flexCenter paddings">
                <span>Error while fetching the details</span>
            </div>
        </div>
    }
    console.log(modalOpened)
    return (
        <div className='wrapper'>
            <div className="flexColStart paddings innerWidth property-container">
                {/* like button */}
                <div className='like'>
                    <AiFillHeart size={24} color='white' />
                </div>
                {/* image */}
                <img src={data?.image} alt='home ' />


                <div className="flexCenter property-details">
                    {/* left side */}
                    <div className="flexColStart left">
                        {/* head */}
                        <div className="flexStart head">
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{ fontSize: '1.5rem' }}>$ {data?.price}</span>
                        </div>

                        {/* facilities */}
                        <div className="flexStart facilities">
                            {/* indv sections */}
                            <div className="flexStart facility">
                                <FaShower size={20} color="#1F3E72" />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>

                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color="#1F3E72" />
                                <span>{data?.facilities?.parkings} Parking</span>
                            </div>

                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color="#1F3E72" />
                                <span>{data?.facilities?.bedrooms} Room</span>
                            </div>
                        </div>


                        <span className="secondaryText" style={{ textAlign: "justify" }}>
                            {data?.description}
                        </span>



                        {/* address */}
                        <div className="flexStart" style={{ gap: '1rem' }}>
                            <MdLocationPin size={25} />
                            <span className="secondaryText">
                                {
                                    data?.address
                                }
                                {
                                    data?.city
                                }
                                {
                                    data?.country
                                }
                            </span>
                        </div>

                        {/* booking button */}

                        {bookings?.map((booking) => booking.id).includes(id) ? (
                            <>
                                <button className='button' style={{ background: "red", width: '100%' }} onClick={cancelBooking}>
                                    <span>Cancel Booking</span>
                                </button>
                                <span>Your visit already booked for date {bookings?.filter((booking) => booking?.id === id)[0].date}</span>
                            </>
                        ) : (
                            <button className='button'
                                onClick={() => {
                                    validateLogin() && setModalOpened(true)
                                }}
                            >
                                Book Your Visit
                            </button>
                        )}
                        {modalOpened && <BookingModal
                            opened={modalOpened}
                            setOpened={setModalOpened}
                            propertyId={id}
                            phoneNumber={userPhoneNumber}
                        />}
                    </div>
                    {/* right side map*/}
                    <div className="map">
                        <Map address={data?.address} city={data?.city} country={data?.country} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Property
