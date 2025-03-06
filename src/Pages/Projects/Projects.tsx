import { useState, useEffect } from "react";
import Image from "next/image";
import { Arrow } from "@/Components/Arrow/Arrow";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  siteLink: string;
}

export function Projetos() {
  const [projectsData, setProjectsData] = useState<Project[] | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const loadProjectsData = async () => {
      const data = await import("./Projects.json");
      setProjectsData(data.Projetos);
    };

    loadProjectsData();
  }, []);

  const handleNextProject = () => {
    if (projectsData) {
      setCurrentProjectIndex(
        (prevIndex) => (prevIndex + 1) % projectsData.length
      );
    }
  };

  const handlePreviousProject = () => {
    if (projectsData) {
      setCurrentProjectIndex(
        (prevIndex) =>
          (prevIndex - 1 + projectsData.length) % projectsData.length
      );
    }
  };

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  const currentProject = projectsData[currentProjectIndex];

  return (
    <main className="bg-black-300 max-w-7xl flex flex-col justify-center items-center p-4 border-4 border-neon rounded-2xl font-semibold text-lg overflow-hidden">
      <div className="flex items-center justify-around w-full mt-10 mb-4">
        <div
          className="bg-green-200 w-12 h-12 rounded-full cursor-pointer hover:bg-green-400 transition-colors duration-300 flex items-center justify-center"
          onClick={handlePreviousProject}
        >
          <Arrow direction="left" />
        </div>

        <Image
          src={currentProject.image}
          alt={currentProject.title}
          className="mx-4 max-w-7xl shadow-green-400 rounded-3xl shadow-lg"
          width={900}
          height={500}
        />

        <div
          className="bg-green-200 w-12 h-12 rounded-full cursor-pointer hover:bg-green-400 transition-colors duration-300 flex items-center justify-center"
          onClick={handleNextProject}
        >
          <Arrow direction="right" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-2xl text-normal font-semibold mb-2">
          {currentProject.title}
        </h3>
        <p className="text-normal mb-2">{currentProject.description}</p>
        <a
          href={currentProject.link}
          className="text-green-300 transition-colors duration-300 mb-1 hover:text-green-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório
        </a>
        <a
          href={currentProject.siteLink}
          className="text-green-300 transition-colors duration-300 mb-1 hover:text-green-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site
        </a>
      </div>
    </main>
  );
}
