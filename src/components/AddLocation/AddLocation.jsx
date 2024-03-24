import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import Map from '../Map/Map';
import useCountries from '../../hooks/useCountries';

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
    const { getAll } = useCountries();
    const [formValues, setFormValues] = useState({
        country: propertyDetails.country || '',
        city: propertyDetails.city || '',
        address: propertyDetails.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { country, city, address } = formValues;
        const newPropertyDetails = {
            ...propertyDetails,
            country,
            city,
            address,
        };
        console.log(newPropertyDetails)
        setPropertyDetails(newPropertyDetails);
        nextStep();
    };

    
    const { country, city, address } = formValues;

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start" marginTop="3rem">
                {/* Left side */}
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        select
                        required
                        label="Country"
                        variant="outlined"
                        name="country"
                        value={country}
                        onChange={handleChange}
                    >
                        {getAll().map((country) => (
                            <MenuItem key={country.value} value={country.value}>
                                {country.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        fullWidth
                        required
                        label="City"
                        variant="outlined"
                        name="city"
                        value={city}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Address"
                        variant="outlined"
                        name="address"
                        value={address}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Next Step
                    </Button>
                </Grid>
                {/* Right side */}
                <Grid item xs={6}>
                    <Map  address={address} city={city} country={country} />
                </Grid>
            </Grid>
        </form>
    );
};

export default AddLocation;
