"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UsuarioCadastro } from "@/types";

function FormularioCadastro() {
  const router = useRouter();

  const [usuario, setUsuario] = useState<UsuarioCadastro>({
    nome: "",
    cpf: "",
    telefone: "",
    senha: "",
  });

  const [erros, setErros] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    senha: "",
  });

  // Atualização para aceitar acentuação
  const validarNome = (nome: string) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome);
  const validarCPF = (cpf: string) => cpf.length === 11 && /^\d+$/.test(cpf);
  const validarTelefone = (telefone: string) =>
    telefone.length === 11 && /^\d+$/.test(telefone);
  const validarSenha = (senha: string) =>
    senha.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/g.test(senha);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Formatação para CPF e telefone ao digitar
    const formattedValue =
      name === "cpf" || name === "telefone" ? value.replace(/\D/g, "") : value;

    setUsuario({ ...usuario, [name]: formattedValue });

    switch (name) {
      case "nome":
        setErros({
          ...erros,
          nome: validarNome(value) ? "" : "Nome deve conter apenas letras.",
        });
        break;
      case "cpf":
        setErros({
          ...erros,
          cpf: validarCPF(formattedValue)
            ? ""
            : "CPF deve conter 11 dígitos numéricos.",
        });
        break;
      case "telefone":
        setErros({
          ...erros,
          telefone: validarTelefone(formattedValue)
            ? ""
            : "Telefone deve ter DDD e 11 dígitos numéricos.",
        });
        break;
      case "senha":
        setErros({
          ...erros,
          senha: validarSenha(value)
            ? ""
            : "Senha deve ter pelo menos 8 caracteres e um especial.",
        });
        break;
    }
  };

  const verificarCpfExistente = async (cpf: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/techmec/clientes/${cpf}`
      );
      return response.ok;
    } catch (error) {
      console.error("Erro ao verificar CPF:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !validarNome(usuario.nome) ||
      !validarCPF(usuario.cpf) ||
      !validarTelefone(usuario.telefone) ||
      !validarSenha(usuario.senha)
    ) {
      alert("Por favor, corrija os erros antes de enviar o formulário.");
      return;
    }

    const cpfExiste = await verificarCpfExistente(usuario.cpf);
    if (cpfExiste) {
      alert("Este CPF já está cadastrado.");
      return;
    }

    const usuarioFormatado = {
      ...usuario,
      cpf: usuario.cpf.replace(/\D/g, ""), // Remove caracteres especiais
      telefone: usuario.telefone.replace(/\D/g, ""), // Remove caracteres especiais
    };

    try {
      const response = await fetch("http://localhost:8080/techmec/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioFormatado),
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso.");
        setUsuario({ nome: "", cpf: "", telefone: "", senha: "" });
        router.push("/login");
      } else {
        alert("Erro no cadastro. Tente novamente.");
      }
    } catch (error) {
      alert(`Falha ao cadastrar o usuário: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[340px] h-[600px] mx-auto my-6 bg-roxoEscuro text-white rounded-2xl xs:w-[370px] sm:w-[400px]"
    >
      <h1 className="text-center text-roxoClaro font-bold">Cadastro</h1>
      <div className="flex flex-col my-8">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          className="h-[35px] p-3 rounded-md text-black"
          required
          value={usuario.nome}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px]">{erros.nome}</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          placeholder="Digite seu CPF"
          className="h-[35px] p-3 rounded-md text-black"
          required
          value={usuario.cpf}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px] h-auto">
          {erros.cpf}
        </span>
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="Digite seu telefone"
          className="h-[35px] p-3 rounded-md text-black"
          required
          value={usuario.telefone}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px]">
          {erros.telefone}
        </span>
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
          value={usuario.senha}
          onChange={handleChange}
        />
        <span className="text-red-500 text-center w-[320px]">
          {erros.senha}
        </span>
        <h2 className="mt-2 text-center">
          Já possuo conta,{" "}
          <Link
            href="/login"
            className="font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro hover:underline"
          >
            entrar
          </Link>
        </h2>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-roxoClaro w-[120px] text-white text-[1.1rem] rounded-2xl h-[38px] font-bold transition-all duration-500 ease-in-out hover:scale-110"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default FormularioCadastro;
