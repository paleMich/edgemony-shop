import { PropTypes } from "prop-types";

import "./styles.scss";

function ModalBodyCenter({
  isOpen,
  close,
  children
}) {
  return (
    <div className={`modal ${isOpen ? `modal--is-visible` : ""}`}>
      <div className="overlay" onClick={close} />
      <div className="modal-body">
        <span
          onClick={close}
          className="close-modal"
        >
          close
      </span>
        {children}
      </div>
    </div>
  );
}

ModalBodyCenter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default ModalBodyCenter;