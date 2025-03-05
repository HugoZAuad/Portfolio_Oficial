"use client"; // Adicione esta linha no início do arquivo

import React, { useState } from "react";

import { NavBar } from "../Components/Navbar/Navbar";
import { About } from "../Pages/About/About";
import { Tech } from "../Pages/Tech/Tech";
import { Projetos } from "../Pages/Projects/Projects";
import { Habilidades } from "../Pages/Habilidades/Habilidades";

import { Infos } from "@/Components/Infos/Infos";

export default function Home() {
  const [section, setSection] = useState("Sobre");

  const renderSection = () => {
    switch (section) {
      case "Sobre":
        return <About />;
      case "Tecnologias":
        return <Tech />;
      case "Projetos":
        return <Projetos />;
      case "Habilidades":
        return <Habilidades />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <NavBar setSection={setSection} />
      </header>
      <div className="flex flex-col md:flex-row flex-grow">
        <aside className="w-full md:w-1/4 p-4">
          <Infos />
        </aside>
        <main className="flex-grow p-4">{renderSection()}</main>
      </div>
    </div>
  );
}
