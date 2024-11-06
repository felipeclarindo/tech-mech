"use client";

import { useCallback, useRef, useState } from "react";
import {
  WebChatContainer,
  WebChatInstance,
  WebChatConfig,
} from "@ibm-watson/assistant-web-chat-react";
import { BotaoChatBotProps } from "@/types";
import { usePathname } from "next/navigation";

const webChatOptions: WebChatConfig = {
  integrationID: "814fa5a5-953a-482f-aee2-2cb5d9d87728",
  region: "us-south",
  serviceInstanceID: "8a23610e-7cde-411e-98a0-a2a5e0839572",
  locale: "pt-br",
};

function BotaoChatBot({ mensagem, position }: BotaoChatBotProps) {
  const botaoRef = useRef<HTMLButtonElement>(null);
  const [chatInstance, setChatInstance] = useState<WebChatInstance | null>(
    null
  );

  const handleBeforeRender = async (
    instance: WebChatInstance
  ): Promise<void> => {
    setChatInstance(instance);
  };

  const toggleWebChat = useCallback(() => {
    if (chatInstance) {
      chatInstance.toggleOpen();
    }
  }, [chatInstance]);

  const pathname = usePathname();
  const hidddenLinks =
    pathname !== "/" &&
    pathname !== "/sobre-nos" &&
    pathname !== "/participantes";

  if (hidddenLinks) {
    return null;
  }

  const buttonClass = (() => {
    switch (position) {
      case "banner":
        return "bg-white text-roxoClaro border-none cursor-pointer rounded-lg w-[200px] h-[55px] text-[1.125rem] font-semibold transition-all duration-500 ease-in-out hover:scale-110 hover:bg-roxoEscuro hover:text-white";
      case "engrenaldo":
        return "bg-white text-roxoClaro border-none cursor-pointer text-[1.2rem] font-semibold transition-all duration-500 ease-in-out hover:underline";
      case "footer":
        return "text-white bg-black border-none cursor-pointer transition-all duration-500 ease-in-out text-[16px] hover:text-roxoClaro";
    }
  })();

  return (
    <>
      <button ref={botaoRef} className={buttonClass} onClick={toggleWebChat}>
        {mensagem}
      </button>
      <WebChatContainer
        config={webChatOptions}
        onBeforeRender={handleBeforeRender}
      />
    </>
  );
}

export default BotaoChatBot;
