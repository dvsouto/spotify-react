import React from "react";

import { Sidebar } from "@components/Sidebar";
import { Content } from "@components/Content";
import { PlayerBar } from "@components/PlayerBar";

import "./Page.css";

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="page">
      <div className="top">
        <div className="left">
          <Sidebar>
            <Sidebar.Menu className="flex-[0]">
              <Sidebar.MenuItem icon={"House"} text="Início" />
              <Sidebar.MenuItem icon={"Search"} text="Buscar" />
            </Sidebar.Menu>
              
            <Sidebar.Library />
          </Sidebar>
        </div>
  
        <div className="right">
          <Content>
            { children }
          </Content>
        </div>
      </div>

      <footer className="footer">
        <PlayerBar />
      </footer>
    </section>
    ); 
};

export {
  Page
};