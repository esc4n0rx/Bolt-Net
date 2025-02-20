"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }

    let deferredPrompt: any;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setTimeout(() => {
        deferredPrompt.prompt();
      }, 2000);
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-7xl font-bold flex gap-2">
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
      <p className="text-lg mt-4 text-gray-400">Conectando inovação e velocidade.</p>
    </main>
  );
}
