# Estudo do Tutorial de React

Os exercícios estão organizados em branchs e cada branch tem um readme com o conteúdo relevante dele.

* [Voltar P/ Lista de Tópicos](../../tree/master)

# Parte Avançada: Usando Bibiliotecas Extenas

Para usar bibliotecas que manipulam o DOM diretamente é necessário encapsular a manipulação da biblioteca em um componente.

# Carregando Bibliotecas com Webpack

A melhor forma que encontrei até agora é fazer com que o webpack forneça essas bibliotecas de forma global sempre que uma referência a ela apareça no código. 

    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })

# ESLint

Tem que avisar ao ESlint que uma bibliteca é fornecida globalmente:

    env {
      jquery: true
    }

# Carregando CSS do plugins

    import 'plugin_name/style.css'

Obs.: Tem que identificar o arquivo css correspondente dentro do node_modules.

# File Imports

Os arquivos css podem possuir referências a arquivos estáticos (imagens). É necessário um loader para que esses estáticos sejam encontrados pelo Webpack.

    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },

    npm install file-loader --save-dev
