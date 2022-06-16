import { Box, Button } from "@mui/material";
import React from "react";
import { PageHeader, Stepper, EdenCard } from ".";
import "./commonCss.css";
import { useNavigate } from "react-router-dom";
import edenLogo from '../assets/eden_logo.jpg'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const Congratulations = () => {
  const navigate = useNavigate()
  const headers = {
    mainTitle: "Congratulations, Eren!",
    subTitle: "You have completed onboarding, you can start using the Eden!",
  };
  
  return (
    <Box
    component="div"
    className="w-full flex justify-center items-center flex-col height-100vh"
  >
    <img src={edenLogo} alt="eden_logo" className="mb-12"/>
    <Stepper activeStep={3}/>
    <div className="h-16 w-16 rounded-full flex items-center justify-center mb-10" style={{backgroundColor:"#674EE7", color:"white"}}><DoneRoundedIcon sx={{fontSize:"20px"}}/></div>
    <PageHeader headers={headers} />
    <Button
      className="width-25"
      sx={{
        p: 1.5,
        textTransform: "capitalize",
        fontFamily: "'Inter', sans-serif",
        backgroundColor:"#674EE7"
      }}
      variant="contained"
      onClick={()=>{alert("Launching Eden...")}}
    >
      Launch Eden
    </Button>
  </Box>
  )
}

export default Congratulations