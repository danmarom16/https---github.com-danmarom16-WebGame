import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "../Axios";

function ModalFive({ handleClose, show }) {
  const [message, setMessage] = useState({});

  useEffect(() => {
    axios
      .get(`/`)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [show]);

  return (
    <div>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Random DB Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Click here to play again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalFive;
