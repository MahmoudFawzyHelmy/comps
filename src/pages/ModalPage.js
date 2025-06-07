import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={<Button primary onClick={handleClose}>I Accept</Button>}>
          <p> here is an important agreement for u to accept</p>
        </Modal>
      )}
    </div>
  );
}
