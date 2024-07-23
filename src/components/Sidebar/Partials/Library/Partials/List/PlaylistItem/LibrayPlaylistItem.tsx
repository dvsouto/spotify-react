import { Volume2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type LibraryPlaylistItemProps = {
  name: string;
  description: string;
  active?: boolean;
}

const LibraryPlaylistItem = ({ name, description, active }: LibraryPlaylistItemProps) => {
  const renderSoundIcon = () => {
    if (active) {
      return (
        <div className="text-green-600 absolute right-3 top-6 hidden lg:block">
          <Volume2 size={18} />
        </div>
      );
    }
  };

  return (
    <div className="flex relative group cursor-pointer hover:bg-zinc-800 p-2 rounded-md">
      <div className="flex-1 lg:flex-[0.3]">
        <img
          className="rounded-md"
          width={48} 
          src={`https://picsum.photos/200/200?random=${ Math.random()*99999 }`} 
          alt="" 
        />
      </div>

      <div className="flex-1 px-3 hidden lg:block">
        <div className={twMerge("text-base", active && "text-green-600")}>{ name }</div>
        <div className="text-sm text-zinc-400">{ description }</div>
      </div>

      { renderSoundIcon() }
    </div>
  );
};

export {
  LibraryPlaylistItem
};