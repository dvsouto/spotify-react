import { NavbarButton } from "./Partials/Button/NavbarButton";

const Navbar = () => {
  return (
    <div className="flex mb-4">
      <div className="flex-[0.3] items-start">
        <NavbarButton icon="ArrowLeft" />
        <NavbarButton icon="ArrowRight" />
      </div>

      <div className="flex-[0.7] self-end items-end text-right">
        <NavbarButton icon="ArrowBigDownDash" label="Instalar aplicativo" />

        <NavbarButton icon="Bell" />
        <NavbarButton icon="User" />
      </div>
    </div>
  ); 
};

export {
  Navbar
};