/* eslint no-useless-escape: 0 */
import React from 'react'
import { MyPre } from './MyPre'

const Hello = () =>
  <div>
    <h1>Criando o Setup React do Zero</h1>
    <p>Refência:
      <a href="https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/">
                https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/
      </a>
    </p>
    <h4>Criando o projeto</h4>
    <MyPre>
      npm init -y¬
      npm install --save react react-dom¬
      npm install --save-dev webpack webpack-cli webpack-dev-server¬
      npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react¬
    </MyPre>

    <h4>package.json básico</h4>
    <MyPre>{`
      module.exports = {
        entry: './src/app',
        scripts: {
          start: "webpack-dev-server --mode development --open --hot"
        }
        output: {
          filename: 'bundle.js'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
            }
          ]
        }
      };
    `}</MyPre>

    <h4>Babel Setup</h4>
    <p>Pode-se criar um arquivo .babelrc ou colocar a abaixo configuração no package.json.</p>
    <MyPre>{`
      "babel": {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      }
    `}</MyPre>
    <h4>Configuração do ESLINT</h4>
    <MyPre>
      npm install eslint --save-dev¬
      npx eslint --init¬
      npm install eslint-loader --save-dev¬
    </MyPre>
  </div>

export default Hello
