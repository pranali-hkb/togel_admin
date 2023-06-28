import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
// import './scss/MyProfile.css';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { Image } from 'cloudinary-react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 304,
  // bgcolor: 'background.paper',
  backgroundColor: 'white',
  // border: '3px solid grey',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};



function MyProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [passOpen, setPassOpen] = React.useState(false);
  const handlePassOpen = () => setPassOpen(true);
  const handlePassClose = () => setPassOpen(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileOpen = () => setMobileOpen(true);
  const handleMobileClose = () => setMobileOpen(false);

  const [verifyOpen, setVerifyOpen] = useState(false);
  const handleVerifyOpen = () => setVerifyOpen(true);
  const handleVerifyClose = () => setVerifyOpen(false);

  const [verifyMobileOpen, setVerifyMobileOpen] = useState(false);
  const handleVerifyMobileOpen = () => setVerifyMobileOpen(true);
  const handleVerifyMobileClose = () => setVerifyMobileOpen(false);

  const [verifyNewMobileOpen, setVerifyNewMobileOpen] = useState(false);
  const handleVerifyNewMobileOpen = () => setVerifyNewMobileOpen(true);
  const handleVerifyNewMobileClose = () => setVerifyNewMobileOpen(false);

  const [requestOtpOpen, setRequestOtpOpen] = React.useState(false);
  const handleRequestOtpOpen = () => setRequestOtpOpen(true);
  const handleRequestClose = () => setRequestOtpOpen(false);
  // *******Email verifying******* 
  const [requestEmailOpen, setRequestEmailOpen] = React.useState(false);
  const handleRequestEmailOpen = () => setRequestEmailOpen(true);
  const handleRequestEmailClose = () => setRequestEmailOpen(false);

  // *******Email verifying******* 

  const [submitOpen, setSubmitOpen] = useState(false);
  const handleSubmitOpen = () => setSubmitOpen(true);
  const handleSubmitClose = () => setSubmitOpen(false);



  const [newModalOpen, setNewModalOpen] = useState(false);
  const handleNewModalOpen = () => setNewModalOpen(true);
  const handleNewModalClose = () => setNewModalOpen(false);


  const handleSubmitOpens = () => {
    setSubmitOpen(false); // Close the previous modal
    handleNewModalOpen(); // Open the new modal
  };


  return (
    <div className="MyProfileMain">

      <Box className='MyProfileSecondMain' >
        <Typography variant='h2'>Personal Information</Typography>
        <Box className="myPro">
          <TextField
            className='firstTextfield'
            fullWidth
            label="Mobile Number*"
            id="fullWidth"
            InputProps={{
              endAdornment: (
                <Button variant="outlined" className="buttonWithPadding" sx={{ textTransform: 'capitalize' }}
                  onClick={handleMobileOpen}>
                  Change
                </Button>

              ),
            }}
          />


       
        {/* ***************Verify mobile start*********** */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={verifyNewMobileOpen}
          onClose={handleVerifyNewMobileClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={verifyNewMobileOpen}>
            <Box sx={style} className='thirdModal'>
              <Typography variant='h5'>Verify with OTP</Typography>
              <Typography variant='h6'>Sent to SMS to 8169558897</Typography>

              <Box sx={{ display: 'flex', gap: '5%' }}>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
              </Box>
              <Button
                fullWidth
                sx={{

                  width: '334px',
                  padding: '12px 141px ',
                  mt: '4%',
                  textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D !important', borderRadius: '2px',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '16px'
                }} variant="contained"
                onClick={handleVerifyMobileOpen}
              >Verify</Button>

            </Box>
          </Fade>
        </Modal>

        {/* ***************Verify mobile End*********** */}

        {/* **************last Modal*********** */}
        <Box>
          <TextField className='firstTextSecond' fullWidth label="Full Name" id="fullWidth" />
          <TextField className='firstTextSecond' fullWidth label="Email" id="Email" />
{/* 
          <TextField className='firstTextSecond' fullWidth label="Alternate mobile details" id="fullWidth" /> */}

          <Button sx={{ width: '614px', display: 'block', mt: '1%', padding: '10px', textTransform: 'capitalize' }} variant="contained">Save Details</Button>

          <Button sx={{ width: '614px', display: 'block', mt: '1%', padding: '10px', textTransform: 'capitalize' }} variant="outlined" 
          onClick={handleOpen}

          >Change Password</Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style} className='modalBox'>
                <input
                  label="Old Password*"
                  type='password'
                  name='password'
                  placeholder='Old Password*'
                  className='modalTextfield'
                />

                <input
                  className='modalTextfield'
                  label="New Password*"
                  type='password'
                  placeholder='New Password '
                />
                <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#94969F', mt: '2%' }}  >In case you dont have acess to this number please
                  <Button sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#16469D', textTransform: 'capitalize' }}
                    onClick={handleVerifyOpen}
                  >
                    <a style={{ borderBottom: '1px solid #16469D' }}>click here</a> </Button></Typography>

                {/* *************Forgot Password Start********** */}
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={passOpen}
                  onClose={handlePassClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={passOpen}>
                    <Box sx={style} className='thirdModal'>
                      <Typography variant='h6'>For better security, OTP is sent to a previously used number on your account.</Typography>
                      <input
                        label="Old Password*"
                        type='password'
                        name='password'
                        placeholder='Old Password*'
                        className='modalTextfield'
                      />

                      <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#94969F', mt: '2%' }}  >In case you dont have acess to this number please
                        <Button sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#16469D', textTransform: 'capitalize' }}
                          onClick={handleVerifyOpen}>
                          <a style={{ borderBottom: '1px solid #16469D' }}>click here</a> </Button></Typography>
                      <Button
                        fullWidth
                        sx={{
                          width: '334px',
                          padding: '12px 141px ',
                          mt: '4%',
                          textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D', borderRadius: '2px',
                          fontWeight: '600',
                          fontSize: '14px',
                          lineHeight: '16px'
                        }} variant="contained"
                      >Verify</Button>
                    </Box>
                  </Fade>
                </Modal>
                {/* *************Forgot Password End********** */}

                <Button

                  sx={{
                    width: '385px',
                    height: '40px',
                    mt: '1%',
                    padding: '10px',
                    textTransform: 'capitalize',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    bgcolorcolor: '#16469D',
                    borderRadius: '2px',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '16px'
                  }} variant="contained"
                >Change</Button>

              </Box>
            </Fade>
          </Modal>
        </Box>
      </Box>

       {/* ***********Verification equired Start************* */}

       <Modal

aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
sx={{ bgcolor: 'transparent',}}
open={mobileOpen}
onClose={handleMobileClose}
closeAfterTransition
slots={{ backdrop: Backdrop }}
slotProps={{
  backdrop: {
    timeout: 500,
  },
}}
>
<Fade in={mobileOpen} >
  <Box sx={style} className='firstModals' >
    <Typography variant='h3'>Verification required</Typography>
    <Typography variant='h4'>For better security, OTP is sent to a previously used number on your account.</Typography>
    <input
      label="number*"
      type='number'

      placeholder='number*'
      className='modalTextfield'

    />

    <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#94969F', mt: '2%' }}  >In case you dont have acess to this number please
      <Button sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '13px', color: '#16469D', textTransform: 'capitalize' }} onClick={handleVerifyOpen}> <a style={{ borderBottom: '1px solid #16469D' }}>click here</a> </Button></Typography>

    <Button fullWidth sx={{
      padding: '15px 141px ',
      mt: '4%',
      textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D', borderRadius: '2px',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '16px'
    }} variant="contained" onClick={handleRequestOtpOpen}>Request OTP</Button>
  </Box>
</Fade>
</Modal>
{/* ********Verification equired End************* */}


{/* ********Verify with OTP Start*********** */}

<Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          sx={{ bgcolor: 'transparent',}}
          open={requestOtpOpen}
          onClose={handleRequestClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={requestOtpOpen}>
            <Box sx={style} className='thirdModal'>
              <Typography variant='h5'>Verify with OTP</Typography>
              <Typography variant='h6'>Sent to SMS to 8169558897</Typography>

              <Box sx={{ display: 'flex', gap: '5%' }}>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
              </Box>
              <Button
                fullWidth
                sx={{
                
                  width: '334px',
                  padding: '12px 141px ',
                  mt: '4%',
                  textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D', borderRadius: '2px',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '16px'
                }} variant="contained"
                onClick={handleVerifyMobileOpen}
              >Verify</Button>

            </Box>
          </Fade>
        </Modal>
        {/* ********Verify with OTP End*********** */}

 {/* **************update mobile number Start*********** */}
 <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={verifyMobileOpen}
          onClose={handleVerifyMobileClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={verifyMobileOpen} >
            <Box sx={style} className='firstModals' >
              <Typography variant='h3' sx={{ mt: '5%', mb: '10%' }}>Update mobile number</Typography>
              <input
                label="number*"
                type='number'
                placeholder='Enter Your new mobile number*'
                className='modalTextfield'

              />
              <Button fullWidth sx={{
                padding: '15px 141px ',
                mt: '10%',
                textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D', borderRadius: '2px',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '16px'
              }} variant="contained" onClick={handleVerifyNewMobileOpen}>Submit</Button>
            </Box>
          </Fade>
        </Modal>

        {/* ***************update mobile number End*********** */}



        {/* ****Change Click me *****/}


          {/* *********Verification required Email Start********** */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={verifyOpen}
            onClose={handleVerifyClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={verifyOpen}>
              <Box sx={style} className='firstModals'>
                <Typography variant='h3'>Verification required</Typography>
                <Typography variant='h4' sx={{ width: '70%' }}>For better security, OTP is sent to your registered email ID</Typography>
                <input
                  label="number*"
                  type='email'

                  placeholder='email*'
                  className='modalTextfield'

                />
                <Button fullWidth sx={{
                  padding: '15px 141px ',
                  mt: '5%',
                  textTransform: 'capitalize', display: 'flex', justifyContent: 'center', textAlign: 'center', bgcolorcolor: '#16469D', borderRadius: '2px',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '16px'
                }} variant="contained" onClick={handleRequestEmailOpen}>Request OTP</Button>
              </Box>
            </Fade>
          </Modal>
          {/* *********Verification required Email End********** */}

             {/* *********Verify with OTP Email Start********** */}
             <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={requestEmailOpen}
            onClose={handleRequestEmailClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={requestEmailOpen}>
              <Box sx={style} className='thirdModal'>
                <Typography variant='h5'>Verify with OTP</Typography>
                <Typography variant='h6'>Sent to harsh@gece.net.in</Typography>
                <Box sx={{ display: 'flex', gap: '5%' }}>
                  <Typography sx={{ mt: '5% !important', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                  <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                  <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                  <Typography sx={{ mt: '15%', mb: '15%', borderBottom: '2px solid #BBB', width: '56px', }}></Typography>
                </Box>
                <Button
                  fullWidth
                  sx={{
                    // width: '334px',
                    padding: '12px 141px ',
                    mt: '4%',
                    textTransform: 'capitalize',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    bgcolorcolor: '#16469D !important',
                    borderRadius: '2px',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '16px',
                    mb: '5%',
                  }}
                  variant="contained"
                  // onClick={handleVerifyMobileOpen}
                  onClick={handleVerifyMobileOpen}
                >
                  Verify
                </Button>
              </Box>
            </Fade>
          </Modal>
        </Box>
         {/* *********Verify with OTP Email End********** */}


    </div>
  );
}

export default MyProfile;