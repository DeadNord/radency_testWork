// import {FC} from "react"
import { FC, useState } from 'react';
import s from './Form.module.css';

import { useDispatch } from 'react-redux';
import { addNote, changeNote } from '../../redux/notes/notes-actions';


interface Props {
  formType: string,
  id: string
}

const Form: FC<Props> = (props) => {
  const [id] = useState(props.id);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const onSubmit = (data: object) =>
    dispatch(props.formType === 'add-note' ? addNote(data) : changeNote(data));

  const handleChange = (e:any) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'content':
        setContent(value);
        break;
    }
  };


  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit({id, title, category, content });
    reset();
  };

  const reset = () => {
    setTitle('');
    setCategory('');
    setContent('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <p>Title</p>
        <input
          className={s.input}
          type="text"
          name="title"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={title}
          onChange={handleChange}
        />
      </label>

      <label>
        <p>Category</p>
        <input
          className={s.input}
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
          className={s.input}
          type="text"
          name="content"
          required
          value={content}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        {(props.formType === "add-note") && 'Add Note'}
        {(props.formType === "change-note") && 'Change Note'}
      </button>
    </form>
  );
};

export default Form;
