import { icons } from "lucide-react";
import { Button } from "@components/ui/button";

import "./SidebarMenuItem.css";
import { twMerge } from "tailwind-merge";

type SidebarMenuItemProps = { 
  icon?: keyof typeof icons, 
  text: string, 
  active?: boolean;
}

const SidebarMenuItem = ({ icon, text, active }: SidebarMenuItemProps ) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return active ? <LucideIcon size={24} color="white" /> : <LucideIcon size={24} />;
    }
  };
  
  return (
    <Button 
      variant={"link"} 
      className={twMerge("menu-item", active && "text-white")}
    >
      { renderIcon() } <span className={"menu-item-label hidden lg:block"}>{ text }</span>
    </Button>
  ); 
};

export {
  SidebarMenuItem
};