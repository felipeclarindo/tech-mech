import Image from "next/image";

function BannerSobreNos() {
  return (
    <section className="min-h-[20vh] flex flex-col bg-gradientRoxo text-white text-center h-auto gap-6 p-4 justify-center items-center md:gap-10 xl:flex-row xl:text-left xl:justify-between xl:p-8">
      <div className="flex flex-col justify-center gap-4 w-full xl:w-1/2 xl:pl-[3.5em] ">
        <h1 className="font-bold text-[2rem] xl:text-[2.375rem]">
          Inovando o presente, dirigindo o futuro.
        </h1>
        <h2 className="text-[1.2rem]">
          Mais do que inovar, a Tech Mec está em constante evolução para estar
          sempre presente no dia a dia das pessoas.
        </h2>
      </div>

      {/* Imagem */}
      <div className="w-full flex justify-center xl:w-1/2">
        <Image
          src={"/images/logo2.png"}
          width={600}
          height={400}
          alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          className="w-3/4 xl:w-full object-contain"
        />
      </div>
    </section>
  );
}

export default BannerSobreNos;
