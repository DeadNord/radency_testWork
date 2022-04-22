// import s from './Contacts.module.css';
// import Contact from './Contact';
// import { useEffect } from 'react';

// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   getContacts,
//   getLoading,
// } from '../../../redux/contacts/contacts-selectors';
// import {
//   fetchContacts,
//   deleteContact,
// } from '../../../redux/contacts/contacts-operations';


// const Notes = ({title, type}) =>{
//   const contacts = useSelector(getContacts);
//   const loading = useSelector(getLoading);

//   const dispatch = useDispatch();
//   // const deleteContact = id => dispatch(deleteContact(id));

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <ul>
//         {arr1.map(item => (
// <li></li>
//         ))}
//       </ul>
// <ul> <ul>
//         {arr2.map(item => (
// <li></li>
//         ))}
//       </ul></ul>


//         {/* <ul className={s.contactsList}>
//           {contacts.map(item => (
//             <Contact
//               key={item.id}
//               name={item.name}
//               number={item.number}
//               id={item.id}
//               deleteContact={id => dispatch(deleteContact(id))}
//             />
//           ))}
//         </ul> */}
//     </>
//   );
// }

// export default Notes