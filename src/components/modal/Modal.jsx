
import s from './Modal.module.css';

const Modal = ({ children }) => {
  return (
      <div className={s.modal}>
        {children}
   </div>
  );
};


export default Modal;
