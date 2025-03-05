export function NavBar() {
  return (
    <div className="text-2xl flex flex-col md:flex-row justify-end gap-5 text-white font-semibold p-4 md:mr-5 md:mt-5">
      <h1 className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300">
        Sobre
      </h1>
      <h1 className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300">
        Tecnologias
      </h1>
      <h1 className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300">
        Projetos
      </h1>
      <h1 className="text-center md:text-left hover:text-neon cursor-pointer transition-colors duration-300">
        Habilidades
      </h1>
    </div>
  );
}
