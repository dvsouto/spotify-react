import { twMerge } from "tailwind-merge";
import { LibraryPlaylistItem } from "./PlaylistItem/LibrayPlaylistItem";
import { ScrollArea } from "@components/ui/scroll-area";

const LibraryList = ({ className = "" }: { className?: string }) => {
  return (
    <ScrollArea 
      className={twMerge("h-full mt-2 lg:mt-0", className)}
    >
      <LibraryPlaylistItem
        name="Playlist name"
        description="Playlist description"
        active
      />

      <LibraryPlaylistItem
        name="Eletrônica"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Rap"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Racionais"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="MPB"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Techno & Techhouse"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Techno & Techhouse"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Playlist name"
        description="Playlist description"
      />

      <LibraryPlaylistItem
        name="Eletrônica"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Rap"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Racionais"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="MPB"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Techno & Techhouse"
        description="Playlist dvsouto"
      />

      <LibraryPlaylistItem
        name="Techno & Techhouse"
        description="Playlist dvsouto"
      />
    </ScrollArea>
  );
};

export {
  LibraryList
};