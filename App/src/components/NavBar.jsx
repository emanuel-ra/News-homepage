import { useState } from "react";
import { options } from "../mooks/navbar";
import Logo from "./icons/Logo";
import Menu from "./icons/Menu";
import MenuClose from "./icons/MenuClose";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () =>{
    setOpen(prev => !prev)
  }

  return (
    <>
      <nav className="flex justify-between w-full pt-10 lg:pb-5">
        <Logo />
        <ul className="hidden lg:flex gap-4 transition">
          {options.map((option, index) => (
            <NavOption key={index} option={option} />
          ))}
        </ul>
        <a href="#" onClick={handleClick} className="block h-full lg:hidden transition">
          <Menu />
        </a>
        {open && <NavMobile close={handleClick} />}
      </nav>
    </>
  );
}

const NavOption = ({ option }) => {
  return (
    <li>
      <a href="#">{option}</a>
    </li>
  );
};

const NavMobile = ({close}) => {
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-full w-full lg:hidden flex justify-end`}
    >
      <div className="relative w-8/12 h-full flex flex-col bg-white">
        <a href="#" onClick={close} className="w-full flex justify-end pb-20 pt-10 px-4">
          <MenuClose />
        </a>
        <ul className="px-8 text-lg text-black font-semibold flex flex-col gap-3 h-full">
          {options.map((option, index) => (
            <NavOption key={index} option={option} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
