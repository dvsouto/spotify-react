import { CircleCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type PlayerBarMusicCardProps = {
  name: string;
  description: string;
  active?: boolean;
}

const PlayerBarMusicCard = ({ name, description, active }: PlayerBarMusicCardProps) => {
  const renderSoundIcon = () => {
    if (active) {
      return (
        <div className="text-green-600 absolute right-8 top-5">
          <CircleCheck size={18} />
        </div>
      );
    }
  };

  return (
    <div className="flex relative cursor-pointer p-2 rounded-md text-left">
      <div className="flex pl-2">
        <img
          className="rounded-md"
          width={54} 
          height={54}
          src={`https://picsum.photos/200/200?random=${ Math.random()*99999 }`} 
          alt="" 
        />
      </div>

      <div className="flex-1 px-3">
        <div className={twMerge("text-base")}>{ name }</div>
        <div className="text-sm text-zinc-400">{ description }</div>
      </div>

      { renderSoundIcon() }
    </div>
  );
};

export {
  PlayerBarMusicCard
};