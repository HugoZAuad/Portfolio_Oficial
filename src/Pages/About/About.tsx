import React from "react";

export function About() {
  return (
    <main>
      <div className="bg-black-300 max-w-7xl flex flex-col p-4 border-4 border-neon rounded-2xl font-semibold text-lg overflow-hidden">
        <p className="text-normal text-justify">
          Minha trajetória profissional começou como aprendiz na Sococo S/A
          Indústrias Alimentícias, onde desenvolvi habilidades em administração
          de pessoal e atendimento ao cliente. Em seguida, trabalhei como
          Auxiliar Administrativo na Transmares Corretora & Certificação
          Digital, gerenciando processos de seguros. Alguns anos depois, na
          Katoen Natie, liderei o atendimento aos motoristas e a validação de
          documentações. Após isso, atuei na Teleperformance, aprimorando minha
          capacidade de resolver problemas e oferecer soluções eficazes no
          atendimento ao cliente.
        </p>
        <br />
        <p className="text-normal text-justify">
          Depois, ingressei na TCIA como Auxiliar de Logística, onde me
          especializei em análises de relatórios em Excel, gestão de estoques e
          criação de dashboards via Power BI, contribuindo para a eficiência
          operacional da empresa. Passei como Analista de Atendimento e
          Implantação na Vivver Sistemas, onde analisei atendimentos,
          simplificava conhecimentos complexos e apoiei nas implantações do
          sistema, sempre buscando melhorar a experiência do usuário final. Hoje
          estou em busca de uma nova recolocação no mercado de trabalho,
          especificamente na área de tecnologia.
          <br />
          <br />
          Estou em um processo de transição de carreira e, para isso, estou
          estudando programação e fazendo a faculdade de Ciências da Computação
          na Gran Faculdade. Meu objetivo é unir minha experiência anterior com
          novas habilidades na área tecnológica, buscando oportunidades que me
          permitam crescer e contribuir em um setor em constante evolução.
        </p>
      </div>

      <section className="flex flex-row justify-evenly">
        <div className="bg-black-300 max-w-85 text-normal flex flex-col mt-3 p-4 border-4 rounded-2xl border-neon overflow-hidden max-h-70">
          <h1 className="font-semibold text-2xl">Formação Academica</h1>
          <div className="font-light">
            <h4 className="mb-3">
              ESTACIO/FAL - <p>Barachelado em Administração</p>
              <span>Fev/2014 a Ago/2018</span>
            </h4>

            <h4 className="mb-3">
              GRAN FACULDADE - <p>Barachelado em Ciências da Computação</p>
              <span>Jan/2025 a Jan/2029</span>
            </h4>
          </div>
        </div>

        <div className="bg-black-300 max-w-85 text-normal flex flex-col mt-3 p-4 border-4 rounded-2xl border-neon overflow-hidden">
          <h1 className="font-semibold text-2xl">Cursos e certificados</h1>
          <div className="font-light">
            <h4>- Introdução à Lógica de Programação</h4>
            <h4>- Lógica de Programação com JavaScript</h4>
            <h4>- Introdução ao Desenvolvimento Web</h4>
            <h4>- Introdução a HTML + CSS</h4>
            <h4>- Princípios de Design de Interface</h4>
            <h4>- Introdução ao Front End com React.JS</h4>
            <h4>- Desenvolvimento Front End</h4>
            <h4>- Versionamento de Código Git</h4>
            <h4>- Scrum - Gestão de Projetos Ágeis</h4>
            <h4>- Certificação em pacote Office e Office 365</h4>
            <h4>- Certificação em Power BI</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
