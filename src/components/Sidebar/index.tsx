import { Sidebar } from "./Sidebar";
import { SidebarMenu } from "./Partials/Menu";
import { SidebarLibrary } from "./Partials/Library";
import { SidebarMenuItem } from "./Partials/Menu/Item";

type SidebarType = typeof Sidebar & {
  Menu: typeof SidebarMenu;
  MenuItem: typeof SidebarMenuItem;
  Library: typeof SidebarLibrary;
};

(Sidebar as SidebarType).Menu = SidebarMenu;
(Sidebar as SidebarType).MenuItem = SidebarMenuItem;
(Sidebar as SidebarType).Library = SidebarLibrary;

const ExportedSideBar = Sidebar as SidebarType;

export {
  ExportedSideBar as Sidebar
};