import { Progress } from "@components/ui/progress";
import { PlayerBarAction } from "../Action";
import "./PlayerBarVolume.css";
import { twMerge } from "tailwind-merge";

const PlayerBarVolume = ({ volume = 50, progressClassName, className = "" }: { volume: number, progressClassName?: string, className?: string }) => {
  return (
    <div 
      className={twMerge("flex flex-row", className && className)}
    >
      <PlayerBarAction icon="Volume2" />
      <Progress 
        className={twMerge("self-center h-[6px] min-w-[80px] hidden lg:block w-full", progressClassName && progressClassName)}
        value={volume} 
      />
    </div>
  );
};

export {
  PlayerBarVolume
};