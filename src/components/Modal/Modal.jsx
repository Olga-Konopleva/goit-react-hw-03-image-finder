import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const root = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  //didMount
  useEffect(() => {
    window.addEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    // didUpdate
    return () => window.removeEventListener('keydown', onEsc); //willUnmount
  });

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">{children}</div>
    </div>,
    root,
  );
};

export default Modal;
