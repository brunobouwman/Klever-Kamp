import { Home, Account, Customize, Rewards } from "Pages";
import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/rewards" element={<Rewards />} />
    </ReactRoutes>
  );
};

export default Routes;
