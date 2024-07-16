import { ArrowRight, LibraryBig, Plus } from "lucide-react";
import { SidebarBlock } from "../Block";
import { Button } from "@components/ui/button";

import "./SidebarLibrary.css";

const SidebarLibrary = () => {
  return (
    <SidebarBlock className="flex flex-1 flex-col">
      <div className="flex">
        <div className="flex flex-[0.7] pl-4 items-center">
          <Button size={"none"} variant={"link"}>
            <LibraryBig size={22} /> <span className="pl-3 font-bold">Sua Biblioteca</span>
          </Button>
        </div>

        <div className="flex flex-[0.3] self-end items-end justify-end text-right mr-1">
          <Button variant={"rounded/ghost"} className="h-8 px-1 py-1 mx-1">
            <Plus size={22} />
          </Button>

          <Button variant={"rounded/ghost"} className="h-8 px-1 py-1 mx-1">
            <ArrowRight size={22} />
          </Button>
        </div>
      </div>

      <div>
        Playlists
      </div>
    </SidebarBlock>
  ); 
};

export {
  SidebarLibrary
};