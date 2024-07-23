import React from "react";
import "./Content.css";
import { Navbar } from "@components/Navbar";

const Content = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="content w-full min-w-full" >
      <div className="content-scroll w-full min-w-full">
        <Navbar />
        
        <>
          { children }
        </>
      </div>
    </section>
    ); 
};

export {
  Content
};