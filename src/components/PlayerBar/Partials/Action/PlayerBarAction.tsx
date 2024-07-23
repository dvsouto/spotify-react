import { icons } from "lucide-react";

const PlayerBarAction = ({ icon }: { icon?: keyof typeof icons }) => {
  const renderIcon = () => {
    if (icon){
      const LucideIcon = icons[icon];

      return (<LucideIcon size={18} />);
    }
  };

  return (
    <div className="p-0 m-0">
      <button 
        className="p-1 m-0 text-gray-400 hover:text-white transition-all"
      >
        { renderIcon() }
      </button>
    </div>
  );
};

export {
  PlayerBarAction
};