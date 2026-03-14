import { Cartao } from "./Cartao"
import Comentario from "./Comentario"
import Feedback from "./Feedback"

const textoOK = 'Aprovar'
const textoNOK = 'Não aprovar'
const funcaoOK = () => alert("Comentário aprovado!!")
const funcaoNOK = () => alert("Comentário não aprovado!")
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
        <div className="col-12" style={{margin: 'auto', padding: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Cartao
            cabecalho = "Mary.Lockman69">
            <Comentario 
              avatar = "https://i.pravatar.cc/172"
              //titulo = "Câmera"
              descricao = "Tempora et rerum culpa vel illo. Quia velit esse. Quaerat sint optio voluptas quam autem dolorem id cumque. Ad eum voluptas ratione tempore doloribus consequatur eaque. Quae ratione itaque ipsum temporibus enim pariatur. Asperiores aut numquam et perferendis voluptatem laborum dolores deleniti non."/>
              {componenteFeedback}
              </Cartao>
        </div>
        </div>
        <div className="row">
          <div className="col-12" style={{margin: 'auto', padding: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Cartao
          cabecalho = "Brock_Reichel18">
            <Comentario 
              avatar = "https://i.pravatar.cc/177"
              //titulo = "Bicicleta"
              descricao = "Necessitatibus molestiae error est vel beatae sunt corporis repudiandae. Consequatur enim ut et blanditiis. Quisquam modi error ullam dolores rerum nihil. Distinctio neque at cupiditate dolores. Deleniti aliquid maxime dignissimos fugiat quia ab quia ratione in. Omnis vel omnis sint ut officia sunt dolor autem et."/>
              {componenteFeedback}
            </Cartao>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{margin: 'auto', padding: 18, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Cartao
            cabecalho = "Nils_Steuber">
            <Comentario 
              avatar = "https://i.pravatar.cc/180"
              //titulo = "Hipopótamo"
              descricao = "Ullam quaerat et quam ut. Eaque quis et rerum corporis quisquam rem sit modi et. Cupiditate corrupti quia repellendus ut cum tempore. Optio fugit et harum ut fuga mollitia."/>
              {componenteFeedback}
            </Cartao>
        </div>
        </div>
    </div>
  )
}