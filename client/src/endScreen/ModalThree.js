import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalThree({ handleClose, show }) {
  
  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>The dragon ate you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalThree;
