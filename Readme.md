# Estudo do Tutorial de React

Os exercícios estão organizados em branchs e cada branch tem um readme com o conteúdo relevante dele.

* [Voltar P/ Lista de Tópicos](../../tree/master)

## babel-loader for eslint

Foi necessário acrescentar o parser babel ao eslint para contornar o erro que estava dando com o code-splitting.

    npm install babel-loader --save-dev


### Acrescentar ao .eslintrc.js

    module.exports = {
      ...,
      parser: 'babel-eslint',
      ...
    }

# Parte Avançada: Code-Split / Router

   npm install react-router-dom

## Router Conceitos Fundamentais

A app deve conter um componente _BrowserRouter_ no nível mais alto e um ou mais componentes _Switch_ aninhados que selecionam, através do componente _Route_ o que será exibido casando o path deste último componente contra a URL atual.

    BrowserRouter
      Link
      Switch
        Route
        Route
          Switch
            Route
            Route

## Lazy Loding / Code Splitting Conceitos Fundamentais

A forma mais recomensável de fazer code splitting é carregar os componentes de forma _lazy_ ao navegar por eles. Neste setup o code split sai automaticamente. O React oferece a fução _lazy_ e componente Suspense que deve ser necessáriamente usado com componentes lazy.

    const Users = lazy(() => import('./routes/Users')) 
    <Suspense fallback={<h3>Loading...</h3>}>
      <Users />
    </Suspense>