import "./SuccessModal.css";
import PropTypes from "prop-types";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__container-success">
        <button className="modal__close modal__close-success" onClick={onClose}>
          <img
            className="modal__close-button"
            src={closeButton}
            alt="closeButton"
          />
        </button>

        <h2 className="modal__title-success">
          Registration successfully <br /> completed!
        </h2>

        <button className="modal__submit-success" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SuccessModal;
