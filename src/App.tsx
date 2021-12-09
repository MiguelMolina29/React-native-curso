import React from 'react'
// import TiposBasicos from './typescript/TiposBasicos'
// import ObjetosLiterales from './typescript/ObjetosLiterales'
// import Funciones from './typescript/Funciones'
// import Contador from './components/Contador';
import ContadorConHook from './components/ContadorConHook'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - react</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <Funciones/> */}
      <ContadorConHook />

    </div>
  )
}

export default App
