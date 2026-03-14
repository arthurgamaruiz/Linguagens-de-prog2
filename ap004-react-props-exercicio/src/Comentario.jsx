//rafce
const Comentario = (props) => {
    return (
            <div className="d-flex">
                <div className="d-flex align-items-center">
                    <img
                        src={props.avatar}
                        className="rounded-circle me-3"
                        width="100"
                        height="100"
                    />
                </div>
                {/* div>(h4.text-center+p.text-center) */}
                <div className="border flex-grow-1 rounded p-3">
                    {/* <h4 className="text-center">{props.titulo}</h4> */}
                    <p className="text-center">{props.descricao}</p>
                </div>
            </div>
    )
}

export default Comentario