import React from "react";
import "./Content.css";
import { Navbar } from "@components/Navbar";

const Content = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="content" >
      <div className="content-scroll">
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