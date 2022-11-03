import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalTwo({ handleClose, show }) {
  
  const [num, setNum] = useState(null);
  const [title, setTile] = useState(["You Win", "Game Over"])
  const [text, setText] = useState(["Your rom tasted awesome", "Your drank poisened rom"])


  useEffect(() => {
    // generate random number 1 (win) or 2 (lost) and set num to it
    const x = Math.round(Math.random());
    setNum(x);
  }, [])

  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title[num]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text[num]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalTwo;
