import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalSix({ handleClose, show }) {
  
  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        ohHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>You Win!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've reached the island</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalSix;
