//rafce
import React from 'react'

const Imagem = ({src, alt, imgStyle}) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
        {/* arredonda bordas da imagem */}
        <img className="border-round" src={src} alt={alt} />
    </div>
  )
}

export default Imagem