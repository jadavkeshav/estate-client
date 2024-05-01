import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify"
const BASE_URL = import.meta.env.VITE_BASE_URL


export const api = axios.create({
    baseURL: BASE_URL
})

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd", {
            timeout: 10 * 1000,
        })
        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("something went wrong in fetching property")
        throw error
    }
}




export const getProperty = async (id) => {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        })
        if (response.status === 400 || response.status === 500) {
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("something went wrong in fetching property")
        throw error
    }
}


export const createUser = async (phoneNumber, fullName) => {
    try {
        const response = await api.post('/user/register', { phoneNumber, name: fullName });
        return response.data

    } catch (error) {
        toast.error("something went wrong, please try again")
        throw error
    }
}

export const bookVisit = async (date, propertyId, phoneNumber) => {
    try {
        await api.post(`/user/bookVisit/${propertyId}`,
            {
                phoneNumber: phoneNumber,
                date: dayjs(date).format("DD/MM/YYYY")
            })
    } catch (error) {
        toast.error("something went wrong, please try again")
        throw error
    }
}

export const removeBooking = async (id, phoneNumber) => {
    try {
        await api.post(`/user/removeBooking/${id}`,
            {
                phoneNumber: phoneNumber,
            })
    } catch (error) {
        toast.error("something went wrong, please try again")
        throw error
    }
}


// export const toFav = async (id, phoneNumber) => {
//     try {
//         await api.post(`/user/toFav/${id}`, {
//             phoneNumber
//         })
//     } catch (error) {
//         toast.error("something went wrong, please try again")
//         throw error
//     }
// }


// export const getAllFav = async (phoneNumber) => {
//     try {
//         const res = await api.post(
//             `/user/allFav`, {
//             phoneNumber
//         }
//         )
//         return res.data["favResidenciesID"]
//     } catch (error) {
//         toast.error("something went wrong, please try again while fetching favs")
//         throw error
//     }
// }

export const getAllBookings = async (phoneNumber) => {

    try {
        const res = await api.post(
            `/user/allBookings`,
            {
                phoneNumber,
            }
        );
        return res.data["bookedVisits"];
    } catch (error) {
        // console.log(error)
        toast.error("Something went wrong while fetching bookings");
        throw error
    }
}


export const createResidency = async (data) => {
    // console.log(data)
    try {
        const res = await api.post(
            `/residency/create`,
            {
                data
            }
        )
    } catch (error) {
        throw error
    }
}

export const fetchUserDetails = async (phoneNumber) => {
    try {

        const response = await api.post('/user/fetchUser', { phoneNumber: phoneNumber });
        return response.data;
    } catch (error) {
        toast.error("Something went wrong while fetching user details");
        throw error;
    }
};
export const getUser = async (phoneNumber) => {
    try {
        const response = await api.post('/user/getUser', { phoneNumber });

        if (response.status !== 200) {
            throw new Error('Failed to fetch user details');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};
