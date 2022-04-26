
import s from './Header.module.css';
import classNames from "classnames";

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {changeVisibilityFilter} from '../../redux/notes/notes-actions';


const Header = () => {
  const [state, setState] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeVisibilityFilter (state));
  });

  const toggleState = () => {
    setState(!state);
  };

  return (
    <div className={classNames(s.vision)}>
      <button type="button" className={s.btn} onClick={toggleState}>
        {state === true ? 'Arhvive Notes' : 'Active Notes'}
      </button>
    </div>
  );
};

export default Header;
