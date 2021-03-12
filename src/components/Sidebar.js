function Sidebar({isOpen, close, title, children}) {
  return (
    <div className={`modal ${isOpen ? `modal--is-visible` : ""}`}>
      <div className="modal-cart">  
        <header className='modal-cart__header'>
          <button className="close-modal-cart" onClick={close}>
            x
          </button>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </div>
  )
}

export default Sidebar