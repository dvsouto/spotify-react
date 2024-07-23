import { ScrollGesture } from "@components/ScrollGesture";
import { LibraryFlatbutton } from "../Flatbutton/LibraryFlatbutton";
import { twMerge } from "tailwind-merge";

const LibraryButtonbar = ({ className = "", classNameArrows = "" }: { className?: string, classNameArrows?: string }) => {
  return (
    <ScrollGesture
      className={twMerge("px-1 py-2 mt-3", className)}
      classNameArrows={classNameArrows}
      arrows
    >
      <ul className="flex flex-row gap-2">
        <LibraryFlatbutton>Playlists</LibraryFlatbutton>
        <LibraryFlatbutton>Artistas</LibraryFlatbutton>
        <LibraryFlatbutton>Podcasts e Programas</LibraryFlatbutton>
      </ul>
    </ScrollGesture>
  );
};

export {
  LibraryButtonbar
};