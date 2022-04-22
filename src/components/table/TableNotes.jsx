import s from './Table.module.css';
import classnames from 'classnames';

import { useSelector } from 'react-redux';
import { getNotes } from '../../redux/notes/notes-selectors';
// import { deleteNote, archiveNote } from '../../redux/notes/notes-actions';

const TableNotes = () => {
  const notes = useSelector(getNotes);
  // const dispatch = useDispatch();
  // const deleteNotes = dispatch(deleteNote());

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

        {notes.map(item => (
          <ul
            id={item.id}
            className={classnames(s.table__list, s.table__notes)}
          >
            <li className={s.table__item}>
              <p>{item.name}</p>
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
              <p>{item.dates}</p>
            </li>
            <div className={s.table__ctrl}>
              {/* <button
              type="button"
              className={s.btn}
              onClick={deleteNote(item.id)}
            >
              Del
            </button> */}
              {/* <button type='button' className={s.btn} onClick={dispatch(changeNote(id))}>
        Ch
      </button> */}
              {/* <button
              type="button"
              className={s.btn}
              onClick={dispatch(archiveNote(item.id))}
            >
              Arch
            </button> */}
            </div>
          </ul>
        ))}
      </div>
      <div className={s.btnNote}>
        <button type="button" className={s.button}>
          Add Note
        </button>
      </div>
    </>
  );
};

export default TableNotes;
