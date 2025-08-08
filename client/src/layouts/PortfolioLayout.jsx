import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import "./PortfolioLayout.css";
import Navigationbar from "./Navigationbar";


const PortfolioLayout = () => {
  return (
    <main className="flex h-screen responsive-layout"> 
      {/* Fixed Sidebar */}
      <div className="responsive-sidebar w-98 fixed inset-y-0 left-0 z-10">
        <Sidebar />
      </div>

      {/* Scrollable Content Area */}
      <div className="responsive-content ml-98 flex-1 p-6">
         <Navigationbar/>
          <Outlet />
      </div>
    </main>
  );
};

export default PortfolioLayout;
