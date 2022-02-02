import React, { useContext, useState } from "react";

import Applications from "../applications/Applications";
import Interviews from "../interviews/Interviews";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Applications />
      <Interviews />
    </div>
  );
};

export default Dashboard;
