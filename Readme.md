# Estudo do Tutorial de React

Os exercícios estão organizados em branchs e cada branch tem um readme com o conteúdo relevante dele.

* [Conceitos Fundamentais](../../tree/master)
* [Router Básico/Code Split/Lazy](../../tree/react-router-code-split)
* [HOC e Error Boundary](../../tree/hoc-and-error-boundaries)

### Master = Template

O Branch master pode ser usado como template para um projeto de React com as seguintes características:

* Webpack e Webpack dev server
* Babel
* ESlint com presets _standards_ e _react_
* Processador de CSS Stylus

## Criando o Setup React do Zero

*Refência:*
* https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/
* https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/
    
### Criando o projeto

    npm init -y
    npm install --save react react-dom
    npm install --save-dev webpack webpack-cli webpack-dev-server
    npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

### webpack.config.js básico

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

### Babel Setup

* Pode-se criar um arquivo .babelrc ou colocar a abaixo configuração no package.json.

    "babel": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    }

### Configuração do ESLINT

    npm install eslint --save-dev
    npx eslint --init
    npm install eslint-loader --save-dev

* O eslint-loader roda junto ao webpack em desenvolvimento para forçar o eslint enquanto desenvolve.
* Tem que adicionar a configuração abaixo no webpack.config

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

### Style/CSS Setup

    npm install style-loader css-loader stylus-loader stylus --save-dev

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

# Estudo dos Conceitos Fundamentais

Todos os tópicos relacionados dos conceitos fundamentais estão estudados neste branch.

Link para o tutorial: https://reactjs.org/docs/hello-world.html

### Funções passados para os eventos devem ser atrelados ao this. (Bind)

O ao passar um função como event handler, ela tem que estar atrelada ao this do componente. O mais frequente é fazer o *bind* dentro do contructor.

    contructor(props) {
        ...
        this.fnHandlder = this.fnHandlder.bind(this)
    }

Ver o componente MyPre para exemplo.

### Form: Componentes não controlados VS. controlados

Alguns componentes nativos como os inputs possuem seus estados controlados pelo DOM, para que o React controle o estado deles, é necessário _envelopa-los_ com um componente React ouvindo o _change_ e setando o _value_. 

Ver o componente MyForm. 

### Exercício final da parte básica do tutorial

Foi implementado um lista de prosutos com filtro no compomente: FilterableProductTable.
