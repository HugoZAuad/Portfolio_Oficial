import React from "react";
import habilidadesData from "./Habilidades.json";

const Habilidades: React.FC = () => {
  return (
    <main className="flex flex-row gap-8">
      <section className="bg-black-300 max-w-2xl min-h-sm p-4 border-4 border-neon rounded-2xl font-semibold text-lg overflow-hidden ">
        <div>
          <h3 className="text-2xl text-normal flex justify-center items-center font-semibold mb-4">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside">
            {habilidadesData.interpessoais.map((habilidade, index) => (
              <li key={index} className="text-normal mb-2">
                <strong className="text-green-300">{habilidade.nome}</strong>:{" "}
                {habilidade.descricao} <br />
                <span className="text-gray-500">Nível: {habilidade.nivel}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-black-300 max-w-xl min-h-sm p-4 border-4 border-neon rounded-2xl font-semibold text-lg overflow-hidden">
        <div>
          <h3 className="text-2xl text-normal flex justify-center items-center font-semibold mb-4">
            Hard Skills
          </h3>
          <ul className="list-disc list-inside">
            {habilidadesData.hardSkills.map((habilidade, index) => (
              <li key={index} className="text-normal mb-2">
                <strong className="text-green-300">{habilidade.nome}</strong>:{" "}
                {habilidade.descricao} <br />
                <span className="text-gray-500">Nível: {habilidade.nivel}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Habilidades;
