"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function MenuHeader() {
  const pathname = usePathname();
  const hiddenLinks =
  pathname !== "/" &&
  pathname !== "/sobre-nos" &&
  pathname !== "/participantes";

  return (
    <nav className={hiddenLinks ? "hidden" : "block"}>
      <ul className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10 md:ml-[8px] lg:gap-[70px] lg:ml-[95px] xl:gap-20">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-roxoClaro font-bold transition-all duration-500 ease-in-out xl:p-7"
                : " text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7"
            }
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/sobre-nos"
            className={
              pathname === "/sobre-nos"
                ? "text-roxoClaro font-bold transition-all duration-1000 ease-in-out xl:p-7"
                : " text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7"
            }
          >
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link
            href="/participantes"
            className={
              pathname === "/participantes"
                ? "text-roxoClaro font-bold transition-all duration-500 ease-in-out xl:p-7"
                : " text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7"
            }
          >
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
