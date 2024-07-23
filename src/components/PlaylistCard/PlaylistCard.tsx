const PlaylistCard = ({ name = "" }: { name: string }) => {
  return (
    <div className="flex flex-1-1-50 lg:flex-1-1-30 p-2">
      <div className="flex w-full bg-zinc-500/25 h-[52px] rounded-md">
        <img
          className="rounded-md rounded-r-none"
          width={52} 
          src={`https://picsum.photos/200/200?random=${ Math.random()*99999 }`} 
          alt="" 
        />

        <div className="flex p-2 text-zinc-200 font-bold text-xs self-center">
          { name }
        </div>
      </div>
    </div>
  );
};

export {
  PlaylistCard
};