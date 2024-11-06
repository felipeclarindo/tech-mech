"use client"

import BannerSobreNos from "@/components/Banner/BannerSobreNos";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function SobreNos() {
  return (
    <section>
      <ProtectedRoute>
        <BannerSobreNos />
        <div className={"w-[70%] my-[4%] mx-auto"}>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            Conheça a Tech Mec
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Bem-vindo à Tech Mec, nossa empresa é dedicada a{" "}
            <span className={"font-bold"}>melhorar o serviço automotivo </span>
            para nossos clientes. Desde nossa fundação, buscamos oferecer{" "}
            <span className={"font-bold"}>soluções inovadoras</span> e
            <span className={"font-bold"}> eficientes</span> para atender às
            necessidades do setor automotivo.
          </p>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            História
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            A Tech Mec faz parte de uma{" "}
            <span className={"font-bold"}>parceria com a Porto</span>, uma
            empresa líder no mercado de seguros e serviços financeiros. Foi
            fundada em 2024 e tem sido pioneira em oferecer soluções de
            qualidade para seus clientes.
          </p>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Com uma visão voltada para o futuro, a Tech Mec foi criada com o
            objetivo de{" "}
            <span className={"font-bold"}>revolucionar o setor automotivo</span>
            . Acreditamos que a<span className={"font-bold"}> tecnologia</span>{" "}
            pode transformar a maneira como os serviços são prestados,
            tornando-os mais <span className={"font-bold"}>rápidos</span>,{" "}
            <span className={"font-bold"}>eficientes</span> e{" "}
            <span className={"font-bold"}>acessíveis</span> para todos.
          </p>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            Missão
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Nossa missão é oferecer um serviço automotivo de{" "}
            <span className={"font-bold"}>alta qualidade</span>, com foco na
            satisfação do cliente. Queremos{" "}
            <span className={"font-bold"}>simplificar</span> os processos de
            <span className={"font-bold"}> reparo</span> dos veículos.
          </p>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            Compromisso
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Estamos comprometidos em fornecer um{" "}
            <span className={"font-bold"}>serviço excepcional</span> e superar
            as expectativas de nossos clientes. Nossa equipe é composta por
            profissionais experientes e qualificados, prontos para ajudá-lo em
            todas as etapas do processo.
          </p>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            O Futuro dos Serviços Automotivos
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Como parte de nossa busca por inovação, estamos desenvolvendo um
            <span className={"font-bold"}> Assistente Virtual</span> exclusivo
            para <span className={"font-bold"}>identificar problemas</span>,
            fornecer
            <span className={"font-bold"}> pré-diagnósticos</span> precisos e
            encaminhar seu veículo para{" "}
            <span className={"font-bold"}>reparo</span>. Nosso Assistente também
            irá gerar um <span className={"font-bold"}>pré-orçamento</span>{" "}
            transparente, garantindo que você tenha{" "}
            <span className={"font-bold"}>total visibilidade</span> sobre os
            serviços prestados.
          </p>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Junte-se a nós nesta jornada rumo ao{" "}
            <span className={"font-bold"}>
              futuro dos serviços automotivos!
            </span>
          </p>
        </div>
      </ProtectedRoute>
    </section>
  );
}

export default SobreNos;
