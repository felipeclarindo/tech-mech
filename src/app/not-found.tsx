import Link from "next/link";

function Error() {
  return (
    <section className="flex justify-center items-center">
      <div className="bg-roxoEscuro text-white w-[450px] h-[350px] mx-auto flex flex-col justify-center items-center mt-[15vh] gap-8 rounded-[50px] p-4 text-center">
        <h1 className="text-2xl">
          Ops, aconteceu um imprevisto e essa página não foi encontrada!
        </h1>
        <Link
          href="/"
          className="text-white bg-roxoClaro w-[200px] h-[70px] flex justify-center items-center rounded-[10px] text-[1.1rem] font-semibold transition-all duration-500 ease-in-out hover:bg-white hover:text-[#7569c9] hover:scale-110"
        >
          Voltar à página inicial
        </Link>
      </div>
    </section>
  );
}

export default Error;
