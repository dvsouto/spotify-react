import { icons } from "lucide-react";
import { Button } from "@components/ui/button";

import "./SidebarMenuItem.css";

const SidebarMenuItem = ({ icon, text }: { icon?: keyof typeof icons, text: string }) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return <LucideIcon size={24} />;
    }
  };
  
  return (
    <Button variant={"link"} className="menu-item">
      { renderIcon() } <span className={"menu-item-label"}>{ text }</span>
    </Button>
  ); 
};

export {
  SidebarMenuItem
};