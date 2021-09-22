import React from 'react';




function Image({url, key}){

  return(
    <div>
      <img src={url} key={key} alt=""/>
    </div>
  )
}

export default Image;