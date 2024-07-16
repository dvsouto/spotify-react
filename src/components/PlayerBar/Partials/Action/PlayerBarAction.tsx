import { Button } from "@components/ui/button";
import { icons } from "lucide-react";

import "./PlayerBarAction.css";

const PlayerBarAction = ({ icon }: { icon?: keyof typeof icons }) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return (<LucideIcon size={18} />);
    }
  };

  return (
    <div className="player-bar-action">
      <Button 
        variant={"link"} 
        size={"icon"}
        className="px-2 py-0"
      >
        { renderIcon() }
      </Button>
    </div>
  );
};

export {
  PlayerBarAction
};