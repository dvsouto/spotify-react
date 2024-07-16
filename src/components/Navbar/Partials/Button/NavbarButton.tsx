import { Button } from "@components/ui/button";
import { icons } from "lucide-react";

const NavbarButton = ({ icon, label }: { icon?: keyof typeof icons, label?: string }) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return (<LucideIcon size={18} className={ label !== undefined ? "mr-2" : ""} />);
    }
  };

  return (
    <div className="inline-flex mx-1">
      <Button size={label !== undefined ? "default" : "icon"} variant={"rounded/flat"} className={`h-8 ${label === undefined ? "w-8" : ""}`}>
        { renderIcon() }
        { label || null }
      </Button>
    </div>
  );
};

export {
  NavbarButton
};