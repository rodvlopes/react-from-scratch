import React from 'react'

const Hello = () =>
  <div>
    <h1>Alo Mundo</h1>
    <p>Refência para criar o ambiente do zero com babel e webpack:
      <a href="https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/">
                https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/
      </a>
    </p>
    <div>Configuração do ESLINT.
      <pre>{`  npm install eslint --save-dev
  npx eslint --init
  npm install eslint-loader --save-dev`}</pre>
    </div>
  </div>

export default Hello
