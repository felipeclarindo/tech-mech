import BannerLoginCadastro from "@/components/Banner/BannerLoginCadastro";
import FormularioCadastro from "@/components/Formulario/FormularioCadastro";

function Cadastro() {
  return (
    <section className=" min-h-screen bg-gradientCadastroLogin p-2">
      <BannerLoginCadastro />
      <FormularioCadastro />
    </section>
  );
}

export default Cadastro;
