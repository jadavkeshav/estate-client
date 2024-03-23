import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMutation } from 'react-query';
import UserDetailContext from '../context/UserDetailsContext';
import { bookVisit } from '../../utils/api';
import { toast } from 'react-toastify';
const BookingModal = ({ opened, setOpened, propertyId, phoneNumber }) => {
    const [value, setValue] = useState(null)
    // const minDate = dayjs().format('YYYY-MM-DD');
    // const handleBookVisit = () => {
    //     // Format the selected date
    //     const formattedDate = dayjs(value).format('YYYY-MM-DD');
    //     console.log('Selected Date:', formattedDate);
    // };
    const { userDetails, setUserDetails } = useContext(UserDetailContext)
    // console.log("id", pro)

    const handleBookingSuccess = () => {
        toast.success("you have booked your visit", {
            position: "bottom-right"
        });
        setUserDetails((prev) => ({
            ...prev,
            bookings: [
                ...prev.bookings, {
                    id: propertyId, date: dayjs(value).format('DD/MM/YYYY')
                }
            ]
        }))
    }
    const { mutate, isLoading } = useMutation({
        mutationFn: () => bookVisit(value, propertyId, phoneNumber),
        onSuccess: () => handleBookingSuccess(),
        onError: ({ response }) => toast.error(response.data.message),
        onSettled: () => setOpened(false)
    })
    return (
        <Modal
            isOpen={opened}
            onRequestClose={() => setOpened(false)}
            contentLabel="Select your date of visit"
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fefefe',
                    border: '1px solid #888',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '80%',
                    width: '400px'
                }
            }}
        >
            <div style={{ position: 'relative' }}>
                <button
                    onClick={() => setOpened(false)}
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '40px'
                    }}
                >
                    &times;
                </button>
            </div>
            <div className='flexColCenter'>
                <div style={{ marginTop: '30px' }}>
                    <DatePicker label="Basic date picker" value={value}
                        onChange={(newValue) => setValue(newValue)} />
                </div>
                <button disabled={!value} onClick={() => mutate()} className='button' style={{ marginTop: '10px' }}> Book Visit</button>
            </div>
        </Modal>
    );
};

export default BookingModal;
