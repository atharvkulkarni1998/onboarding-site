import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { PageHeader, Stepper } from ".";
import "./commonCss.css";
import { useNavigate } from "react-router-dom";
import edenLogo from "../assets/eden_logo.jpg";

const Welcome = () => {
  const navigate = useNavigate();
  const headers = {
    mainTitle: "Welcome! First things first...",
    subTitle: "You can always change them later",
  };

  const [welcomeData, setWelcomeData] = useState({fullName:'', userName:''});

  // function to update the value entered by users in the textfields
  const changeValueHandler = (e) => {
    setWelcomeData({ ...welcomeData, [e.target.name]: e.target.value });
  };
  return (
    <Box
      component="div"
      className="w-full flex justify-center items-center flex-col height-100vh"
    >
      <img src={edenLogo} alt="eden_logo" className="mb-12" />
      <Stepper activeStep={0} />
      <PageHeader headers={headers} />
      <div className="flex justify-start flex-col text-left width-30 mb-4">
        <label htmlFor="fullName" className="font-semibold">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          className="p-2 rounded border-2 mb-4"
          value={welcomeData?.fullName}
          onChange={changeValueHandler}
        />
        <label htmlFor="userName" className="font-semibold">
          Display Name
        </label>
        <input
          type="text"
          name="userName"
          className="p-2 rounded border-2"
          value={welcomeData?.userName}
          onChange={changeValueHandler}
        />
      </div>
      <Button
        className="width-30"
        sx={{
          p: 1.5,
          textTransform: "capitalize",
          fontFamily: "'Inter', sans-serif",
          backgroundColor:"#674EE7"
        }}
        variant="contained"
        onClick={() => {
          console.log(welcomeData);
          navigate("/workspace-details");
        }}
      >
        Create Workspace
      </Button>
    </Box>
  );
};

export default Welcome;
