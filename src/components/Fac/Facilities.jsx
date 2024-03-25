import React, { useContext } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useUser } from '@clerk/clerk-react';
import UserDetailsContext from "../context/UserDetailsContext"
import useProperties from "../../hooks/useProperties"
import { useMutation } from 'react-query';
import { createResidency } from '../../utils/api';

const Facilities = ({
    prevStep,
    propertyDetails,
    setPropertyDetails,
    setOpened,
    setActiveStep,
}) => {
    const { user } = useUser();
    const { userDetails } = useContext(UserDetailsContext);
    const { refetch: refetchProperties } = useProperties();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bedrooms = formData.get('bedrooms');
        const parkings = formData.get('parkings');
        const bathrooms = formData.get('bathrooms');
        const price = formData.get('price');

        if (isNaN(price) || isNaN(bedrooms) || isNaN(parkings) || isNaN(bathrooms) || price < 0 || bedrooms < 0 || parkings < 0 || bathrooms < 0) {
            toast.error('Invalid input. Please provide valid values.', { position: 'bottom-right' });
            return;
        }

        if (bedrooms < 1 || bathrooms < 1) {
            toast.error('Bedrooms and bathrooms must be at least 1', { position: 'bottom-right' });
            return;
        }

        setPropertyDetails({
            ...propertyDetails,
            facilities: {
                bedrooms: parseInt(bedrooms),
                parkings: parseInt(parkings),
                bathrooms: parseInt(bathrooms),
            },
            price: price,
        });

        mutate({
            bedrooms: parseInt(bedrooms),
            parkings: parseInt(parkings),
            bathrooms: parseInt(bathrooms),
            price: price,
        });
    };

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createResidency({
            ...propertyDetails, facilities: data,
        }),
        onError: ({ response }) => toast.error(response.data.message, { position: "bottom-right" }),
        onSettled: () => {
            toast.success("Added Successfully", { position: "bottom-right" });
            setPropertyDetails({
                title: "",
                description: "",
                price: 0,
                country: "",
                city: "",
                address: "",
                image: null,
                facilities: {
                    bedrooms: 0,
                    parkings: 0,
                    bathrooms: 0,
                },
                userPhoneNumber: user?.primaryPhoneNumber.phoneNumber,
            });
            setOpened(false);
            setActiveStep(0);
            refetchProperties();
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center" marginTop={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        label="No of Bedrooms"
                        variant="outlined"
                        name="bedrooms"
                        type="number"
                        defaultValue={propertyDetails.facilities.bedrooms}
                        InputProps={{ inputProps: { min: 0 } }}
                        style={{ marginBottom: '1rem' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        label="No of Parkings"
                        variant="outlined"
                        name="parkings"
                        type="number"
                        defaultValue={propertyDetails.facilities.parkings}
                        InputProps={{ inputProps: { min: 0 } }}
                        style={{ marginBottom: '1rem' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        label="No of Bathrooms"
                        variant="outlined"
                        name="bathrooms"
                        type="number"
                        defaultValue={propertyDetails.facilities.bathrooms}
                        InputProps={{ inputProps: { min: 0 } }}
                        style={{ marginBottom: '1rem' }}
                    />
                </Grid>
            <Grid justifyContent={'space-between'}>
                <Button variant="outlined" onClick={prevStep}>
                    Back
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                    {isLoading ? "Submitting" : "Add Property"}
                </Button>
            </Grid>
            </Grid>
        </form>
    );
};

export default Facilities;
