import React, { useState } from "react";
import ModalOne from "./ModalOne";
import ModalTwo from "./ModalTwo"
import ModalThree from "./ModalThree";
import ModalFour from "./ModalFour";
import ModalSix from "./ModalSix"
import ModalFive from "./ModalFive"

function EndScreen({show , setShow ,setIsPlayed, setDiceNum, diceNum, setImgSrc }) {

  const handleClose = () => {
    setShow(false);
    setDiceNum('1');
    setIsPlayed(false);
    setImgSrc("./cubes/cube1.jpg")
  };

  const handleShow = () => setShow(true);

  return (
    
    <div>
      {
        {
          '1':<ModalOne handleClose={handleClose} show={show} />,
          '2':<ModalTwo handleClose={handleClose} show={show} />,
          '3':<ModalThree handleClose={handleClose} show={show} />,
          '4':<ModalFour handleClose={handleClose} show={show} />,
          '5':<ModalFive handleClose={handleClose} show={show} />,
          '6':<ModalSix handleClose={handleClose} show={show} />,
        }[diceNum]
      }
    </div>
  );
}

export default EndScreen;
