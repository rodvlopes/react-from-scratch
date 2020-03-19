/* eslint no-useless-escape: 0 */
import React from 'react'
import { MyPre } from './MyPre'
import MyForm from './MyForm'

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

    <h4>webpack.config.js básico</h4>
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

    <p>O eslint-loader roda junto ao webpack em desenvolvimento
    para forçar o eslint enquanto desenvolve.
    Tem que adicionar a configuração abaixo no webpack.config</p>

    <MyPre>{`
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      ...
    `}</MyPre>

    <h4>Style/CSS Setup</h4>
    <MyPre>
      npm install style-loader css-loader stylus-loader stylus --save-dev¬
    </MyPre>

    <MyPre title="add rule to webpack.config">{`
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
          },
        ],
      }
    `}</MyPre>

    <h4>Funções passados para os eventos devem ser atrelados ao this. (Bind)</h4>
    <MyPre>
      O exemplo de como de fazer está dentro do componente MyPre.
    </MyPre>

    <h4>Form: Componentes não controlados VS. controlados</h4>
    <MyForm />
  </div>

export default Hello
