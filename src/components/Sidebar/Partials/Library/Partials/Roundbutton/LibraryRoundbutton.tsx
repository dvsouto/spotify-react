import { Button } from "@components/ui/button";
import { PropsWithChildren } from "react";

const LibraryRoundbutton = ({ children }: PropsWithChildren) => {
  return (
    <Button variant={"rounded/ghost"} className="h-8 w-8 px-1 py-1 mx-1 text-zinc-500 hover:text-zinc-100">
      { children }
    </Button>
  );
};

export {
  LibraryRoundbutton
};