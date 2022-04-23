import React from "react"
import s from './Modal.module.css';
import { closeModal } from '../../redux/modal/modal-actions';
import { useDispatch } from 'react-redux';


interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={s.overlay}>
      <div className={s.content}>
        {props.children}
        <button
          type="button"
          className={s.button}
          onClick={()=>dispatch(closeModal())}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
