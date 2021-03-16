import { PropTypes } from "prop-types";

import './styles.scss'

function ModalBodySidebar({isOpen, close, title, children}) {
  return (
    <div className={`modal ${isOpen ? `modal--is-visible` : ""}`}>
      <div className='overlay' onClick={close}></div> 
      <div className="modal-sidebar">   
        <header className='modal-sidebar__header'>
          <button className="modal-sidebar__close" onClick={close}>
            x
          </button>
          <span>{title}</span>
        </header>
        <div className='modal-sidebar__products'>{children}</div>
      </div>
    </div>
  )
}

ModalBodySidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default ModalBodySidebar