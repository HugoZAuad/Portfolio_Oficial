# Portfolio Hugo

Bem-vindo ao repositório do meu portfólio. Este projeto foi desenvolvido utilizando Next.js e Lucide-react para criar uma interface moderna e responsiva.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **Lucide-react**: Biblioteca de ícones React.
- **Tailwind CSS**: Framework CSS para estilização.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

PortfolioOF/ 
├── public/ 
│ └── Imgs/
│ ├── Foto.png
│ └── QR_code.png
├── src/
│├── app/ │
│ └── layout.tsx
│ └── Components/
│ └── Infos/
│ └── Infos.tsx
├── .gitignore
├── package.json
└── README.md

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

npm install

Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

npm run dev

O projeto estará disponível em http://localhost:3000.

Componentes
Layout

O componente Layout define a estrutura básica da aplicação, incluindo o título e a descrição.

Infos
O componente Infos exibe informações pessoais e links para redes sociais.


Configurações do VS Code
Aqui estão algumas configurações úteis do VS Code para este projeto:

{
  "workbench.colorTheme": "Omni",
  "liveServer.settings.donotShowInfoMsg": true,
  "workbench.iconTheme": "vscode-icons",
  "files.autoSave": "onFocusChange",
  "explorer.confirmDelete": false,
  "git.openRepositoryInParentFolders": "never",
  "explorer.compactFolders": false,
  "workbench.tree.indent": 14,
  "editor.quickSuggestions": {
    "comments": "on"
  },
  "editor.wordWrap": "on",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.enableSmartCommit": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDragAndDrop": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.editor.empty.hint": "hidden",
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tabnine.experimentalAutoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
