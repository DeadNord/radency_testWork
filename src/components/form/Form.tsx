import React from "react"
import { useState } from 'react';
import s from './Form.module.css';

import { useDispatch } from 'react-redux';
import { addNote, changeNote } from '../../redux/notes/notes-actions';

interface Props {
  formType: string,
  id: string
}

const Form: React.FC<Props> = (props) => {
    const [id] = useState(props.id);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [buttonType, setButtonType] = useState('');

  const dispatch = useDispatch();
  const onSubmit = (data: object) =>
    dispatch(props.formType === 'add-note' ? addNote(data) : changeNote(data));

  const handleChange = (e:any) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'content':
        setContent(value);
        break;
    }
  };
  switch (props.formType) {
    case 'add-note':
      setButtonType('Add Note');
      break;
    case 'change-note':
      setButtonType('Change Note');
      break;
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit({id, name, category, content });
    reset();
  };

  const reset = () => {
    setName('');
    setCategory('');
    setContent('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        <p>Category</p>
        <input
          type="text"
          name="category"
          required
          value={category}
          onChange={handleChange}
          list="category"
        />
        <datalist id="category">
          <option value="Task" />
          <option value="Thought" />
          <option value="Idea" />
        </datalist>
      </label>
      <label>
        <p>Content</p>
        <input
          type="text"
          name="content"
          required
          value={content}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        {buttonType}
      </button>
    </form>
  );
};

export default Form;
