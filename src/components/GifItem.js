import React from 'react'

const GifItem =({gif, onGifSelect}) => {

  return(
          <div className="gifItem" onClick={() => onGifSelect(gif)}>
            <img src={gif.images.downsized.url}/>
          </div>
        )
}


export default GifItem
