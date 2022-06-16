import { Box, Button } from "@mui/material";
import React from "react";
import { PageHeader, Stepper, EdenCard } from ".";
import "./commonCss.css";
import { useNavigate } from "react-router-dom";
import edenLogo from '../assets/eden_logo.jpg'

const UsingEden = () => {
  const navigate = useNavigate()
  const headers = {
    mainTitle: "How are you planning to use Eden?",
    subTitle: "We'll streamline your setup experience accordingly.",
  };
  
  //props for the cards that need to be displayed on the screen.
  const edenCards = [
    {
      cardHeader:"For myself",
      cardText:"Write better. Think more clearly. Stay organized."
    },
    {
      cardHeader:"With my team",
      cardText:"Wikis, docs, tasks & projects, all in one place."
    }
  ]
  return (
    <Box
      component="div"
      className="w-full flex justify-center items-center flex-col height-100vh"
    >
      <img src={edenLogo} alt="eden_logo" className="mb-12"/>
      <Stepper activeStep={2}/>
      <PageHeader headers={headers} />
      <EdenCard edenCards={edenCards}/>
      <Button
        className="width-30"
        sx={{
          p: 1.5,
          textTransform: "capitalize",
          fontFamily: "'Inter', sans-serif",
          backgroundColor:"#674EE7"
        }}
        variant="contained"
        onClick={()=>navigate('/congratulations')}
      >
        Create Workspace
      </Button>
    </Box>
  )
}

export default UsingEden