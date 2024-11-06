import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import BotaoChatBot from "../Botao/Botao";
import { usePathname } from "next/navigation";

function MenuFooter() {
  const pathname = usePathname();
  const hiddenLinks =
    pathname !== "/" &&
    pathname !== "/sobre-nos" &&
    pathname !== "/participantes";
  return (
    <nav
      className={
        hiddenLinks
          ? "hidden"
          : "flex flex-col gap-8 xs:flex-row xs:gap-12 sm:gap-28 lg:gap-14 xl:gap-[90px]"
      }
    >
      <ul>
        <li className="font-bold">Links Rápidos</li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          <BotaoChatBot mensagem={"Mêcanico Virtual"} position="footer" />
        </li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          <Link href="/participantes"> Participantes</Link>
        </li>
      </ul>

      <ul>
        <li className="font-bold">Sobre Nós</li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          <Link href="/sobre-nos"> Quem Somos?</Link>
        </li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          <Link href="/sobre-nos"> Nossa História </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuFooter;
