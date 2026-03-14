import { Cartao } from "./Cartao"
import Pedido from "./Pedido"
import Feedback from "./Feedback"

const textoOK = 'Já recebi'
const textoNOK = 'Ainda não recebi'
const funcaoOK = () => alert("Agradecemos o feedback")
const funcaoNOK = () => alert("Verificaremos")
const componenteFeedback = (
  <Feedback
    funcaoOK = {funcaoOK}
    funcaoNOK={funcaoNOK}
    textoNOK={textoNOK}
    textoOK={textoOK}
  />
)

export default () => {
  return(
    <div className="container border">
      <div className="row">
        <div className="col-12">
          {/*i.fa-solid.fa-hippo*/ }
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
        
      </div>
      <div className="row">
        <div className="col sm-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho = "22/02/2026">
            <Pedido 
              icone = "camera"
              titulo = "Câmera"
              descricao = "Uma câmera 4K"/>
              {componenteFeedback}
              </Cartao>
        </div>
        
        <div className="col sm-12 col-md-6 col-xl-3">
          <Cartao
          cabecalho = "23/02/2026">
            <Pedido 
              icone = "bicycle"
              titulo = "Bicicleta"
              descricao = "Uma bicicleta"/>
              {componenteFeedback}
            </Cartao>
        </div>
        <div className="col sm-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho = "24/02/2026">
            <Pedido 
              icone = "hippo"
              titulo = "Hipopótamo"
              descricao = "Um filhote de hipo"/>
              {componenteFeedback}
            </Cartao>
        </div>
        <div className="col sm-12 col-md-6 col-xl-3">
          <Cartao
          cabecalho = "25/02/2026">
            
            <Pedido 
              data = "25/02/2026"
              icone = "book"
              titulo = "Livro"
              descricao = "Um livro"/>
              {componenteFeedback}
            </Cartao>
        </div>
      </div>
    </div>
  )
}