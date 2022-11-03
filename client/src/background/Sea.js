import React, {useRef, useMemo, useEffect} from 'react'
import image from "../assets/sea.png";
import '../App.css'

function Sea({image}) {

  return (
    <div className='sea'>
      <img className='sea_img' src={image}/>
    </div>
  );
};

export default Sea;