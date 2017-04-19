import React from 'react';
import GifItem from './GifItem'


const GifList = (props)=>{

  const gifItems=props.gifs.map((image)=>{
//console.log(image)
                    //             con {image} le paso la imagen y sus propiedades con {onGifSelect le permito acceder a la propiedad del padre}      
    return <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect}/>
  }
 )
   return( <div className="gifList">{gifItems}</div>)
}






export default GifList
