"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showIosInstall, setShowIosInstall] = useState(false);

  useEffect(() => {
    let deferredPrompt: any;

    // Função para detectar iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    // Verifica se o app está em modo standalone (já instalado)
    const isInStandaloneMode = () =>
      ("standalone" in window.navigator && (window.navigator as any).standalone) ||
      window.matchMedia("(display-mode: standalone)").matches;

    // Registrar o Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registrado!"))
        .catch((error) => console.error("Erro ao registrar SW:", error));
    }

    // Evento para Android
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      // Exibir aviso após 2 segundos
      setTimeout(() => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
        }
      }, 2000);
    });

    // Lógica para iOS: se for iOS e não estiver instalado (standalone)
    if (isIos() && !isInStandaloneMode()) {
      setShowIosInstall(true);
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white text-center p-4">
      <h1 className="text-5xl sm:text-7xl font-bold flex gap-2">
        {"Bolt Network".split("").map((char, index) => (
          <span
            key={index}
            className="animate-glow"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
      <p className="text-lg mt-4 text-gray-400 max-w-[90%] sm:max-w-md">
        Conectando inovação e velocidade.
      </p>

      {/* Exibe um banner customizado para iOS */}
      {showIosInstall && (
        <div className="fixed bottom-4 left-4 right-4 bg-gray-800 p-4 rounded shadow-lg flex items-center justify-between">
          <span className="text-sm">
            Para instalar o app, toque no ícone de compartilhar e selecione "Adicionar à tela de início".
          </span>
          <button
            className="text-white font-bold ml-4"
            onClick={() => setShowIosInstall(false)}
          >
            Fechar
          </button>
        </div>
      )}
    </main>
  );
}
