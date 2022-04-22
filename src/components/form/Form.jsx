// import { useState } from 'react';
// import s from './Form.module.css';
// // import { alert } from '@pnotify/core';
// // import '@pnotify/core/dist/PNotify.css';
// // import '@pnotify/core/dist/BrightTheme.css';

// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from '../../../redux/contacts/contacts-operations';
// // import { getItems } from '../../../redux/contacts/contacts-selectors';

// const Form = ({formType})=> {
//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [content, setContent] = useState('');
//   const [buttonType, setButtonType] = useState('');
  
//   // const contacts = useSelector(getItems);
//   const dispatch = useDispatch();
//   const onSubmit = data => dispatch(formType === "add" ?
//     addContact(data) : changeContact(data))
  
//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'category':
//         setCategory(value);
//         break;
//       case 'content':
//         setContent(value);
//         break;
//       default:
//         return;
//     }
//   };
    
//     const buttonType = (formType) => {
//           switch (formType) {
//       case 'add':
//         setButtonType("Add Note");
//         break;
//       case 'change':
//         setButtonType("Change Note");
//         break;

//       default:
//         return;
//     }
//     }
//   const handleSubmit = e => {
//     // const existContacts = contacts.find(elem => elem.name.includes(name));
//     e.preventDefault();
//     onSubmit({ name, category, content });
//     reset();

//     // if (existContacts) {
//     //   alert({
//     //     title: 'Alert',
//     //     text: `${existContacts.name} is already in contacts`,
//     //   });
//     // } else {
//     //   onSubmit({ name, number });
//     //   reset();
//     // }
//   };

//   const reset = () => {
//     setName('');
//     setCategory('');
//     setContent('');
//   };

//   return (
//     // <form className={s.form} onSubmit={handleSubmit}>
//     //   <label className={s.label}>
//     //     <p className={s.name}>Name</p>
//     //     <input
//     //       type="text"
//     //       name="name"
//     //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     //       required
//     //       value={name}
//     //       onChange={handleChange}
//     //       className={s.input}
//     //     />
//     //   </label>
//     //   <label className={s.label}>
//     //     <p className={s.name}>Number</p>
//     //     <input
//     //       type="tel"
//     //       name="number"
//     //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     //       required
//     //       value={number}
//     //       onChange={handleChange}
//     //       className={s.input}
//     //     />
//     //   </label>
//     //   <button className={s.button} type="submit">
//     //     Add contact
//     //   </button>
//     // </form>

//     <form className={s.form} onSubmit={handleSubmit}>
//       <label>
//         <p>Name</p>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         <p>Category</p>
//         <input
//           type="text"
//           name="category"
//           required
//           value={category}
//           onChange={handleChange}
//           list="category"
//         />
//         <datalist id="category">
//           <option value="Task" />
//           <option value="Thought" />
//           <option value="Idea" />
//         </datalist>
//       </label>
//       <label>
//         <p>Content</p>
//         <input
//           type="text"
//           name="content"
//           required
//           value={content}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit" className={s.button}>
//         {buttonType}
//       </button>
//     </form>
//   );
// }

// export default Form;