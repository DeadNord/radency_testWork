
import s from './Header.module.css';
import classNames from "classnames";

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {changeVisibilityFilter} from '../../redux/notes/notes-actions';

// interface Props {
//   onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
// }


const Header = () => {
  const [state, setState] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVisibilityFilter (state));
  });

  const toogleState = () => {
    setState(!state);
  };

  return (
    <div className={classNames(s.vision)}>
      <button type="button" className={s.btn} onClick={toogleState}>
        {state === true ? 'Arhvive Notes' : 'Active Notes'}
      </button>
    </div>
  );
};

export default Header;
