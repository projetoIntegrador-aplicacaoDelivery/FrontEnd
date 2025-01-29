
# Fresh - Produtos Orgânicos (Aplicativo de Delivery)
[![Static Badge](https://img.shields.io/badge/-Escopo%20do%20projeto-limegreen)](https://github.com/projetoIntegrador-aplicacaoDelivery/FrontEnd/blob/footer/documents/Escopo%20do%20Projeto%20-%20TASK2%20(Front-End).docx)

Projeto FRONT-END desenvolvido com HTML5, CSS3, JavaScript, TypeScript e React, que permite o gerenciamento de entregas de alimentos saudáveis.

## Logotipo e Paleta de Cores
<div style="display: inline_block">
    <img align="center" height=250px width=250px src="https://github.com/projetoIntegrador-aplicacaoDelivery/FrontEnd/blob/footer/documents/Logotipo.png"/>
    <img align="center" height=250px width=400px src="https://github.com/projetoIntegrador-aplicacaoDelivery/FrontEnd/blob/footer/documents/paletadecores.png"/>
</div>

## Autores

- [Caique Gomes](https://www.linkedin.com/in/cttcaiquegomes/) https://github.com/Caiqe

- [Daniel Lima](https://www.linkedin.com/in/danieldossantoslima) https://github.com/DanielDosSantosLima

- [Daniella Santana](https://www.linkedin.com/in/adaniellasantana/) https://github.com/adanisantana

- [Rodrigo Oliveira](https://www.linkedin.com/in/rodrigo-oliveira-de-santana-23a330262/) https://github.com/RPX31
  
- [Sabrina Lima](https://www.linkedin.com/in/sabrina-santoslima/) https://github.com/sabrinasanmi

<table>
  <tr>
	<td align="center"><a href="https://www.linkedin.com/in/cttcaiquegomes/"><img style="border-radius: 50%;" src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/caique%20rec?updatedAt=1738073986570" width="100px;" alt="Caique"/><br /><sub><b>Caique Gomes</b></sub></a><br /><a href="https://github.com/Caiqe" title="Caique Gomes"></a></td> 
	<td align="center"><a href="https://www.linkedin.com/in/danieldossantoslima"><img style="border-radius: 50%;" src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/daniel%20rec?updatedAt=1738073986046" width="100px;" alt="Daniel"/><br /><sub><b>Daniel Lima</b></sub></a><br /><a href="https://github.com/DanielDosSantosLima" title="Daniel Lima"></a></td> 
	  
</tr>
</table>


## Tecnologias Utilizadas

<div style="display: inline_block">
    <img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img align="center" alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img align="center" alt="CSS" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img align="center" alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img align="center" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</div>

## Ferramenta de Gestão de Projetos

● Jira - https://projetos-gen.atlassian.net/jira/core/projects/T2F/board?atlOrigin=eyJpIjoiY2Q5ZTE0MTY3ZmZjNDQ2ZThkY2Q1MjVjMDIwNjFiOTgiLCJwIjoiaiJ9

● Google Drive

## Instituição de Ensino


<img src="https://brazil.generation.org/wp-content/uploads/2024/10/Generation_BRAZIL_logo_NEW-BLUE.png" alt="Logo" width="200">


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
