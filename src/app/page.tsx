"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registrado!"))
        .catch((error) => console.error("Erro ao registrar SW:", error));
    }

    let deferredPrompt: any;
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
    </main>
  );
}
