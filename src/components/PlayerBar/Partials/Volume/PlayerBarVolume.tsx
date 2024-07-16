import { Progress } from "@components/ui/progress";
import { PlayerBarAction } from "../Action";
import "./PlayerBarVolume.css";

const PlayerBarVolume = ({ volume = 50 }: { volume: number }) => {
  return (
    <>
      <PlayerBarAction icon="Volume2" />
      <Progress 
        className={"self-center h-[6px]"}
        value={volume} 
        />
    </>
  );
};

export {
  PlayerBarVolume
};