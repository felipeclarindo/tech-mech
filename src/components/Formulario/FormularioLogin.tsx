"use client";

import { UsuarioLogin } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Função para gerar um token simples
const gerarToken = () => {
  return "token-" + Math.random().toString(36).substring(2, 9); // Exemplo de token aleatório
};

function FormularioLogin() {
  const router = useRouter();

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    cpf: "",
    senha: "",
  });

  const [erros, setErros] = useState({
    cpf: "",
    senha: "",
  });

  const validarCPF = (cpf: string) => cpf.length === 11 && /^\d+$/.test(cpf);
  const validarSenha = (senha: string) =>
    senha.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Formatação para CPF ao digitar
    const formattedValue = name === "cpf" ? value.replace(/\D/g, "") : value;

    setUsuario({ ...usuario, [name]: formattedValue });

    switch (name) {
      case "cpf":
        setErros({
          ...erros,
          cpf: validarCPF(formattedValue)
            ? ""
            : "CPF deve conter 11 dígitos numéricos.",
        });
        break;
      case "senha":
        setErros({
          ...erros,
          senha: validarSenha(value)
            ? ""
            : "Senha deve ter pelo menos 8 caracteres e um caractere especial.",
        });
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validarCPF(usuario.cpf) || !validarSenha(usuario.senha)) {
      alert("Por favor, corrija os erros antes de enviar o formulário.");
      return;
    }

    const usuarioFormatado = {
      cpf: usuario.cpf.replace(/\D/g, ""), // Remove caracteres especiais
      senha: usuario.senha,
    };

    try {
      const response = await fetch("http://localhost:8080/techmec/clientes/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioFormatado),
      });

      if (response.ok) {
        alert("Login realizado com sucesso, seja bem-vindo!");

        // Gera e armazena o token no localStorage
        const token = gerarToken();
        localStorage.setItem("authToken", token);

        router.push("/"); // Redireciona para a página principal após o login
      } else {
        alert("CPF ou senha inválidos. Tente novamente.");
      }
    } catch (error) {
      alert(`Falha ao realizar o login: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[340px] h-[400px] mx-auto my-6 bg-roxoEscuro text-white rounded-2xl xs:w-[370px] sm:w-[400px]"
    >
      <h1 className="text-center text-roxoClaro font-bold">Login</h1>
      <div className="flex flex-col my-8">
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          placeholder="Digite seu CPF"
          className="h-[35px] p-3 rounded-md text-black"
          required
          autoComplete="off"
          value={usuario.cpf}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px]">{erros.cpf}</span>
      </div>
      <div className="flex flex-col mb-7">
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Digite sua senha"
          className="h-[35px] p-3 rounded-md text-black"
          required
          autoComplete="off"
          value={usuario.senha}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px]">
          {erros.senha}
        </span>
        <h2 className="mt-2 text-center">
          Não tenho conta,{" "}
          <Link
            href="/cadastro"
            className="font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro hover:underline"
          >
            cadastrar
          </Link>
        </h2>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-roxoClaro w-[120px] text-white text-[1.1rem] rounded-2xl h-[38px] font-bold transition-all duration-500 ease-in-out hover:scale-110"
      >
        Entrar
      </button>
    </form>
  );
}

export default FormularioLogin;
