import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container, Step, Stepper, StepLabel } from '@mui/material';
import AddLocation from '../AddLocation/AddLocation';
// import UploadImage from '../UploadImage/UploadImage';
// import BasicDetails from '../BasicDetails/BasicDetails';
// import Facilities from '../Facilities/Facilities';
import { useUser } from '@clerk/clerk-react';
import UploadImage from '../UploadImage/UploadImage';
import BasicDetails from '../BasicDetails/BasicDetails';
import Facilities from '../Fac/Facilities';

const AddPropertyModal = ({ opened, setOpened }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { user } = useUser();

  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    description: '',
    price: 0,
    country: '',
    city: '',
    address: '',
    image: [],
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userPhoneNumber: "",
  });
  // console.log("my property deatails : ", propertyDetails)
  // console.log(propertyDetails)
  const steps = ['Location', 'Images', 'Basics', 'Facilities'];

  const nextStep = () => {
    setActiveStep((current) => (current < steps.length - 1 ? current + 1 : current));
  };

  const prevStep = () => {
    setActiveStep((current) => (current > 0 ? current - 1 : current));
  };

  const closeModal = () => {
    setOpened(false);
  };
  useEffect(() => {
    if (user) {
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        userPhoneNumber: user?.primaryPhoneNumber.phoneNumber,
      }));
    }
  }, [user]);
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1000
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
          width: '100%',
          height: "78%",
          zIndex: 1000
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
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === 0 && (
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          )}
          {activeStep === 1 && (
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          )}
          {activeStep === 2 && (
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          )}
          {activeStep === 3 && (
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActiveStep}
            />
          )}
        </div>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
