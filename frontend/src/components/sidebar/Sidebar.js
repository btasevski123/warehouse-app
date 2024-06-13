import React from "react";
import "./Sidebar.scss";



const Sidebar = ({children}) => {
  return (
    <div className="layout">
     <div className="sidebar">
       <h2>Siebar</h2>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
