import React from "react";
import { FaTimes, FaToggleOff } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { setIsModalShowed, isModalShowed } = useGlobalContext();
  console.log(isModalShowed);
  return (
    <div className={`modal-overlay ${isModalShowed ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          onClick={() => {
            setIsModalShowed(false);
          }}
          className="close-modal-btn"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
