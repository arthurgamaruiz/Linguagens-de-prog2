//rafce
import React, { useEffect, useState } from "react"

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)

  const obterEsatacao = (dataAtual, latidude) => {
    const d1 = new Date(dataAtual.getFullYear(), 5, 21)   //21/06/anoAtual
    const d2 = new Date(dataAtual.getFullYear(), 8, 24)
    const d3 = new Date(dataAtual.getFullYear(), 11, 22)
    const d4 = new Date(dataAtual.getFullYear(), 2, 21)

    const estaNoSul = latidude<0;
    if(dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? 'Inverno':'Verão'
    if(dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? 'Primavera':'Outono'
    if(dataAtual >= d3 || dataAtual < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'

  }
  //ícones das estações 
  const icones = {
    'Primavera':  'leaf' ,
    'Verão':  'umbrella-beach',
    'Outono': 'leaf',
    'Inverno':'snowman'

  }
  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        //chamar a função obterEstacao para obter a estação climática do usuário
        const estacao = obterEsatacao(dataAtual, position.coords.latitude)
        //obter ícone apropriado 
        const icone = icones[estacao]
        //atualizar estado
        setEstacao(estacao)
        setIcone(icone)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setData(dataAtual.toLocaleTimeString())
        //ajustar a jsx para que, por enquanto, somente o nome da estação apareça
      },
      (erro) => {
        setMensagemDeErro(erro)
        console.log(`Erro: ${erro.toString()}`);
      })
  }
  //obtém a localização apenas uma vez (logo após a primeira renderização)
  useEffect(() => {
    obterLocalizacao()
  }, [])
  
  return (
    <div className="container mt-2">        
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <div 
                style = {{height: '6rem'}}
                className="d-flex align-items-center border rounded mb-2">
                  <i className={`fa-solid fa-5x fa-${icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">
                    {estacao}
                  </p>
              </div>
              <div>
                <p className="text-center">
                  {
                    latitude ?
                      `Coordenadas: ${latitude}, ${longitude}. Data: ${data}` 
                    :
                    mensagemDeErro ? 
                    mensagemDeErro
                    :
                    'Clique no botão para saber sua estação'
                  }
                </p>
              </div>
              <button
                onClick={obterLocalizacao}
                className='btn btn-outline-primary w-100 mt-2'>
                Qual a minha estação ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default App