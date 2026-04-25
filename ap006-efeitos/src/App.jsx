import { useEffect, useState } from 'react'

function App() {
  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = `Contador: ${contador}`
    console.log("Titulo atualizado (dep: contador): ", contador)

    return () => {
      document.title = 'React App'
      console.log('Limpeza: título restaurado');
    }
  }, [contador])
  return (
    <div style={{padding:'20px'}}>
        <h2>Efeitos Colaterais</h2>
        <input type="text" placeholder='Digite algo' value={texto} onChange={(e) =>{
          setTexto(e.target.value)
        }}/>
        <div style={{marginTop: '10px'}}>
            <button onClick={()=> setContador(contador+1)}>
              Contador: {contador}
            </button>
            
        </div>
    </div>
  )
}

export default App
