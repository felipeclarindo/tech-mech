import Image from "next/image";
import logo from "../../images/logo.svg";

function BannerSobreNos() {
  return (
    <section className="flex flex-col bg-gradientRoxo text-white text-center h-auto gap-6 p-2 justify-center items-center md:gap-10 xl:flex-row xl:text-left xl:justify-evenly xl:p-1 xl:gap-0">
      <div className="flex flex-col justify-center gap-4 md:w-[600px] xl:w-[400px] xl:ml-5">
        <h1 className="font-bold text-[2rem] xl:text-[2.375rem]">
          Inovando o presente, dirigindo o futuro.
        </h1>
        <h2 className="text-[1.2rem]">
          Mais do que inovar, a Tech Mec está em constante evolução para estar
          sempre presente no dia a dia das pessoas.
        </h2>
      </div>
      <Image
        src={logo}
        alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
      />
    </section>
  );
}

export default BannerSobreNos;
