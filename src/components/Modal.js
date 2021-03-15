// import styled from 'styled-components'

// const modal = styled.div`
//   position: fixed;
//   background-color: rgba(205, 205, 205, 0.536);
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   transition: 0.4s ease;
//   transform: translateX(100%);
//   z-index: 5; 
//   display: flex;
//   justify-content: center;
// `

// const openModal = styled.div`
//   transform: translateX(0);
// `

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(222,222,222,0.85);
//   cursor: pointer;
//   transition: opacity 0.5s ease-in-out;
//   opacity: 0;
// `

// function Modal({isOpen, close, children, ...props}) {
//   return (
//     <div className={`Modal ${isOpen ? `openModal` : ""}`}>
//       <Overlay onClick={close} {...props}></Overlay>
//       {children}
//     </div>
//   )
// }

// export default Modal
