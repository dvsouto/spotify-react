import { PlayerBarAction } from "./Partials/Action";
import { PlayerBarVolume } from "./Partials/Volume";
import { PlayerBarButton } from "./Partials/Button";
import { PlayerBarMusicCard } from "./Partials/MusicCard/PlayerBarMusicCard";
import { Progress } from "@components/ui/progress";

const PlayerBar = () => {
  return (
    <div className="flex items-center text-center h-[100%] min-w-[800px] bg-transparent">
      <div className="flex-[0.2] min-w-[300px] self-center">
        <PlayerBarMusicCard 
          name="Vida Loka PT 1"
          description="Racionais MC's"
          active
        />
      </div>

      <div className="flex-[0.6]">
        <div className="flex flex-col">
          <div className="flex self-center justify-center items-center pb-2">
            <PlayerBarButton icon="Shuffle" />
            <PlayerBarButton icon="StepBack" />
            <PlayerBarButton icon="Play" type="rounded" />
            <PlayerBarButton icon="StepForward" />
            <PlayerBarButton icon="Repeat2" />
          </div>

          <div className="flex w-full px-2 items-center">
            <div className="text-xs text-zinc-500 mr-2">1:20</div>
            <Progress className="flex-1 w-full h-[5px]" value={ 36 } />
            <div className="text-xs text-zinc-500 ml-2">3:00</div>
          </div>
        </div>
      </div>

      <div className="flex-[0.2] flex self-center justify-end mx-2 gap-1 lg:gap-3">
        <PlayerBarAction icon="SquarePlay" />
        <PlayerBarAction icon="MicVocal" />
        <PlayerBarAction icon="ListVideo" />
        <PlayerBarAction icon="LaptopMinimal" />
        <PlayerBarVolume volume={70} />
        <PlayerBarAction icon="ExternalLink" />
        <PlayerBarAction icon="Maximize2" />
      </div>
    </div>
    ); 
};

export {
  PlayerBar
};