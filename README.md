<h1 align="center">
  <img
    src=".github/assets/logo-ignite.svg"
    title="Logo Ignite Rocketseat"
    alt="Logo Ignite Rocketseat"
    width="30px"
  />
  Ignite Design System
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/Ignite-Design-System">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/Ignite-Design-System">
  
  <a href="https://github.com/pabloxt14/Ignite-Design-System/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/Ignite-Design-System">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/Ignite-Design-System/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/Ignite-Design-System?style=social">
  </a>
</p>

<p>
  <img src=".github/assets/banner.png" alt="" />
</p>

<h4 align="center"> 
	🚀 Aplicação finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <a href="#-deploy">Deploy</a> |
 <a href="#-functionalities">Functionalities</a> |
 <a href="#-layout">Layout</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Neste projeto, construímos um Design System em formato de `monorepo`, documentando `tokens` (cores, tamanhos de fonte, espaçamento, etc.) e `componentes` React com a ferramenta `Storybook`. Utilizamos o `turbo-repo` para automatizar o processo de build dos pacotes, garantindo eficiência e escalabilidade. Com o `changeset`, facilitamos a atualização e publicação dos pacotes no `npm`, mantendo um histórico claro das alterações. Essa abordagem promove reutilização, padronização e colaboração entre diferentes projetos.

Vale ressaltar que este projeto foi desenvolvido como conclusão de um desafio proposto no curso/trilha **Ignite** oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

---

## 🔗 Deploy

A Documentação do Design System pode ser acessada através da seguinte URL base: https://pabloxt14.github.io/Ignite-Design-System/

---

## ⚙ Functionalities
- [x] Pacote com as configurações base do ESLint na aplicação
- [x] Pacote com as configurações base do TypeScript na aplicação
- [x] Pacote de tokens e documentação com Storybook
  - [x] colors
  - [x] fonts
  - [x] font-sizes
  - [x] font-weights
  - [x] line-heights
  - [x] radii
  - [x] space
- [x] Criação componentes React e documentação com Storybook
  - [x] Text
  - [x] Heading (Títulos, subtítulos)
  - [x] Box / Card
  - [x] Button
  - [x] TextInput
  - [x] TextArea
  - [x] Checkbox
  - [x] Avatar
  - [x] MultiStep (indicador de etapas de preenchimento de algo, ex: formulário)
  - [x] Tooltip
  - [x] Toast

---

## 🎨 Layout

Você pode visualizar o layout do projeto no qual nos baseamos para criar o Design System através [desse link](https://www.figma.com/file/cowwFHJimoyQomSAynMjGz/Ignite-Call?node-id=4:412). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

Veja uma simples demonstração da documentação do Design System feito com o Storybook

<p align="center">
  <img
    src=".github/assets/design-system-demonstration.gif"
    alt="Design System Demonstration"
    title="Design System Demonstration"
    width="100%" 
  />
</p>

---

## 🚀 How it works

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Clonando e Executando

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/Ignite-Design-System.git

# Acesse a pasta do projeto no terminal
$ cd Ignite-Design-System

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O documentação Storybook inciará abrindo uma aba no navegador em alguma porta disponível  
```

---

## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://react.dev/)**
- **[Storybook](https://storybook.js.org/)**
- **[Stitches](https://stitches.dev/)**
- **[Radix UI](https://www.radix-ui.com/)**
- **[Turborepo](https://turbo.build/repo)**
- **[Changeset](https://github.com/changesets/changesets)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)

> Para mais detalhes das dependências individuais de cada um dos pacotes da aplicação, acesse o arquivo `package.json` de cada pacote respectivamente.

---

## ✍ Author

<img alt="Perfil Github" title="Perfil Github" src="https://github.com/PabloXT14.png" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Pablo_Alan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pabloalan/)](https://www.linkedin.com/in/pabloalan/)

[![Gmail Badge](https://img.shields.io/badge/-pabloxt14@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pabloxt14@gmail.com)](mailto:pabloxt14@gmail.com)

---

## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

Feito com 💜 por Pablo Alan 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pabloalan/)
