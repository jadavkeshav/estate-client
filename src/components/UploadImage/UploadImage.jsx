import React, { useEffect, useRef, useState } from 'react'
import "./UploadImage.css"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { Button, Grid } from '@mui/material'
const UploadImage = ({ propertyDetails, setPropertyDetails, prevStep, nextStep }) => {
    const [imageURL, setImageURL] = useState(propertyDetails.image)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dvkmulgt7",
            uploadPreset: "o5orwy3p",
            maxFiles: 1
        },
            (err, result) => {
                if (result.event === "success") {
                    setImageURL(result.info.secure_url)
                }
            }
        )
    }, [])
    const handleNext = () => {
        setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
        nextStep();
    };

    return (
        <div className='flexColCenter uploadWrapper'>
            {
                !imageURL ? (
                    <div className="flexColCenter uploadZone"
                        onClick={() => widgetRef.current?.open()}
                    >
                        <AiOutlineCloudUpload size={50} color="grey" />
                        <span>Upload Image</span>
                    </div>
                ) : (
                    <div className="uploadedImage"
                        onClick={() => widgetRef.current?.open()}

                    >
                        <img src={imageURL} alt="as" />
                    </div>
                )
            }
            <Grid >
                <Button variant="default" color="primary" onClick={prevStep}>
                    Back
                </Button>
                <Button  variant="contained" color="primary" disabled={!imageURL} onClick={handleNext}>
                    Next
                </Button>
            </Grid>
        </div>
    )
}

export default UploadImage
