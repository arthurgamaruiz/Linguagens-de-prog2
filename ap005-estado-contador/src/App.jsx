import React, {useState} from 'react'
//hook do React: permitir que componentes funcionais manipulem estados
const App = () => {
  const [contador, setContador] = useState(0)       //retorna um vetor: primeira posição tem uma variável de estado. Segunda posição tem uma função para ser usada
  return (
    <div>
      <h1>Contador: {contador} </h1>
      <button 
        onClick={() => setContador(contador+1)}>
        Incrementar
      </button>

      <button
        onClick={() =>setContador(0)}>
        Reiniciar
      </button>
      <button
        onClick={() => setContador(contador-1)}>
        Decrementar
      </button>
    </div>
  )
}

export default App