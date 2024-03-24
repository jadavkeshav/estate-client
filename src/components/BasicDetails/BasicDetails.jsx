import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { validateString } from '../../utils/common';

const BasicDetails = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {
    const [formValues, setFormValues] = useState({
        title: propertyDetails.title || '',
        description: propertyDetails.description || '',
        price: propertyDetails.price || '',
    });

    const [errors, setErrors] = useState({
        title: null,
        description: null,
        price: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // Validate field on change
        setErrors((prevErrors) => ({ ...prevErrors, [name]: validateString(value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields before proceeding
        const titleError = validateString(formValues.title);
        const descriptionError = validateString(formValues.description);
        const priceError = validateString(formValues.price);

        if (titleError || descriptionError || priceError) {
            // If any error, set errors and prevent submission
            setErrors({ title: titleError, description: descriptionError, price: priceError });
        } else {
            // No errors, proceed to the next step
            setPropertyDetails((prevDetails) => ({
                ...prevDetails,
                title: formValues.title,
                description: formValues.description,
                price: formValues.price,
            }));
            nextStep();
        }
    };

    const { title, description, price } = formValues;
    const isButtonDisabled = errors.title || errors.description || errors.price;

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start" marginTop="3rem">
                {/* Left side */}
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        error={Boolean(errors.title)}
                        helperText={errors.title}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Description"
                        variant="outlined"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        error={Boolean(errors.description)}
                        helperText={errors.description}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Price"
                        variant="outlined"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        type="number"
                        error={Boolean(errors.price)}
                        helperText={errors.price}
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={isButtonDisabled}>
                        Next Step
                    </Button>
                </Grid>
                {/* Right side */}
                <Grid item xs={6}>
                    {/* Place your Map component here */}
                </Grid>
            </Grid>
        </form>
    );
};

export default BasicDetails;
