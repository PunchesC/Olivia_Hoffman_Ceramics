import React, {useState, useEffect} from 'react';
import './ImageGrid.css';
import Loader from './Loader';

import Image from './Image'
import axios from 'axios'
import InfinteScroll from 'react-infinite-scroll-component'

//add &count=10 to the end of line 15 inside ) to only show ten

function ImageGrid(){
  const [images, setImages] = useState([]);

  useEffect(()=>{
      fetchImages();
  }, [])

  const fetchImages = () =>{
    const apiRoot = "http://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=20`)
    .then(res=> setImages([...images,...res.data]))
  }

   return (
  <div className="ImageGridContainer">
    <InfinteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
      <div className="ImageGrid">
    {images.map(image => 
      <Image url={image.urls.thumb} key={image.id}/>
      )}
      </div>
    </InfinteScroll>
  </div>
)
}

export default ImageGrid;