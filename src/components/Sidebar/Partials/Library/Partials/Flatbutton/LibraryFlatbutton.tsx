import { PropsWithChildren } from "react";

const LibraryFlatbutton = ({ children }: PropsWithChildren) => {
  return (
    <li>
      <button
        className="px-[0.65rem] py-[0.4rem] text-sm bg-[#333] text-white rounded-2xl transition-all hover:bg-[#444]"
      >
        { children }
      </button>
    </li>
  );
};

export {
  LibraryFlatbutton
};