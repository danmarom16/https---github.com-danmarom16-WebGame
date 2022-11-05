import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';


function Pirate({pirateLocation, image, xMovement, yMovement, calPirateLocation}) {

  const [rotate, setRotate] = useState(true);

  useEffect(()=>{
    setRotate(!rotate)
  },[xMovement])
  
  return (
    <div className='pirate'>
      <motion.img
        animate={{x: xMovement, y: yMovement, rotate:rotate ? 360 : 0}}
        transition={{type: "tween", duration: 0.8}}
        src={image}/>
    </div>
  ); 
}

export default Pirate