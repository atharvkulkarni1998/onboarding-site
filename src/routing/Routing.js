import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Congratulations, UsingEden, Welcome, WorkspaceDetails} from '../components'
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/workspace-details" element={<WorkspaceDetails />} />
        <Route path="/using-eden" element={<UsingEden />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
