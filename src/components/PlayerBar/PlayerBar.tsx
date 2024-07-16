import { PlayerBarAction } from "./Partials/Action";

import "./PlayerBar.css";
import { PlayerBarVolume } from "./Partials/Volume";
import { PlayerBarButton } from "./Partials/Button";

const PlayerBar = () => {
  return (
    <div className="player">
      <div className="music">Left</div>

      <div className="player-controller">
        <PlayerBarButton icon="Shuffle" />
        <PlayerBarButton icon="StepBack" />
        <PlayerBarButton icon="Play" type="rounded" />
        <PlayerBarButton icon="StepForward" />
        <PlayerBarButton icon="Repeat2" />
      </div>

      <div className="buttons">
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