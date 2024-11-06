import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../../types";
import Image from "next/image";

function Card({ foto, nome, rm, git, linkedin, instagram }: CardProps) {
  return (
    <section className=" w-[280px] h-[400px] flex flex-col justify-center items-center bg-white rounded-[20%] xs:w-[320px] xs:h-[450px] ">
      <Image
        src={foto}
        alt={nome}
        className="w-[250px] h-[250px] rounded-full"
      />
      <p className="mt-[10px] text-[1.6rem] font-bold">{nome}</p>
      <p className="text-roxoClaro font-bold text-[1.2rem]">RM: {rm}</p>
      <div>
        <a href={git} target="blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="m-[2px] transition-all duration-500 ease-in-out hover:text-roxoClaro hover:scale-110 text-[50px]"
          />
        </a>
        <a href={linkedin} target="blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="m-[2px] transition-all duration-500 ease-in-out hover:text-roxoClaro hover:scale-110 text-[50px]"
          />
        </a>
        <a href={instagram} target="blank">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className="m-[2px] transition-all duration-500 ease-in-out hover:text-roxoClaro hover:scale-110 text-[50px]"
          />
        </a>
      </div>
    </section>
  );
}

export default Card;
