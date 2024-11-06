import BannerLoginCadastro from "@/components/Banner/BannerLoginCadastro";
import FormularioLogin from "@/components/Formulario/FormularioLogin";

function Login() {
  return (
    <section className="min-h-screen bg-gradientCadastroLogin p-2">
      <BannerLoginCadastro />
      <FormularioLogin />
    </section>
  );
}

export default Login;
