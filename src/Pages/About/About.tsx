import React from "react";

export function About() {
  return (
    <main>
      <div className="bg-black-300 max-w-7xl flex flex-col p-4 border-4 border-neon rounded-2xl font-semibold text-lg overflow-hidden">
        <p className="text-normal text-justify">
          🚀 Transformar ideias em interfaces incríveis é minha missão como
          Front-End! Sou um desenvolvedor apaixonado por criar experiências web
          intuitivas e envolventes. Cada linha de código que escrevo é um passo
          para tornar a web mais acessível e inovadora.
        </p>
        <br />
        <p className="text-normal text-justify">
          💡 Tenho experiência com React, Next.js, JavaScript e TypeScript,
          desenvolvendo soluções dinâmicas e de alto impacto. Nos meus projetos,
          como o Pesquisador de Países e o App de Clima em Tempo Real, apliquei
          técnicas avançadas para integrar APIs, criar interfaces responsivas e
          garantir a melhor experiência para o usuário.
          <br />
          <br />
          🔎 Busco minha primeira oportunidade no mercado de tecnologia para
          aplicar minhas habilidades, aprender com profissionais incríveis e
          colaborar em projetos desafiadores.
        </p>
      </div>

      <section className="flex flex-row justify-evenly">
        <div className="bg-black-300 max-w-85 text-normal flex flex-col mt-3 p-4 border-4 rounded-2xl border-neon overflow-hidden max-h-80">
          <h1 className="font-semibold text-2xl">Formação Academica</h1>
          <div className="font-light">
            <h4 className="mb-3">
              ESTACIO/FAL - <p>Barachelado em Administração</p>
              <span>Fev/2014 a Ago/2018</span>
            </h4>

            <h4 className="mb-3">
              GRAN FACULDADE - <p>Barachelado em Ciências da Computação</p>
              <span>Jan/2025 a Jan/2028</span>
            </h4>

            <h4 className="mb-3">
              DNC - <p>Tecnico em Desenvolvedor Full-Stack</p>
              <span>Em andamento</span>
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
