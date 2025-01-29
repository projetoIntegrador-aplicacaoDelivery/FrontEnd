
# Fresh - Produtos Orgânicos (Aplicativo de Delivery)
[Escopo](link aqui)  |
<br><br>
Projeto FRONT-END desenvolvido com HTML5, CSS3, JavaScript, TypeScript e React, que permite o gerenciamento de entregas de alimentos saudáveis.

## Autores

- [Caique Gomes](https://www.linkedin.com/in/cttcaiquegomes/)

- [Daniel Lima](https://www.linkedin.com/in/danieldossantoslima)

- [Daniella Santana](https://www.linkedin.com/in/adaniellasantana/)

- [Rodrigo Oliveira](https://www.linkedin.com/in/rodrigo-oliveira-de-santana-23a330262/)
  
- [Sabrina Lima](https://www.linkedin.com/in/sabrina-santoslima/)

## Tecnologias Utilizadas

● HTML5
● CSS3
● JavaScript
● TypeSript
● React

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
