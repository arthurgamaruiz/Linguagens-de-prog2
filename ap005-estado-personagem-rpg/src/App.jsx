//rafce
import React, {useState} from 'react'

const App = () => {
  const [classe, setClasse] = useState("")    //atualziação da classe 
  const [nivel, setNivel] = useState(1)       //atualização do nível (contador de 1 a 20)
  const [nome, setNome] = useState("")
  //ícones dos personagens
  const icones = {
    'Mago': 'hat-wizard',
    'Arqueiro': 'bullseye',
    'Guerreiro': 'khanda',
    'Curandeiro': 'hand-holding-medical'
  }

  
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        
        <div className="col-12 col-md-8">
          
          <div className="card">
            <h1 className="row justify-content-center">Criador de personagem RPG</h1> {/*título */}
            <div className="card-body">     {/**corpo do cartão */}
              <div className="mb-3 text-start">
                <label 
                  className="form-label"
                  style={{color: "#ccc", }}>
                  Nome do personagem
                </label>
                <input 
                  className="form-control w-100" 
                  placeholder = 'Aldric'
                  value={nome}
                  onChange={(e)=>setNome(e.target.value)}/>
                <div className='mb-3 text-start'
                  style={{padding: 2, display: 'flex', flexDirection: 'column'}}>
                  <label className='from-label'
                    style={{color: '#ccc'}}>
                    Classe
                  </label>
                  <select 
                    className='from-select'
                    value={classe}
                    onChange={e => {setClasse(e.target.value)}}>
                      <option value="">Selecione</option>
                      <option value="Guerreiro">Guerreiro</option>
                      <option value="Mago">Mago</option>
                      <option value="Arqueiro">Arqueiro</option>
                      <option value="Curandeiro">Curandeiro</option>
                  </select>
                  <div className='mb-3 text-start'>
                    <label className='from-label'
                    style={{color: '#ccc', display: 'flex', padding: 2}}>
                      Nível (1 a 20):
                    </label>
                    <div className='d-flex justify-content-evenly m-2'>
                      <button
                        onClick={() =>{if(nivel>1)       
                          setNivel(nivel-1)             
                        }}
                        className="btn btn-primary">
                          -
                      </button>
                      {nivel}
                      <button 
                        onClick={() => { if(nivel<20)     
                          setNivel(nivel+1)}}
                        className="btn btn-danger">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div 
                style = {{marginTop: 10, fontSize: 30, padding: 10, flexDirection: 'column'}}
                className="d-flex align-items-center border rounded mb-2">
                <h2 style={{fontSize: 40}}>
                  {nome}
                </h2>
                <p style={{color: '#ccc', fontSize: 20}}>
                  {classe}
                </p>  
                <i className={`fa-solid fa-5x fa-${icones[classe]}`}></i>
                  <label >Nível {nivel}</label>
                  <div className="progress" style={{height: 30, width: 300}}>
                    <div className="progress-bar bg-info"
                      style={{width: `${(nivel/20)*100}%`}}>
                        <label>{nivel/20*100}%</label>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App