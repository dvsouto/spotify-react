import React from "react";

const Sidebar = ({ children }: React.PropsWithChildren) => {
  return (
    <aside className="flex flex-col pl-[6px] pr-[6px] min-w-[80px] max-w-[80px] lg:min-w-[300px] lg:max-w-[300px] h-[100%] transition-all;">
      { children }
    </aside>
  ); 
};

export {
  Sidebar
};