import React from 'react';
import GifItem from './GifItem'

class GifList extends React.Component{
constructor(props){
  super(props)

}


render(){
  const item=this.props.gifs.map((image)=>{
    return(
      <div>
        <img src={image.url}/>
        </div>
    )
  })
  return (
    <li>{item}</li>
  )
}

}



export default GifList
