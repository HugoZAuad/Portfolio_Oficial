"use client";

import React from "react";

interface NavBarProps {
  setSection: (section: string) => void;
}

export function NavBar({ setSection }: NavBarProps) {
  return (
    <div className="text-2xl flex flex-col md:flex-row justify-end gap-5 text-white font-semibold md:mr-5 md:mt-5">
      <button
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300 bg-transparent border-none"
        onClick={() => setSection("Sobre")}
      >
        Sobre
      </button>
      <button
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300 bg-transparent border-none"
        onClick={() => setSection("Habilidades")}
      >
        Skills
      </button>
      <button
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300 bg-transparent border-none"
        onClick={() => setSection("Tecnologias")}
      >
        Tecnologias
      </button>
      <button
        className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300 bg-transparent border-none"
        onClick={() => setSection("Projetos")}
      >
        Projetos
      </button>
    </div>
  );
}
