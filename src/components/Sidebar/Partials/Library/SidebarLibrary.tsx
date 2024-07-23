import { ArrowRight, LibraryBig, Plus } from "lucide-react";
import { SidebarBlock } from "../Block";
import { Button } from "@components/ui/button";
import { LibraryButtonbar } from "./Partials/Buttonbar/LibraryButtonbar";
import { LibrarySearchbar } from "./Partials/Searchbar/LibrarySearchbar";
import { LibraryRoundbutton } from "./Partials/Roundbutton/LibraryRoundbutton";
import { LibraryList } from "./Partials/List/LibraryList";

const SidebarLibrary = () => {
  return (
    <SidebarBlock className="flex flex-1 flex-col h-[50vh]">
      <div className="flex">
        <div className="flex flex-[0.7] pl-4 items-center">
          <Button size={"none"} variant={"link"} className="py-2 lg:py-0">
            <LibraryBig size={22} /> <span className="pl-3 font-bold hidden lg:block">Sua Biblioteca</span>
          </Button>
        </div>

        <div className="hidden lg:flex flex-[0.3] self-end items-end justify-end text-right mr-1">
          <LibraryRoundbutton>
            <Plus size={22} />
          </LibraryRoundbutton>

          <LibraryRoundbutton>
            <ArrowRight size={22} />
          </LibraryRoundbutton>
        </div>
      </div>

      <LibraryButtonbar
        className="hidden lg:flex"
        classNameArrows="hidden lg:flex"
      />

      <LibrarySearchbar 
        className="hidden lg:flex"
      />

      <LibraryList />
    </SidebarBlock>
  ); 
};

export {
  SidebarLibrary
};