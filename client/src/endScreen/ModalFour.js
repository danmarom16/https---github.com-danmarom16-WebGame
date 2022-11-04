import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalFour({ handleClose, show }) {
  
  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>You Win!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've found the treasure</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalFour;
