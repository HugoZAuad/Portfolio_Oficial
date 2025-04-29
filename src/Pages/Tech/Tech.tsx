import React from "react";
import techsData from "./Tech.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faNeos,
  faFreeCodeCamp,
  faFigma,
  IconDefinition,
  faBootstrap,
  faCss3,
  faGitAlt,
  faMdb,
  faStripeS,
} from "@fortawesome/free-brands-svg-icons";

const iconMap: { [key: string]: IconDefinition } = {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faNeos,
  faFreeCodeCamp,
  faFigma,
  faBootstrap,
  faCss3,
  faGitAlt,
  faMdb,
  faStripeS,
};

export function Tech() {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {techsData.Tecnologias.map((tech, index) => {
        const IconComponent = iconMap[tech.icone];
        return (
          <div
            key={index}
            className="bg-black-300 p-4 border-4 border-neon rounded-2xl shadow-lg flex flex-col items-center hover:shadow-green-300 transition-shadow duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={IconComponent}
              size="3x"
              className="mb-4 rounded-full p-3 bg-black-200 border-4 border-neon"
              style={{ color: tech.cor }}
            />
            <h2 className="text-2xl text-normal font-semibold mb-2">
              {tech.nome}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
