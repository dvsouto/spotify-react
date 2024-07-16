import { SidebarBlock } from "../Block";
import "./SidebarMenu.css";

const SidebarMenu = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <SidebarBlock
      { ...props }
      className={`sidebar-menu ${props.className}`}
    >
      { children }
    </SidebarBlock>
  ); 
};

export {
  SidebarMenu
};