import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BannerLoginCadastro() {
  return (
    <section className="flex flex-col justify-center items-center text-white gap-4">
      <h1 className="font-bold text-[1.8rem] text-center p-3 md:w-[600px]">
        Cansado de perder tempo pra descobrir os problemas com seu carro?
      </h1>
      <h2 className="text-[1.05rem] p-2">
        Converse com nosso Assistente Virtual:
      </h2>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          Suporte 24 horas
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          Pré-orçamentos e pré-diagnósticos
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-1 mt-1"
            width={10}
          />
          Melhor agilidade e acertividade
        </li>
      </ul>
    </section>
  );
}

export default BannerLoginCadastro;
