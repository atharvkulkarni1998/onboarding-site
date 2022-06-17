import * as React from "react";
import { Stepper as MuiStepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./commonCss.css";

const Stepper = (props) => {
  const steps = ["/", "/workspace-details", "/using-eden", "/congratulations"];
  return (
    <div className="width-30 mb-24">
      <MuiStepper activeStep={props.activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step sx={{ fontSize: "30px" }} key={index + 1}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </div>
  );
};

export default Stepper;
