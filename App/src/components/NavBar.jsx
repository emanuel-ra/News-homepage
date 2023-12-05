import { options } from "../mooks/navbar"
import Logo from "./icons/Logo"

function NavBar() {
  return (
    <>
        <nav className="flex justify-between w-full pt-10 lg:pb-5">
            <Logo />
            <ul className="hidden lg:flex gap-4">
                {options.map((option,index) =>(
                    <NavOption key={index} option={option} />
                ))}
            </ul>
        </nav>
    </>
  )
}

const NavOption = ({option}) =>{
    return (
        <li>
            <a href="#">
                {option}
            </a>
        </li>
    )
}

export default NavBar