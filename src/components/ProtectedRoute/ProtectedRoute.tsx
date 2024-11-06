// components/ProtectedRoute.tsx
import { useEffect, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner/Spinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login"); // Redireciona se não houver token
    } else {
      setIsLoading(false); // Caso tenha token, desativa o carregamento
    }
  }, [router]);

  // Enquanto está carregando
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-[1.8rem] text-roxoEscuro">
          Verificando o login...
        </h1>
        <h2 className="text-[1.2rem] text-roxoEscuro">
          (Em caso de demora, por favor reinicie a página)
        </h2>
        <Spinner />
      </div>
    );
  }

  return <>{children}</>; // Renderiza os filhos se o token estiver presente
};

export default ProtectedRoute;
