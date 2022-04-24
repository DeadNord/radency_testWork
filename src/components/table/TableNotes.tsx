import s from './Table.module.css';
import classnames from 'classnames';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../redux/notes/notes-selectors';
import { getModalState } from '../../redux/modal/modal-selectors';

import Form from '../form/Form';
import Modal from '../modal/Modal';

import { deleteNote, archiveNote } from '../../redux/notes/notes-actions';
import { openModal } from '../../redux/modal/modal-actions';

const TableNotes = () => {
  const [formType, setformType] = useState("");
  const [itemId, setitemId] = useState("");

  const notes = useSelector(getNotes);
  const modalState = useSelector(getModalState);

  const dispatch = useDispatch();

  const openFormAdd = () => {
    setformType("add-note");
    dispatch(openModal());
  };

  const openFormChange = (id: string) => {
    setitemId(id)
    setformType("change-note");
    dispatch(openModal());
  };


  return (
   
    
    <>
      <div>
        <ul className={classnames(s.topic__list, s.table__notes)}>
          <li className={s.topic__item}>Name </li>
          <li className={s.topic__item}>Created </li>
          <li className={s.topic__item}>Category </li>
          <li className={s.topic__item}>Content </li>
          <li className={s.topic__item}>Dates </li>
        </ul>

        {notes.map((item: any) => (
          <ul
            id={item.id}
             key={item.id}
            className={classnames(s.table__list, s.table__notes)}
          >
            <li className={s.table__item}>
              <p>{item.title}</p>
            </li>
            <li className={s.table__item}>
              <p>{item.created}</p>
            </li>
            <li className={s.table__item}>
              <p>{item.category}</p>
            </li>
            <li className={s.table__item}>
              <p>{item.content}</p>
            </li>
            <li className={s.table__item}>
              {item.dates.map((date: string) => (
 <p key={date}>{date}</p>
              ))}
            </li>
            <div className={s.table__ctrl}>
              <button
              type="button"
              className={classnames( s.button, s.btnNoteCtrl)}
              onClick={()=>dispatch(deleteNote(item.id))}
            >
              Del
            </button>
              <button type='button' className={classnames( s.button, s.btnNoteCtrl)} onClick={()=>openFormChange(item.id)}>
        Ch
      </button>
              <button
              type="button"
              className={classnames( s.button, s.btnNoteCtrl)}
              onClick={()=>dispatch(archiveNote(item.id))}
            >
              Arch
            </button>
            </div>
          </ul>
        ))}
      </div>
      <div>
        <button
          type="button"
          className={classnames( s.button, s.btnNoteAdd)}
          onClick={()=>openFormAdd()}
        >
          Add Note
        </button>
      </div>
      {modalState === true && (
        <Modal>
          <Form formType={formType} id={itemId}/>
        </Modal>
      )}
    </>
  );
};

export default TableNotes;
