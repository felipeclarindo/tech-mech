"use client"

import BannerHome from "@/components/Banner/BannerHome";
import Botao from "@/components/Botao/Botao";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function Home() {
  return (
    <ProtectedRoute>
      <section>
        <BannerHome />
        <div className={"w-[70%] my-[4%] mx-auto"}>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            Bem-vindo à sua oficina automotiva de confiança!
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Estamos entusiasmados em apresentar nossa mais recente inovação: o
            nosso{" "}
            <span className={"font-bold"}>Assistente Virtual 100% Online.</span>{" "}
            Com essa nova funcionalidade, você pode receber{" "}
            <span className={"font-bold"}>assistência</span> para o seu veículo{" "}
            <span className={"font-bold"}>sem sair de casa.</span>
          </p>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Nosso Assistente Virtual irá realizar um{" "}
            <span className={"font-bold"}>pré-diagnóstico</span> dos problemas
            enfrentados por você, dando também um{" "}
            <span className={"font-bold"}>pré-orçamento</span> estimado, além de
            <span className={"font-bold"}> realizar agendamentos</span> para
            manutenção do veículo, tudo de forma{" "}
            <span className={"font-bold"}>remota e conveniente.</span>
          </p>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Para utilizar o recurso, você deve{" "}
            <span className={"font-bold"}>clicar</span> em um dos{" "}
            <span className={"font-bold"}>botões</span> que redireciona para o
            <span className={"font-bold"}> Assistente</span>, fazendo com que
            possa conversar com o{" "}
            <Botao mensagem={"Engrenaldo"} position="engrenaldo" />!
          </p>
          <h2 className={"text-roxoClaro mt-[30px] text-[1.7rem] font-bold"}>
            Seu tempo é valioso!
          </h2>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Nossa prioridade é oferecer serviços de alta qualidade, combinados
            com
            <span className={"font-bold"}> inovação</span>. Experimente este{" "}
            <span className={"font-bold"}>atendimento diferenciado</span> e
            descubra uma nova maneira de cuidar do seu veículo com{" "}
            <span className={"font-bold"}>praticidade</span> e
            <span className={"font-bold"}> segurança.</span>
          </p>
          <p className={"mt-[14px] text-[1.2rem]"}>
            Estamos ansiosos para ajudá-lo a manter{" "}
            <span className={"font-bold"}>
              seu carro em perfeitas condições
            </span>
            , de forma <span className={"font-bold"}>simples</span> e{" "}
            <span className={"font-bold"}>eficaz.</span> Confie no cuidado da
            Tech Mec para todas suas necessidades automotivas.
          </p>
        </div>
      </section>
    </ProtectedRoute>
  );
}

export default Home;
