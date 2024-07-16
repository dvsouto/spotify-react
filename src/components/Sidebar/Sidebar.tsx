import React from "react";
import "./Sidebar.css";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="sidebar">
      { children }
    </section>
  ); 
};

export {
  Sidebar
};