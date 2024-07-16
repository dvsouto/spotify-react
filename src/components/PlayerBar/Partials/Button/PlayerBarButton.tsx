import { Button } from "@components/ui/button";
import { icons } from "lucide-react";

import "./PlayerBarButton.css";

type PlayerButtonProps = {
  icon?: keyof typeof icons;
  iconSize?: number;
  type?: "default" | "rounded" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

const PlayerBarButton = ({ icon, iconSize, type = "link" }: PlayerButtonProps) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return (<LucideIcon size={ iconSize || 18 } />);
    }
  };

  return (
    <div className="player-bar-button">
      <Button 
        variant={ type } 
        size={"icon"}
      >
        { renderIcon() }
      </Button>
    </div>
  );
};

export {
  PlayerBarButton
};