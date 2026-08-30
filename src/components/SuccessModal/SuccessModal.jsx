import "./successModal.css";
import PropTypes from "prop-types";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal-success">
      <div className="modal-success__overlay" onClick={onClose}></div>

      <div className="modal-success__container">
        <button className="modal-success__close" onClick={onClose}>
          <img
            className="modal-success__close-button"
            src={closeButton}
            alt="closeButton"
          />
        </button>

        <h2 className="modal-success__title">
          Registration successfully <br /> completed!
        </h2>

        <button className="modal-success__submit" onClick={onSignIn}>
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
