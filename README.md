---

- !! this.setState => compiles after all sync code is finished

---

INSTALLATIONS:

BASE

- git clone repo
- cd cloned repo
- npx create-react-app .
- ( optional ) npm install react-scripts@latest
- npm install --save-dev prettier
- create file in project root .prettierrc.json => { "printWidth": 80,
  "tabWidth": 2, "useTabs": false, "semi": true, "singleQuote": true,
  "trailingComma": "all", "bracketSpacing": true, "jsxBracketSameLine": false,
  "arrowParens": "avoid", "proseWrap": "always" }
- folder public delete all except index.html =>
- in index.html => delete =>
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
- folder src => delete all except index.js and App.js and - clear extra imports
  and unused files in index.js and App.js
- import React from 'react' in App.js and each component file
- npm install --save-dev prop-types
- npm install --save-dev modern-normalize (in index.js => import
  'modern-normalize/modern-normalize.css')
- npm install --save-dev husky@4.3.7
- create file in project root .huskyrc: : { "hooks": { "pre-commit":
  "lint-staged" } }
- npm install --save-dev lint-staged@9.4.2
- create file in project root .lintstagedrc: { "src/**/\*.{json,css,scss,md}":
  ["prettier --write"], "src/**/\*.{js,jsx,ts,tsx}": ["prettier --write",
  "eslint --fix"] }
- npm start

ADDITIONAL ( + DEVTOOLS)

- npm install --save-dev react-router-dom
- npm install --save-dev axios
- npm install --save-dev uuid
- npm install --save-dev react-redux ( to contact our react component with redux
  library ). Has <Provider /> component, that wraps ALL our application and,
  throuth context, passes additional functionality ( <React.StrictMode>
  <Provider store={store}> <App /> </Provider> </React.StrictMode>)
- http://extension.remotedev.io/ => docs
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  => REDUX DEVTOOLS
- npm install --save-dev redux-devtools-extension
- in store.js => import { composeWithDevTools } from 'redux-devtools-extension';
- npm install --save-dev @reduxjs/toolkit
- npm install --save-dev redux-logger
- npm install --save-dev redux-persist
- npm install --save-dev @material-ui/core
- npm install --save-dev @material-ui/icons

DEPLOY AT GITHUB

- npm install --save-dev gh-pages
- in package.json => - scripts => "homepage":
  "https://myusername.github.io/my-app"add to package.json => change to
  =>"homepage": "https://erpua.github.io/goit-react-hw-09-phonebook";
- in package.json => add scripts: "predeploy": "npm run build", "deploy":
  "gh-pages -d build" => "scripts": { "start": "react-scripts start", "build":
  "react-scripts build", "test": "react-scripts test", "eject": "react-scripts
  eject", "predeploy": "npm run build", "deploy": "gh-pages -d build" },
- git add . / commit / push
- npm run deploy
- add repository root to GitHub Website link

---
