"use client";

import React from "react";

interface NavBarProps {
  setSection: (section: string) => void;
}

export function NavBar({ setSection }: NavBarProps) {
  return (
    <div className="text-2xl flex flex-col md:flex-row justify-end gap-5 text-white font-semibold md:mr-5 md:mt-5">
      <h1
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300"
        onClick={() => setSection("Sobre")}
      >
        Sobre
      </h1>
      <h1
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300"
        onClick={() => setSection("Tecnologias")}
      >
        Tecnologias
      </h1>
      <h1
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300"
        onClick={() => setSection("Projetos")}
      >
        Projetos
      </h1>
      <h1
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300"
        onClick={() => setSection("Habilidades")}
      >
        Habilidades
      </h1>
    </div>
  );
}
