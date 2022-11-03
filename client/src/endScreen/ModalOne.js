import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalOne({ handleClose, show }) {
  
  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        ohHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've Stayed in the same place</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalOne;
