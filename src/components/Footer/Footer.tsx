"use client";

import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo2.png";
import MenuFooter from "../Menu/MenuFooter";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const linksHidden =
    pathname !== "/" &&
    pathname !== "/sobre-nos" &&
    pathname !== "/participantes";
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white gap-5 h-auto p-6 lg:flex-row lg:justify-evenly">
      <MenuFooter />
      <div
        className={
          linksHidden
            ? "flex flex-col items-center"
            : "flex flex-col items-center xl:mr-8"
        }
      >
        <Link href={linksHidden ? "" : "/"}>
          <Image
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </Link>
        <p className="font-light">&copy; Copyright - 2024</p>
      </div>
      <div className={linksHidden ? "hidden" : "flex flex-col items-center"}>
        <p className="font-bold">Acompanhe a Porto nas redes sociais</p>
        <div className="flex gap-[5%] text-white">
          <a href="https://www.facebook.com/porto/?locale=pt_BR" target="blank">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro text-[50px]"
            />
          </a>
          <a href="https://www.instagram.com/porto/" target="blank">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro text-[50px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro text-[50px] "
            />
          </a>
          <a href="https://www.youtube.com/portoseguro" target="blank">
            <FontAwesomeIcon
              icon={faSquareYoutube}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro text-[50px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
