import { Page } from "@components/Page";
import "./Home.css";
import { PlaylistCard } from "@components/PlaylistCard/PlaylistCard";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-wrap">
        <PlaylistCard name="Playlist name" />
        <PlaylistCard name="Eletrônica" />
        <PlaylistCard name="Rap" />
        <PlaylistCard name="Racionais" />
        <PlaylistCard name="MPB" />
        <PlaylistCard name="Techno & Techouse" />
      </div>
    </Page>
  );
};

export {
  Home
};
