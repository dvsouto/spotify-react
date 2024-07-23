import { List, Search } from "lucide-react";
import { LibraryRoundbutton } from "../Roundbutton/LibraryRoundbutton";
import { twMerge } from "tailwind-merge";

const LibrarySearchbar = ({ className = "" }: { className?: string }) => {
  return (
    <div className={twMerge("flex p-1 items-center", className)}>
      <div className="flex-1 align-middle">
        <LibraryRoundbutton>
          <Search size={18} />
        </LibraryRoundbutton>
      </div>

      <div className="flex-1">
        <button className="flex items-center w-full text-sm text-gray-400 transition-all hover:text-gray-100">
          <span className="flex-[0.8] text-right">Recentes</span>
          <List className="flex-[0.2]" size={18} />
        </button>
      </div>
    </div>
  );
};

export {
  LibrarySearchbar
};