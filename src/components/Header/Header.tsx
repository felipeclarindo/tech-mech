"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo3.png";
import MenuHeader from "../Menu/MenuHeader";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const hiddenLinks =
    pathname !== "/" &&
    pathname !== "/sobre-nos" &&
    pathname !== "/participantes";

  const handleLogout = () => {
    const confirmarLogout = confirm("Você realmente deseja sair?");
    if (confirmarLogout) {
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redireciona para a página de login
    }
  };

  return (
    <header
      className={
        hiddenLinks
          ? "flex justify-center items-center bg-roxoEscuro min-h-[125px] gap-6"
          : "flex justify-center items-center bg-roxoEscuro min-h-[125px] gap-6 md:justify-evenly xl:justify-between xl:px-[5%]"
      }
    >
      <Link href={hiddenLinks ? "" : "/"}>
        <Image
          src={logo}
          alt="Logo circular roxa, simbolizando a TechMec"
          className={
            hiddenLinks
              ? "transition-transform duration-500 ease-in-out hover:scale-110"
              : "transition-transform duration-500 ease-in-out hover:scale-125 min-w-24"
          }
        />
      </Link>
      <MenuHeader />
      <button
        onClick={handleLogout}
        className={
          hiddenLinks
            ? "hidden"
            : "xs:text-[1rem] sm:text-[1.125rem] bg-roxoClaro text-white border-none cursor-pointer rounded-lg h-[75px] w-[170px] px-2 font-bold transition-all duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-roxoEscuro"
        }
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
