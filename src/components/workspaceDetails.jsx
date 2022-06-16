import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { PageHeader, Stepper } from ".";
import "./commonCss.css";
import { useNavigate } from "react-router-dom";
import edenLogo from "../assets/eden_logo.jpg";

const WorkspaceDetails = () => {
  const navigate = useNavigate();
  const headers = {
    mainTitle: "Let's set up a home for all your work",
    subTitle: "You can always create another workspace later.",
  };
  const [workspaceData, setWorkspaceData] = useState({workspaceName:'', workspaceUrl:''});

  // function to update the value entered by users in the textfields
  const changeValueHandler = (e) => {
    setWorkspaceData({ ...workspaceData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="div"
      className="w-full flex justify-center items-center flex-col height-100vh"
    >
      <img src={edenLogo} alt="eden_logo" className="mb-12" />
      <Stepper activeStep={1} />
      <PageHeader headers={headers} />
      <div className="flex justify-start flex-col text-left width-30 mb-4">
        <label htmlFor="workspaceName" className="font-semibold">
          Workspace Name
        </label>
        <input
          type="text"
          name="workspaceName"
          className="p-2 rounded border-2 mb-4"
          onChange={changeValueHandler}
          value={workspaceData?.workspaceName}
        />
        <label htmlFor="workspaceUrl" className="font-semibold">
          Workspace URL<span style={{ color: "#9c9c9c" }}> (optional)</span>
        </label>
        <input
          type="text"
          name="workspaceUrl"
          className="p-2 rounded border-2"
          value={workspaceData?.workspaceUrl}
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
          console.log(workspaceData);
          navigate("/using-eden");
        }}
      >
        Create Workspace
      </Button>
    </Box>
  );
};

export default WorkspaceDetails;
