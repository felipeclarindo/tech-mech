"use client";

import { usePathname } from "next/navigation";
import { WebChatContainer, WebChatConfig } from "@ibm-watson/assistant-web-chat-react";

const webChatOptions: WebChatConfig = {
  integrationID: "814fa5a5-953a-482f-aee2-2cb5d9d87728",
  region: "us-south",
  serviceInstanceID: "8a23610e-7cde-411e-98a0-a2a5e0839572",
  locale: "pt-br",
};

function ChatBot() {
  const pathname = usePathname();

  // Verifica se a rota é /login ou /cadastro e não renderiza o ChatBot nessas páginas
  if (pathname === "/login" || pathname === "/cadastro") {
    return null;
  }

  return <WebChatContainer config={webChatOptions} />;
}

export default ChatBot;
